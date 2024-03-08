import { MailerService } from '@nestjs-modules/mailer';
import {
  BadGatewayException,
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import { GraphQLError } from 'graphql';
import * as path from 'path';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from 'src/common/constants';
import {
  convertFloatNumberToString,
  convertToCents,
  createStream,
  makeId,
  writeFileIntoDirectory,
} from 'src/common/helper';
import { BookingEntity } from 'src/shared/entity/bookings.entity';
import { CardEntity } from 'src/shared/entity/card.entity';
import { ChildMessageEntity } from 'src/shared/entity/child-messages.entity';
import { MessageEntity } from 'src/shared/entity/messages.entity';
import { TransactionEntity } from 'src/shared/entity/transaction.entity';
import { UserEntity } from 'src/shared/entity/user.entity';
import Stripe from 'stripe';
import * as moment from 'moment';
import { AdditionalRequiredCostEntity } from 'src/shared/entity/additional-required-cost.entity';
import { PropertyEntity } from 'src/shared/entity/property.entity';
import {
  BookingStatusEnum,
  MessageStatusEnum,
  RentSmartlyCurrency,
} from 'src/common/enum';
import { CommissionFeesEntity } from 'src/shared/entity/commissionFees.entity';
import { UserBillingEntity } from '../../shared/entity/user_billings.entity';
import {
  GqlBadRequestException,
  GqlBadUserInput,
  GqlNotFoundException,
} from '../../common/error';

const stripe = new Stripe(.STRIPE_API_KEY, {
  //@ts-ignore
  apiVersion: '2022-11-15',
});
import { PubSub } from 'graphql-subscriptions';
import { CityEntity } from '../../shared/entity/city.entity';
import {
  ChildEntity,
  ILike,
  MoreThanOrEqual,
  SelectQueryBuilder,
} from 'typeorm';
import { AwaitExpression } from 'ts-morph';

const pubSub = new PubSub();
@Injectable()
export class InboxService {
  constructor(private mailerService: MailerService) {}
  async messageWithInfoInput(
    user,
    messageSendDto,
    proofOfIdentity,
    occupation,
    updateUserBookingDtos,
  ) {
    try {
      let checkBookings = await BookingEntity.findOneBy({
        property_id: messageSendDto.property_id,
        landlord_id: messageSendDto.landlord_id,
        tenant_id: user.id,
      });
      if (checkBookings) {
        throw new GqlNotFoundException(ERROR_MESSAGE.BookingFound);
      }
      if (user.id === messageSendDto.landlord_id) {
        throw new GqlNotFoundException(ERROR_MESSAGE.SameAccountError);
      }
      let uploadFileName;
      let uploadWithExtension;
      let uploadWithOccupationExtension;

      if (proofOfIdentity) {
        let result = makeId(5);
        const uploadPhotoFile = await createStream(proofOfIdentity);
        const uploadPhotoDir = './uploads/users/identity_proof';
        const dirPath = 'uploads/users/identity_proof/';
        const uploadFileName = `${result}${Date.now()}`;

        await writeFileIntoDirectory(
          dirPath,
          proofOfIdentity,
          uploadPhotoDir,
          uploadPhotoFile,
          uploadFileName,
        );

        uploadWithExtension =
          `${uploadFileName}` + `${path.extname(proofOfIdentity.filename)}`;
      }

      if (occupation) {
        let result = makeId(5);
        const uploadPhotoFile = await createStream(occupation);
        const uploadPhotoDir = './uploads/users/proof_of_occupation_income';
        const dirPath = 'uploads/users/proof_of_occupation_income/';
        const uploadFileName = `${result}${Date.now()}`;

        await writeFileIntoDirectory(
          dirPath,
          occupation,
          uploadPhotoDir,
          uploadPhotoFile,
          uploadFileName,
        );

        uploadWithOccupationExtension =
          `${uploadFileName}` + `${path.extname(occupation.filename)}`;
      }
      if (updateUserBookingDtos.mobile !== undefined) {
        const userDetails = await UserEntity.findOne({
          where: {
            mobile: updateUserBookingDtos.mobile,
          },
        });

        if (userDetails.id !== user.id) {
          throw new GqlBadRequestException(ERROR_MESSAGE.MobileNumberExist);
        }

        const users = await UserEntity.save({
          ...(updateUserBookingDtos as UserEntity),
          id: user.id,
          identity_proof: uploadWithExtension,
          proof_of_occupation_income: uploadWithOccupationExtension,
        });
      }

      const propertyRent: any = await PropertyEntity.findOne({
        where: {
          id: messageSendDto.property_id,
        },
      });

      const additionalCost =
        await AdditionalRequiredCostEntity.createQueryBuilder('additional')
          .select(`SUM(additional.amount )`, `add`)
          .where({
            property_id: messageSendDto.property_id,
          })
          .getRawOne();

      const totalAmount =
        Number(additionalCost.add) + Number(propertyRent.rent);

      const booking = await BookingEntity.save({
        tenant_id: user.id,
        property_id: messageSendDto.property_id,
        landlord_id: messageSendDto.landlord_id,
        status: messageSendDto.status,
        start_date: messageSendDto.start_date,
        end_date: messageSendDto.end_date,
        amount: totalAmount,
        currency: RentSmartlyCurrency.CURRENCY,
      } as any);
      booking.start_date = new Date(booking.start_date);
      booking.end_date = new Date(booking.end_date);
      const message = await MessageEntity.save({
        booking_id: booking.id,
        to_id: messageSendDto.landlord_id,
        from_id: user.id,
        status: messageSendDto.status,
      } as any);

      await ChildMessageEntity.save({
        message_id: message.id,
        to_id: messageSendDto.landlord_id,
        from_id: user.id,
        text: messageSendDto.message,
      } as any);
      return {
        message: SUCCESS_MESSAGE.BookingConform,
        data: booking,
      };
    } catch (error) {
      throw new GraphQLError(error.message || '', {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  async continueChatting(id: number) {
    try {
      const BookingDetails = await BookingEntity.findOneBy({
        id: id,
      });
      if (!BookingDetails) {
        throw new GqlNotFoundException(ERROR_MESSAGE.BookingNotFound);
      }

      const start_date = BookingDetails.start_date || null;
      const end_date = BookingDetails.end_date || null;
      const getTenatDetils = await UserEntity.findOneBy({
        id: BookingDetails.tenant_id,
      });
      const getPropertyDetails = await PropertyEntity.findOneBy({
        id: BookingDetails.property_id,
      });

      const getLandloardDetails = await UserEntity.findOneBy({
        id: BookingDetails.landlord_id,
      });

      BookingDetails.start_date = new Date(start_date);
      BookingDetails.end_date = new Date(end_date);
      const getMessageData = await MessageEntity.findOneBy({
        booking_id: id,
      });
      let Message = await ChildMessageEntity.findBy({
        message_id: getMessageData.booking_id,
      });

      return {
        BookingDetails,
        getTenatDetils,
        getPropertyDetails,
        getLandloardDetails,
        getMessageData,
        Message,
      };
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.UserNotFound, {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }
  async newMessageSubscription(
    fromId: number,
    toId: number,
    bookingId: number,
  ) {
    try {
      return pubSub.asyncIterator(`newMessage`);
    } catch (error) {
      throw new GraphQLError(error.message || '', {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  async sendMessage(
    fromId: number,
    toId: number,
    bookingId: number,
    message: string,
    status: number,
    messageFile,
  ) {
    try {
      let uploadFileName;
      let uploadWithMessageFileExtension;
      if (message === '' && (messageFile === null || '')) {
        throw new GqlBadUserInput(ERROR_MESSAGE.EmptyMessageError);
      }

      if (messageFile) {
        let result = makeId(5);
        const uploadFile = await createStream(messageFile);
        const uploadDir = './uploads/document/message_file';
        const dirPath = 'uploads/document/message_file/';
        uploadFileName = result + `${Date.now()}`;

        await writeFileIntoDirectory(
          dirPath,
          messageFile,
          uploadDir,
          uploadFile,
          uploadFileName,
        );

        uploadWithMessageFileExtension =
          `${uploadFileName}` + `${path.extname(messageFile.filename)}`;
      }

      const BookingDetails = await BookingEntity.findOneBy({
        id: bookingId,
      });
      if (!BookingDetails) {
        throw new GqlBadRequestException(ERROR_MESSAGE.BookingNotFound);
      }
      const getTenatDetils = await UserEntity.findOneBy({
        id: BookingDetails.tenant_id,
      });
      if (!getTenatDetils) {
        throw new GqlBadRequestException(ERROR_MESSAGE.DeletedUser);
      }

      // const getPropertyDetails = await PropertyEntity.findOneBy({
      //   id: BookingDetails.property_id,
      // });
      const getLandloardDetails = await UserEntity.findOneBy({
        id: BookingDetails.landlord_id,
      });
      if (!getLandloardDetails) {
        throw new GqlBadRequestException(ERROR_MESSAGE.DeletedUser);
      }

      const getMessageDetails = await MessageEntity.findOneBy({
        booking_id: bookingId,
      });
      if (!getMessageDetails) {
        throw new GqlBadRequestException(ERROR_MESSAGE.NoMessage);
      }

      let messagese = await ChildMessageEntity.find({
        where: { message_id: getMessageDetails.id },
      });

      let childmessage = await ChildMessageEntity.save({
        message_id: getMessageDetails.id,
        to_id: toId,
        from_id: fromId,
        text: message,
        status: status,
        file: uploadWithMessageFileExtension,
      } as any);

      let findFileData = await ChildMessageEntity.findOneBy({
        id: childmessage.id,
      });

      let messageDataForUser = {
        to_id: toId,
        tenant_name: getTenatDetils.first_name,
        tenant_image: getTenatDetils.image,
        landlord_name: getLandloardDetails.first_name || null,
        landlord_image: getLandloardDetails.image || null,
        from_id: fromId,
        text: message,
        file: findFileData.file || null,
        created_at: new Date(childmessage.created_at),
      };

      pubSub.publish(`newMessage`, {
        newMessage: messageDataForUser,
        booking: bookingId,
        from: fromId,
        to: toId,
      });

      // // return chatMessage;
      return {
        message: message,
        bookingId: bookingId,
        from: fromId,
        to: toId,
        tenant_name: getTenatDetils.first_name,
        tenant_image: getTenatDetils.image || null,
        landlord_name: getLandloardDetails.first_name || null,
        landlord_image: getLandloardDetails.image || null,
        messageFile: findFileData.file || null,
        created_at: new Date(childmessage.created_at),
      };
    } catch (error) {
      throw new GraphQLError(error.message || '', {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  async messageInput(user, messageSendDto, messageFile) {
    try {
      let uploadFileName;
      let uploadWithMessageFileExtension;

      const message = await MessageEntity.findOneBy({
        id: messageSendDto.id,
      });

      if (!message) {
        throw new BadGatewayException(ERROR_MESSAGE.MessageIdError);
      }

      if (messageFile) {
        let result = makeId(5);
        const uploadFile = await createStream(messageFile);
        const uploadDir = './uploads/document/message_file';
        const dirPath = 'uploads/document/message_file/';
        uploadFileName = result + `${Date.now()}`;

        await writeFileIntoDirectory(
          dirPath,
          messageFile,
          uploadDir,
          uploadFile,
          uploadFileName,
        );

        uploadWithMessageFileExtension =
          `${uploadFileName}` + `${path.extname(messageFile.filename)}`;
      }

      this.mailerService
        .sendMail({
          to: user.email,
          from: {
            name: 'Rent Smartly',
            address: .GMAIL_USER_EMAIL,
          },
          subject: `Do Not Reply: [Rent Smartly] Rent Smartly App - Message`,
          template: 'message-send',
          context: {
            name: user.first_name,
            message: messageSendDto.message,
          },
        })
        .catch((mailError) => {
          console.log('Mailer Error', mailError);
        });

      await ChildMessageEntity.save({
        message_id: messageSendDto.id,
        to_id: messageSendDto.to_id,
        from_id: messageSendDto.from_id,
        text: messageSendDto.message,
        file: uploadWithMessageFileExtension,
      } as any);

      return SUCCESS_MESSAGE.messageSent;
    } catch (error) {
      throw new GraphQLError(error.message || '', {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  async dataVerification(id, user) {
    const userInfo = await UserEntity.findOne({
      where: {
        id: user.id,
      },
    });

    const nullFields = new UserEntity();

    nullFields.gender = userInfo.gender;

    if (!userInfo.dob || userInfo.dob) {
      nullFields.dob = userInfo.dob;
    }

    if (!userInfo.occupation || userInfo.occupation) {
      nullFields.occupation = userInfo.occupation;
    }

    if (!userInfo.dialer_code || userInfo.dialer_code) {
      nullFields.dialer_code = userInfo.dialer_code;
    }

    if (!userInfo.mobile || userInfo.mobile) {
      nullFields.mobile = userInfo.mobile;
    }

    if (
      !userInfo.proof_of_occupation_income ||
      userInfo.proof_of_occupation_income
    ) {
      nullFields.proof_of_occupation_income =
        userInfo.proof_of_occupation_income;
    }

    if (!userInfo.identity_proof || userInfo.identity_proof) {
      nullFields.identity_proof = userInfo.identity_proof;
    }

    if (Object.values(nullFields).includes(null)) {
      return {
        user_details: false,
        null_fields: nullFields,
      };
    }

    return {
      user_details: true,
    };
  }

  async allMessages(status, name, user) {
    try {
      let messageStatus;

      let where =
        '(m.from_id = :uId OR m.to_id = :uId) AND m.status = :mStatus AND (LOWER(u.first_name) LIKE :first_name OR LOWER(u.last_name) LIKE :last_name)';
      switch (status) {
        case 0:
          where;
          messageStatus = MessageStatusEnum.INQUIRY;
          break;
        case 1:
          where;
          messageStatus = MessageStatusEnum.REQUEST;
          break;
        case 2:
          where;
          messageStatus = MessageStatusEnum.ACCEPT;
          break;
        case 3:
          where;
          messageStatus = MessageStatusEnum.CONFIRM;
          break;
        case 4:
          where;
          messageStatus = MessageStatusEnum.REJECT;
          break;
        case 5:
          where =
            '(m.from_id = :uId OR m.to_id = :uId) AND (m.status = :mStatus OR m.status = :mstatus) AND (LOWER(u.first_name) LIKE :first_name OR LOWER(u.last_name) LIKE :last_name)';
          messageStatus = MessageStatusEnum.SHORTLISTED;
          break;
        case 6:
          where =
            '(m.from_id = :uId OR m.to_id = :uId) AND (m.status = :mStatus OR m.status = :mstatus) AND (LOWER(u.first_name) LIKE :first_name OR LOWER(u.last_name) LIKE :last_name)';
          messageStatus = MessageStatusEnum.ARCHIVED;
          break;
        case 7:
          where;
          messageStatus = MessageStatusEnum.SHORTLISTEDANDARCHIVE;
          break;
        case 8:
          const userMessageDetails = await MessageEntity.find({
            where: [{ from_id: user.id }, { to_id: user.id }],
            order: { id: 'DESC' },
          });
          for (let i = 0; i < userMessageDetails.length; i++) {
            let MessageData = await ChildMessageEntity.createQueryBuilder(
              'childMessage',
            )
              .where('childMessage.message_id = :message_id', {
                message_id: userMessageDetails[i].id,
              })
              .orderBy('childMessage.id', 'DESC')
              .getOne();
            const currentTime = new Date();
            const changeStatusCreatedAt = new Date(MessageData.created_at);
            const timeDifference =
              currentTime.getTime() - changeStatusCreatedAt.getTime();

            const hoursInMilliseconds = 48 * 60 * 60 * 1000;
            const isOlderThan48Hours = timeDifference >= hoursInMilliseconds;
            if (isOlderThan48Hours) {
              let findCurrentMessage = await MessageEntity.findOneBy({
                id: userMessageDetails[i].id,
              });
              findCurrentMessage.status = MessageStatusEnum.EXPIRED;
              await MessageEntity.save(findCurrentMessage);
            }
          }
          where;
          messageStatus = MessageStatusEnum.EXPIRED;
          break;
        case 10:
          const fortyEightHoursAgo = new Date(
            new Date().getTime() - 48 * 60 * 60 * 1000,
          ).toISOString();

          const userMessageDetail = await MessageEntity.find({
            where: [
              {
                from_id: user.id,
                child_messages: {
                  created_at: MoreThanOrEqual(
                    fortyEightHoursAgo,
                  ) as unknown as never,
                },
              },
              {
                to_id: user.id,
                child_messages: {
                  created_at: MoreThanOrEqual(
                    fortyEightHoursAgo,
                  ) as unknown as never,
                },
              },
            ],
            relations: {
              child_messages: true,
            },
            order: { id: 'DESC' },
          });
          return {
            data: userMessageDetail,
            message: 'Data fetch successfully for the last 48 hours',
          };

        default:
          where =
            '(LOWER(u.first_name) LIKE :first_name OR LOWER(u.last_name) LIKE :last_name) AND (m.from_id = :uId OR m.to_id = :uId)';
      }

      const messages = await MessageEntity.createQueryBuilder('m')
        .leftJoinAndMapMany(
          'm.to_Id',
          UserEntity,
          'u',
          'u.id = m.to_id OR u.id = m.from_id',
        )
        .where(where, {
          uId: user.id,
          mStatus: messageStatus,
          first_name: `%${name}%`,
          last_name: `%${name}%`,
          mstatus: MessageStatusEnum.SHORTLISTEDANDARCHIVE,
        })
        .getMany();

      return {
        data: messages,
        message: 'Data fetch successfully',
      };
    } catch (error) {
      throw new GraphQLError(error.message || '', {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  async messageListing(messageListingDto) {
    try {
      let messgesDetails = await MessageEntity.findOneBy({
        booking_id: messageListingDto.booking_id,
      });

      let GetMessges = await ChildMessageEntity.find({
        where: { message_id: messgesDetails.id },
        order: { id: 'ASC' },
      });
      const BookingDetails = await BookingEntity.findOneBy({
        id: messageListingDto.booking_id,
      });
      if (!BookingDetails) {
        throw new GqlNotFoundException(ERROR_MESSAGE.BookingNotFound);
      }
      (BookingDetails.start_date = new Date(BookingDetails.start_date)),
        (BookingDetails.end_date = new Date(BookingDetails.end_date));
      const getTenatDetils = await UserEntity.findOneBy({
        id: BookingDetails.tenant_id,
      });

      const getPropertyDetails = await PropertyEntity.findOneBy({
        id: BookingDetails.property_id,
      });

      const getLandloardDetails = await UserEntity.findOneBy({
        id: BookingDetails.landlord_id,
      });

      return {
        booking_data: BookingDetails || null,
        data: GetMessges,
        tenant_data: getTenatDetils,
        landlord_data: getLandloardDetails,
        property_data: getPropertyDetails,
        message: 'Data fetch successfully',
      };
    } catch (error) {
      throw new GraphQLError(error.message || '', {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  async dateRangeUpdate(messageSendDto) {
    const bookingDate = await BookingEntity.findOne({
      where: {
        id: messageSendDto.id,
      },
    });

    bookingDate.start_date = messageSendDto.start_date;
    bookingDate.end_date = messageSendDto.end_date;

    const booking = await BookingEntity.save(bookingDate);

    return booking;
  }

  async changeStatus(messageSendDto) {
    const statusChange = await MessageEntity.findOne({
      where: {
        id: messageSendDto.id,
      },
    });

    if (
      (statusChange.status === 5 && messageSendDto.status === 6) ||
      (statusChange.status === 6 && messageSendDto.status === 5)
    ) {
      statusChange.status = 7;
    } else {
      statusChange.status = messageSendDto.status;
    }

    await MessageEntity.save(statusChange);

    return SUCCESS_MESSAGE.statusChange;
  }

  async requestBooking(user, requestBookingDto) {
    try {
      const booking = await BookingEntity.findOne({
        where: {
          id: requestBookingDto.id,
        },
      });

      // const stripe = require('stripe')(
      //   'sk_test_51Kg6XWSDlHUSUsvCZcFAwuMYGVipfIcuupLBWrLibMmR7ObTUanRJaly448JmVpoTM5oLggJFOXhpaxIYWUd5hIW00OzZMNSwx',
      // );
      // const paymentIntent = await stripe.paymentIntents.create({
      //   amount: 500,
      //   currency: 'usd',
      //   payment_method: 'pm_card_visa',
      // });

      // console.log('paymentIntent', paymentIntent);

      const propertyRent: any = await PropertyEntity.findOne({
        where: {
          id: requestBookingDto.property_id,
        },
      });

      const additionalCost =
        await AdditionalRequiredCostEntity.createQueryBuilder('additional')
          .select(`SUM(additional.amount )`, `add`)
          .where({
            property_id: requestBookingDto.property_id,
          })
          .getRawOne();

      const totalAmount =
        Number(additionalCost.add) + Number(propertyRent.rent);

      const customerIdStripe = await stripe.customers.create({
        name: `${requestBookingDto.first_name}-${requestBookingDto.last_name}`,
      });

      const cardInfo = {
        card: {
          name: requestBookingDto.name,
          number: requestBookingDto.number,
          exp_month: requestBookingDto.exp_month,
          exp_year: requestBookingDto.exp_year,
          cvc: requestBookingDto.cvc,
        },
      };

      const cardToken = await stripe.tokens.create(cardInfo);

      // stripe.customers.createSource(customerId, data);
      const cardSource = await stripe.customers.createSource(
        customerIdStripe.id,
        {
          source: cardToken.id,
        },
      );

      await CardEntity.save({
        user_id: user.id,
        customer_id: customerIdStripe.id,
        source_id: cardSource.id,
      });

      const chargeDetails = {
        amount: convertToCents(+convertFloatNumberToString(totalAmount)),
        currency: .STRIPE_CURRENCY,
        customer: customerIdStripe.id,
        source: cardSource.id,
        description: `Booking of user`,
        shipping: {
          name:
            requestBookingDto.first_name + ' ' + requestBookingDto.last_name,
          address: {
            line1: requestBookingDto.address,
            postal_code: requestBookingDto.postal_code,
            city: requestBookingDto.city,
            state: requestBookingDto.state,
            country: requestBookingDto.country,
          },
        },
      };

      const planCharge = await stripe.charges.create(chargeDetails);

      if (planCharge.status === 'succeeded') {
        // const booking = await BookingEntity.save({
        //   tenant_id: user.id,
        //   property_id: requestBookingDto.property_id,
        //   landlord_id: requestBookingDto.landlord_id,
        //   status: 1,
        //   amount: totalAmount,
        //   currency: RentSmartlyCurrency.CURRENCY,
        // } as any);
        (booking.start_date = requestBookingDto.start_date),
          (booking.end_date = requestBookingDto.end_date),
          (booking.status = 3);
        await booking.save();
        // const message = await MessageEntity.save({
        //   booking_id: booking.id,
        //   to_id: requestBookingDto.landlord_id,
        //   from_id: user.id,
        //   status: 0,
        // } as any);

        // await ChildMessageEntity.save({
        //   message_id: message.id,
        //   to_id: requestBookingDto.landlord_id,
        //   from_id: user.id,
        //   text: requestBookingDto.message,
        // } as any);
        const user_billings = await UserBillingEntity.save({
          booking_id: booking.id,
          city_of_residence: requestBookingDto.city_of_residence,
        } as any);
        await TransactionEntity.save({
          tenant_id: user.id,
          landlord_id: requestBookingDto.landlord_id,
          property_id: requestBookingDto.property_id,
          amount: totalAmount,
          transaction_date: new Date(),
          status: 1,
          charge_id: planCharge.id,
          receipt_url: planCharge.receipt_url,
        });

        return SUCCESS_MESSAGE.PaymentDone;
      }
      // return SUCCESS_MESSAGE.PaymentDone;
    } catch (error) {
      throw new GraphQLError(error.message || '', {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  async amountView(booking_id) {
    const booking = await BookingEntity.createQueryBuilder()
      .select(['id', 'amount'])
      .where({
        id: booking_id,
      })
      .getOne();

    return booking;
  }

  async firstMonthRent(property_id: number) {
    const propertyRent: any = await PropertyEntity.findOne({
      where: {
        id: property_id,
      },
    });

    const additionalCost =
      await AdditionalRequiredCostEntity.createQueryBuilder('additional')
        .select(`SUM(additional.amount )`, `add`)
        .where({
          property_id: property_id,
        })
        .getRawOne();

    const totalAmount = Number(additionalCost.add) + Number(propertyRent.rent);

    propertyRent.first_month_rent = totalAmount;

    return propertyRent;
  }

  async tenantHistory(
    tenant_name: string,
    status: string,
    page_number: number,
    page_size: number,
    messageListingDto,
  ) {
    try {
      const skipData = (page_number - 1) * page_size;

      const bookingListing = BookingEntity.createQueryBuilder('book')
        .leftJoin('book.property_id', 'property')
        .leftJoin('book.tenant_id', 'tenant')
        .select([
          'book.id',
          'book.status',
          'book.start_date',
          'book.end_date',
          'book.created_at',
          'tenant.id',
          'tenant.first_name',
          'tenant.last_name',
          'tenant.image',
          'property.id',
          'property.name',
        ])
        .where({
          property_id: messageListingDto.id,
        });

      if (tenant_name) {
        bookingListing.andWhere(
          "(LOWER(tenant.first_name) like :name OR LOWER(tenant.last_name) like :name OR LOWER(tenant.first_name || ' ' || tenant.last_name) like :name)",
          {
            name: `%${tenant_name.toLowerCase()}%`,
          },
        );
      }

      if (status)
        bookingListing.andWhere('LOWER(book.status) like :type', {
          type: `%${status.toLowerCase()}%`,
        });

      const [booking, total_booking] = await bookingListing
        .skip(skipData)
        .take(page_size)
        .getManyAndCount();

      // Serialize the start_date and end_date properties using Moment
      booking.forEach((booking) => {
        booking.start_date = new Date(booking.start_date);
        booking.end_date = new Date(booking.end_date);
      });

      return { booking, total_booking };
    } catch (error) {
      throw new GraphQLError(error.message || '', {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  async tenantView(messageListingDto) {
    try {
      const tenantView = await BookingEntity.createQueryBuilder('book')
        .leftJoin('book.tenant_id', 'tenant')
        .leftJoin('book.property_id', 'property')
        .select([
          'book.id',
          'book.status',
          'book.start_date',
          'book.end_date',
          'book.amount',
          'tenant.id',
          'tenant.first_name',
          'tenant.last_name',
          'tenant.image',
          'property?.id',
          'property?.rent',
        ])
        .where({
          id: messageListingDto.id,
        })
        .getOne();

      const additionalCost =
        await AdditionalRequiredCostEntity.createQueryBuilder('additional')
          .select(`SUM(additional.amount )`, `add`)
          .where({
            property_id: tenantView.property_id['id'],
          })
          .getRawOne();

      tenantView.service_cost = additionalCost.add;

      tenantView.start_date = new Date(tenantView.start_date);
      tenantView.end_date = new Date(tenantView.end_date);

      const monthDifference = moment(tenantView.end_date).diff(
        tenantView.start_date,
        'months',
      );

      tenantView.month_difference = monthDifference;
      return {
        data: tenantView,
      };
    } catch (error) {
      throw new GraphQLError(error.message || '', {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  async apartmentInfoView(user, messageSendDto) {
    let actual_commission_value;
    const apartmentDetails = await PropertyEntity.createQueryBuilder('property')
      .leftJoin('property.space', 'space')
      .leftJoin('property.user_id', 'landlord')
      .leftJoin('property.images', 'media')
      .leftJoin('property.additional_cost', 'additional_cost')
      .select([
        'property.id',
        'property.name',
        'property.type',
        'property.rent',
        'space.id',
        'space.bedrooms',
        'space.size',
        'media.id',
        'media.name',
        'landlord.id',
        'landlord.first_name',
        'landlord.last_name',
        'landlord.is_landlord',
        'additional_cost.amount',
      ])
      .where({
        id: messageSendDto.property_id,
      })
      .getOne();
    if (!apartmentDetails) {
      throw new GqlNotFoundException(ERROR_MESSAGE.PropertyNotFound);
    }
    const client = await UserEntity.findOne({
      where: {
        id: user.id,
      },
    });

    const commissionDetails = await CommissionFeesEntity.findOneBy({
      type: 0,
    });

    //commission from landlord
    if (client.is_landlord === 1 && commissionDetails.commission_from === 1) {
      actual_commission_value = this.commission_value(
        apartmentDetails,
        commissionDetails,
      );
    }
    //commission from tenant
    else if (
      client.is_landlord === 0 &&
      commissionDetails.commission_from === 0
    ) {
      actual_commission_value = this.commission_value(
        apartmentDetails,
        commissionDetails,
      );
    }
    //commission from both
    else if (commissionDetails.commission_from === 2) {
      actual_commission_value = this.commission_value(
        apartmentDetails,
        commissionDetails,
      );
    }

    apartmentDetails.one_time_service_fee = actual_commission_value;

    return apartmentDetails;
  }

  commission_value(apartmentDetails, commissionDetails) {
    const commission_value =
      (Number(apartmentDetails.rent) * commissionDetails.value) / 100;
    const actual_commission_value =
      Number(apartmentDetails.rent) + Number(commission_value);

    return actual_commission_value;
  }

  // for showing payment confirmation notification in frontend side
  async GetPayoutConfirmationStatus(user: UserEntity) {
    const currentDate = moment().format('YYYY-MM-DD') as unknown as Date;
    const previousDayDate = moment()
      .subtract(1, 'day')
      .format('YYYY-MM-DD') as unknown as Date;

    const booking = await BookingEntity.findOne({
      where: [
        { tenant_id: user.id, start_date: currentDate },
        { start_date: previousDayDate },
      ],
    });
    return booking ? booking.id : false;
  }

  // accept and reject property after move in
  async UpdatePayoutStatus(
    user: UserEntity,
    booking_id: number,
    status: boolean,
  ) {
    try {
      const booking = await BookingEntity.findOneBy({ id: booking_id });
      (booking.status = status ? 5 : 6), await booking.save();

      switch (status) {
        case true:
          break;

        case false:
          const customer = await CardEntity.findOneBy({
            user_id: booking.tenant_id,
          });
          const chargeDetails = {
            amount: convertToCents(+convertFloatNumberToString(booking.amount)),
            currency: .STRIPE_CURRENCY,
            customer: customer.customer_id,
            source: customer.source_id,
            description: `Booking of user`,
            shipping: {
              name: 'abc',
              address: {
                line1: 'addsress',
                postal_code: '380015',
                city: 'ahsnd',
                state: 'ahsnd',
                country: 'Canada',
              },
            },
          };

          const planCharge = await stripe.charges.create(chargeDetails);
          break;

        default:
          throw new BadRequestException();
      }
      return 'success';
    } catch (error) {
      throw new GraphQLError(error.message || '', {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  async getLandlordData(message: MessageEntity) {
    return await UserEntity.findOne({
      select: ['id', 'first_name', 'last_name', 'image'],
      where: { id: message.to_id },
    });
  }

  async getDates(message: MessageEntity) {
    return await BookingEntity.findOne({
      select: ['start_date', 'end_date'],
      where: { id: message.booking_id },
    });
  }

  async getCity(message: MessageEntity) {
    const city = await CityEntity.createQueryBuilder('c')
      .leftJoin(PropertyEntity, 'p', 'p.city_id = c.id')
      .leftJoin(BookingEntity, 'b', 'b.property_id = p.id AND b.id = :bId', {
        bId: message.booking_id,
      })
      .getOne();

    return { city_id: city.id, city_name: city.name };
  }

  async getProperty(message: MessageEntity) {
    const propertyId = await BookingEntity.findOne({
      select: ['property_id'],
      where: { id: message.booking_id },
    });

    return await PropertyEntity.findOne({
      select: ['id', 'name'],
      where: { id: propertyId.property_id },
    });
  }

  async getUserMessages(message: MessageEntity) {
    const lastMessage = await ChildMessageEntity.findOne({
      where: { message_id: message.id },
      order: { id: 'desc' },
    });

    return { userMessages: lastMessage };
  }

  async getTenantData(message: MessageEntity) {
    return await UserEntity.findOne({
      select: ['id', 'first_name', 'last_name', 'image'],
      where: { id: message.from_id },
    });
  }
}
