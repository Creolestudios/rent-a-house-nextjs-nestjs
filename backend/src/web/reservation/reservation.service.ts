import { Injectable } from '@nestjs/common';
import { CreateReservationInput } from './dto/create-reservation.input';
import { UpdateReservationInput } from './dto/update-reservation.input';
import { BookingEntity } from '../../shared/entity/bookings.entity';
import { MessageEntity } from '../../shared/entity/messages.entity';
import { CommissionFeesEntity } from '../../shared/entity/commissionFees.entity';
import { StatusEnum } from '../../common/enum';
import { ChildMessageEntity } from '../../shared/entity/child-messages.entity';

@Injectable()
export class ReservationService {
  async findAll(name, page, pagesize, propertyType, status) {
    const lowercaseName = name.toLowerCase();
    const MAX_PAGE_SIZE = 100; // maximum page size
    const skip = (page - 1) * pagesize;
    const take = Math.min(pagesize, MAX_PAGE_SIZE);

    let bookings = [];
    let total;

    if (propertyType !== '' && name === '' && status === null) {
      let [booking, totals] = await BookingEntity.createQueryBuilder('b')
        .leftJoinAndMapOne('b.propertys_id', 'b.property_id', 'propertys_id')
        .leftJoinAndSelect('b.tenant_id', 'tenant_id')
        .leftJoinAndSelect('b.landlord_id', 'landlord_id')
        .where('propertys_id.type=:pType ', {
          pType: propertyType,
        })
        .skip(skip)
        .take(take)
        .getManyAndCount();

      booking.map((forDates) => {
        forDates.start_date = new Date(forDates.start_date);
        forDates.end_date = new Date(forDates.end_date);
      });

      bookings = booking;
      total = totals;
    } else if (propertyType !== '' && name !== '' && status === null) {
      let [booking, totals] = await BookingEntity.createQueryBuilder('b')
        .leftJoinAndMapOne('b.propertys_id', 'b.property_id', 'propertys_id')
        .leftJoinAndSelect('b.tenant_id', 'tenant_id')
        .leftJoinAndSelect('b.landlord_id', 'landlord_id')
        .where('propertys_id.type=:pType ', {
          pType: propertyType,
        })
        .andWhere(
          'LOWER(tenant_id.first_name) like :tFirstName OR LOWER(tenant_id.last_name) like :tLastName OR LOWER(landlord_id.first_name) like :lFirstName OR LOWER(landlord_id.last_name) like :lLastName ',
          {
            tFirstName: `${lowercaseName}%`,
            tLastName: `${lowercaseName}%`,
            lFirstName: `${lowercaseName}%`,
            lLastName: `${lowercaseName}%`,
          },
        )
        .skip(skip)
        .take(take)
        .getManyAndCount();
      booking.map((forDates) => {
        forDates.start_date = new Date(forDates.start_date);
        forDates.end_date = new Date(forDates.end_date);
      });

      bookings = booking;
      total = totals;
    } else if (name !== '' && propertyType == '' && status === null) {
      let [booking, totals] = await BookingEntity.createQueryBuilder('b')
        .leftJoinAndMapOne('b.propertys_id', 'b.property_id', 'propertys_id')
        .leftJoinAndSelect('b.tenant_id', 'tenant_id')
        .leftJoinAndSelect('b.landlord_id', 'landlord_id')
        .andWhere(
          'LOWER(tenant_id.first_name) like :tFirstName OR LOWER(tenant_id.last_name) like :tLastName OR LOWER(landlord_id.first_name) like :lFirstName OR LOWER(landlord_id.last_name) like :lLastName ',
          {
            tFirstName: `${lowercaseName}%`,
            tLastName: `${lowercaseName}%`,
            lFirstName: `${lowercaseName}%`,
            lLastName: `${lowercaseName}%`,
          },
        )
        .skip(skip)
        .take(take)
        .getManyAndCount();
      booking.map((forDates) => {
        forDates.start_date = new Date(forDates.start_date);
        forDates.end_date = new Date(forDates.end_date);
      });

      bookings = booking;
      total = totals;
    } else if (status !== null && name === '' && propertyType === '') {
      let [booking, totals] = await BookingEntity.createQueryBuilder('b')
        .leftJoinAndMapOne('b.propertys_id', 'b.property_id', 'propertys_id')
        .leftJoinAndSelect('b.tenant_id', 'tenant_id')
        .leftJoinAndSelect('b.landlord_id', 'landlord_id')
        .andWhere('b.status = :bStatus', { bStatus: status })
        .skip(skip)
        .take(take)
        .getManyAndCount();
      booking.map((forDates) => {
        forDates.start_date = new Date(forDates.start_date);
        forDates.end_date = new Date(forDates.end_date);
      });

      bookings = booking;
      total = totals;
    } else if (status !== null && propertyType !== '' && name === '') {
      let [booking, totals] = await BookingEntity.createQueryBuilder('b')
        .leftJoinAndMapOne('b.propertys_id', 'b.property_id', 'propertys_id')
        .leftJoinAndSelect('b.tenant_id', 'tenant_id')
        .leftJoinAndSelect('b.landlord_id', 'landlord_id')
        .where('propertys_id.type=:pType ', {
          pType: propertyType,
        })
        .andWhere('b.status = :bStatus', { bStatus: status })
        .skip(skip)
        .take(take)
        .getManyAndCount();
      booking.map((forDates) => {
        forDates.start_date = new Date(forDates.start_date);
        forDates.end_date = new Date(forDates.end_date);
      });

      bookings = booking;
      total = totals;
    } else {
      {
        let [booking, totals] = await BookingEntity.createQueryBuilder('b')
          .leftJoinAndMapOne('b.propertys_id', 'b.property_id', 'propertys_id')
          .leftJoinAndSelect('b.tenant_id', 'tenant_id')
          .leftJoinAndSelect('b.landlord_id', 'landlord_id')
          .where('propertys_id.type=:pType ', {
            pType: propertyType,
          })
          .andWhere('b.status = :bStatus', { bStatus: status })
          .andWhere(
            'LOWER(tenant_id.first_name) like :tFirstName OR LOWER(tenant_id.last_name) like :tLastName OR LOWER(landlord_id.first_name) like :lFirstName OR LOWER(landlord_id.last_name) like :lLastName',
            {
              tFirstName: `${lowercaseName}%`,
              tLastName: `${lowercaseName}%`,
              lFirstName: `${lowercaseName}%`,
              lLastName: `${lowercaseName}%`,
            },
          )
          .skip(skip)
          .take(take)
          .getManyAndCount();

        booking.map((forDates) => {
          forDates.start_date = new Date(forDates.start_date);
          forDates.end_date = new Date(forDates.end_date);
        });

        bookings = booking;
        total = totals;
      }
    }

    return { reservations: bookings, totalReservations: total };
  }

  async findOne(id: number) {
    let commision_value;
    let bookings = await BookingEntity.createQueryBuilder('booking')
      .leftJoinAndMapOne(
        'booking.propertys_id',
        'booking.property_id',
        'propertys_id',
      )
      .leftJoinAndSelect('booking.tenant_id', 'tenant_id')
      .leftJoinAndSelect('booking.landlord_id', 'landlord_id')
      .where('booking.id = :id', { id: id })
      .getOne();
    let rental_period = getMonthDifference(
      new Date(bookings.start_date),
      new Date(bookings.end_date),
    );
    function getMonthDifference(startDate, endDate) {
      return (
        endDate.getMonth() -
        startDate.getMonth() +
        12 * (endDate.getFullYear() - startDate.getFullYear())
      );
    }
    const commisionDetail = await CommissionFeesEntity.findOne({
      where: {
        status: StatusEnum.ACTIVE,
      },
    });

    if (!commisionDetail) {
      commision_value = 0;
    } else {
      commision_value = commisionDetail.value;
    }
    let TotalAmountPaid = bookings.amount + parseInt(commision_value);
    let messagedata = await MessageEntity.createQueryBuilder('message')
      .where('message.booking_id = :id', { id: id })
      .getOne();

    let messages = await ChildMessageEntity.find({
      where: { message_id: messagedata.id },
      order: { id: 'ASC' },
    });

    bookings.start_date = new Date(bookings.start_date);
    bookings.end_date = new Date(bookings.end_date);
    bookings.month_difference = rental_period;
    return {
      reservations: bookings,
      ServiceFee: commision_value,
      TotalAmountPaid: TotalAmountPaid,
      messages: messages,
    };
  }

  update(id: number, updateReservationInput: UpdateReservationInput) {
    return `This action updates a #${id} reservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservation`;
  }
}
