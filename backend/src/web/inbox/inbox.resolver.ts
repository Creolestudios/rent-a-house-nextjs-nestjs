import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Subscription,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { InboxService } from './inbox.service';
import { getUser } from 'src/common/helper';
import { UseGuards } from '@nestjs/common';
import { UserAuthGuard } from '../auth/user.guard';
import {
  UserEntity,
  UserDocumentsVerifyResponse,
} from 'src/shared/entity/user.entity';
import { MessageListingDto, MessageSendDto } from 'src/dto/message-send.input';
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { ChildMessageResponse } from 'src/shared/entity/child-messages.entity';
import { RequestBookingDto } from 'src/dto/request-booking.input';
import {
  BookingPaginationResponse,
  TenantResponse,
} from 'src/shared/entity/bookings.entity';
import { PropertyEntity } from 'src/shared/entity/property.entity';
import { UpdateUserBookingDto } from '../../dto/update-user-booking.input';
import {
  BookingResponses,
  ContinueChatting,
  LandlordData,
  LiveChatResponse,
  MessagePayload,
  MessageResponse,
  MessageWithLandlordData,
} from '../../common/types';

import { PubSub } from 'graphql-subscriptions';
import { MessageEntity } from '../../shared/entity/messages.entity';
const pubSub = new PubSub();
@Resolver(() => MessageEntity)
export class InboxResolver {
  constructor(private readonly inboxService: InboxService) {}

  /**
   * ANCHOR Message with info
   * @author  Harsh Bansal <harsh.bansal@creolestudios.com>
   * @purpose Store user profile info
   * @param   messageWithInfoInput create property step input fields
   * @returns success message
   */
  @Mutation(() => BookingResponses)
  @UseGuards(UserAuthGuard)
  async messageWithInfoInput(
    @Args('UpdateUserForBooking') updateUserBookingDtos: UpdateUserBookingDto,
    @Args('messageWithInfo')
    messageSendDto: MessageSendDto,
    @Args('proofOfIdentity', { type: () => GraphQLUpload, nullable: true })
    proofOfIdentity: FileUpload,
    @Args('occupation', { type: () => GraphQLUpload, nullable: true })
    occupation: FileUpload,
    @getUser() user: UserEntity,
  ) {
    return this.inboxService.messageWithInfoInput(
      user,
      messageSendDto,
      proofOfIdentity,
      occupation,
      updateUserBookingDtos,
    );
  }

  /*
   * ANCHOR - Continue Chatting
   * @author  Divyarajsinh Champavat<Divyarajsinh.champavat@creolestudios.com>
   *  @purpose TO Continue to Chatting
   */
  @Query(() => ContinueChatting)
  @UseGuards(UserAuthGuard)
  async continueChatting(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<any> {
    const {
      BookingDetails,
      getTenatDetils,
      getPropertyDetails,
      getLandloardDetails,
      getMessageData,
      Message,
    } = await this.inboxService.continueChatting(id);

    return {
      User: getTenatDetils,
      Bookings: BookingDetails,
      PropertyDetail: getPropertyDetails,
      LandloardDetail: getLandloardDetails,
      GetMessageData: getMessageData,
      Message: Message,
    };
  }

  @UseGuards(UserAuthGuard)
  @Mutation(() => MessagePayload)
  sendMessage(
    @Args('fromId', { type: () => Int }) fromId: number,
    @Args('toId', { type: () => Int }) toId: number,
    @Args('bookingId', { type: () => Int }) bookingId: number,
    @Args('message') message: string,
    @Args('status') status: number,
    @Args('messageFile', { type: () => GraphQLUpload, nullable: true })
    messageFile: FileUpload,
  ) {
    return this.inboxService.sendMessage(
      fromId,
      toId,
      bookingId,
      message,
      status,
      messageFile,
    );
  }

  @Subscription((returns) => LiveChatResponse, {
    filter: (payload, variables) =>
      (payload.from === variables.fromId && payload.to === variables.toId) ||
      (payload.to === variables.toId && payload.from === variables.fromId),
  })
  async newMessage(
    @Args('fromId', { type: () => Int }) fromId: number,
    @Args('toId', { type: () => Int }) toId: number,
    @Args('bookingId', { type: () => Int }) bookingId: number,
  ) {
    return this.inboxService.newMessageSubscription(fromId, toId, bookingId);
  }

  /**
   * ANCHOR  message input
   * @author  Harsh Bansal <harsh.bansal@creolestudios.com>
   * @purpose Store user profile info
   * @param   messageInput create property step input fields
   * @returns success message
   */
  @Mutation(() => String)
  @UseGuards(UserAuthGuard)
  async messageInput(
    @Args('messageInput') messageSendDto: MessageSendDto,
    @Args('messageFile', { type: () => GraphQLUpload, nullable: true })
    messageFile: FileUpload,
    @getUser() user: UserEntity,
  ) {
    return this.inboxService.messageInput(user, messageSendDto, messageFile);
  }

  /**
   * ANCHOR Data Output verification
   * @author  Harsh Bansal <harsh.bansal@creolestudios.com>
   * @purpose To show feild which is empty so that it can be filled
   * @param   messageInput id of user
   * @returns boolean or data which is not there
   */
  @Query(() => UserDocumentsVerifyResponse, { name: 'dataVerification' })
  @UseGuards(UserAuthGuard)
  async dataVerification(
    @Args('id', { type: () => Int }) id: number,
    @getUser() user: UserEntity,
  ) {
    return this.inboxService.dataVerification(id, user);
  }

  @Query(() => MessageResponse, { name: 'inbox' })
  @UseGuards(UserAuthGuard)
  async allMessages(
    @Args('status', { type: () => Int }) status: number,
    @Args('name', { type: () => String }) name: string,
    @getUser() user: UserEntity,
  ) {
    return this.inboxService.allMessages(status, name, user);
  }
  /**
   * ANCHOR message input listing
   * @author  Harsh Bansal <harsh.bansal@creolestudios.com>
   * @purpose Store user profile info
   * @param   messageInput create property step input fields
   * @returns success message
   */
  @Query(() => ChildMessageResponse, { name: 'getPerticularChat' })
  @UseGuards(UserAuthGuard)
  async messageListing(
    @Args('messageListingInput') messageListingDto: MessageListingDto,
    @getUser() user: UserEntity,
  ) {
    return this.inboxService.messageListing(messageListingDto);
  }

  /**
   * ANCHOR date change api
   * @author  Harsh Bansal <harsh.bansal@creolestudios.com>
   * @purpose Store user profile info
   * @param   messageSendDto create property step input fields
   * @returns success message
   */
  @Mutation(() => String)
  @UseGuards(UserAuthGuard)
  async dateRangeUpdate(
    @Args('dateChange') messageSendDto: MessageSendDto,
    @getUser() user: UserEntity,
  ) {
    return this.inboxService.dateRangeUpdate(messageSendDto);
  }

  /**
   * ANCHOR status change api
   * @author  Harsh Bansal <harsh.bansal@creolestudios.com>
   * @purpose Store user profile info
   * @param   messageSendDto create property step input fields
   * @returns success message
   */
  @Mutation(() => String)
  @UseGuards(UserAuthGuard)
  async changeStatus(
    @Args('statusChange') messageSendDto: MessageSendDto,
    @getUser() user: UserEntity,
  ) {
    return this.inboxService.changeStatus(messageSendDto);
  }

  /**
   * ANCHOR Booking final message
   * @author  Harsh Bansal <harsh.bansal@creolestudios.com>
   * @purpose Store user profile info
   * @param   requestBookingDto create property step input fields
   * @returns success message
   */
  @Mutation(() => String)
  @UseGuards(UserAuthGuard)
  async requestBooking(
    @Args('transactionFinalize') requestBookingDto: RequestBookingDto,
    @getUser() user: UserEntity,
  ) {
    return this.inboxService.requestBooking(user, requestBookingDto);
  }

  /**
   * ANCHOR amountDisplay
   * @author  Harsh Bansal <harsh.bansal@creolestudios.com>
   * @purpose amount to pay
   * @param   messageInput create property step input fields
   * @returns success message
   */
  @Query(() => String, { name: 'amountData' })
  @UseGuards(UserAuthGuard)
  async amountView(
    @Args('booking_id', { type: () => Int }) booking_id: number,
    @getUser() user: UserEntity,
  ) {
    return this.inboxService.amountView(booking_id);
  }

  /**
   * ANCHOR First Month Amount
   * @author  Harsh Bansal <harsh.bansal@creolestudios.com>
   * @purpose Total of first month rent including additional charges
   * @param   messageInput property id
   * @returns success message
   */
  @Query(() => PropertyEntity, { name: 'firstMonthRent' })
  async firstMonthRent(
    @Args('property_id', { type: () => Int }) property_id: number,
  ) {
    return this.inboxService.firstMonthRent(property_id);
  }

  /**
   * ANCHOR tenant History
   * @author  Harsh Bansal <harsh.bansal@creolestudios.com>
   * @purpose Store user profile info
   * @param   user user information
   * @returns Booking history
   */
  @Query(() => BookingPaginationResponse, { name: 'tenantHistory' })
  @UseGuards(UserAuthGuard)
  async tenantHistory(
    // @getUser() user: UserEntity,
    @Args('tenant_name', { type: () => String })
    tenant_name: string,
    @Args('page_number', { type: () => Int })
    page_number: number,
    @Args('page_size', { type: () => Int })
    page_size: number,
    @Args('status', { type: () => String })
    status: string,
    @Args('tenantPropertyId') messageListingDto: MessageListingDto,
  ): Promise<BookingPaginationResponse> {
    return this.inboxService.tenantHistory(
      tenant_name,
      status,
      page_number,
      page_size,
      messageListingDto,
    );
  }

  /**
   * ANCHOR tenant view
   * @author  Harsh Bansal <harsh.bansal@creolestudios.com>
   * @purpose view tenant profile
   * @param   user user information
   * @returns Profile of particular user
   */
  @Query(() => TenantResponse, { name: 'tenantView' })
  @UseGuards(UserAuthGuard)
  async tenantView(
    @getUser() user: UserEntity,
    @Args('tenantInput') messageListingDto: MessageListingDto,
  ) {
    return this.inboxService.tenantView(messageListingDto);
  }

  /**
   * ANCHOR Inbox Apartment data fetch
   * @author  Harsh Bansal <harsh.bansal@creolestudios.com>
   * @purpose view information about apartment
   * @param   user user information
   * @returns Information about apartment
   */
  @Query(() => PropertyEntity, { name: 'apartmentDetails' })
  @UseGuards(UserAuthGuard)
  async apartmentInfoView(
    @getUser() user: UserEntity,
    @Args('property_id') messageSendDto: MessageSendDto,
  ) {
    return this.inboxService.apartmentInfoView(user, messageSendDto);
  }

  /**
   * ANCHOR   GetPayoutConfirmationStatus
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose get landlord payout status
   * @param   user login user information
   * @returns Information about apartment
   */

  @Query(() => Int)
  @UseGuards(UserAuthGuard)
  async GetPayoutConfirmationStatus(@getUser() user: UserEntity) {
    return this.inboxService.GetPayoutConfirmationStatus(user);
  }

  @Mutation(() => String)
  @UseGuards(UserAuthGuard)
  async UpdatePayoutStatus(
    @getUser() user: UserEntity,
    @Args('status') status: boolean,
    @Args('booking_id') booking_id: number,
  ) {
    return this.inboxService.UpdatePayoutStatus(user, booking_id, status);
  }
}

@Resolver(() => MessageWithLandlordData)
export class MessageResponseResolver {
  constructor(private readonly inboxService: InboxService) {}

  @ResolveField(() => UserEntity, { nullable: true })
  landlordData(@Parent() message: MessageEntity) {
    return this.inboxService.getLandlordData(message);
  }

  @ResolveField(() => UserEntity, { nullable: true })
  dates(@Parent() message: MessageEntity) {
    return this.inboxService.getDates(message);
  }

  @ResolveField(() => UserEntity, { nullable: true })
  city(@Parent() message: MessageEntity) {
    return this.inboxService.getCity(message);
  }

  @ResolveField(() => UserEntity, { nullable: true })
  property(@Parent() message: MessageEntity) {
    return this.inboxService.getProperty(message);
  }

  @ResolveField(() => UserEntity, { nullable: true })
  userMessages(@Parent() message: MessageEntity) {
    return this.inboxService.getUserMessages(message);
  }

  @ResolveField(() => UserEntity, { nullable: true })
  tenantData(@Parent() message: MessageEntity) {
    return this.inboxService.getTenantData(message);
  }
}
