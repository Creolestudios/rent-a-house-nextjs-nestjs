import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ReservationService } from './reservation.service';
// import { Reservation } from './entities/reservation.entity';
import { CreateReservationInput } from './dto/create-reservation.input';
import { UpdateReservationInput } from './dto/update-reservation.input';
import { BookingEntity } from '../../shared/entity/bookings.entity';
import { UseGuards } from '@nestjs/common';
import { RoleGuard } from '../auth/role.guard';
import { AuthenticationRole } from '../../common/enum';
import { MangeReservation, Reservation } from '../../common/types';
const DEFAULT_PAGE_SIZE = 10;
@UseGuards(new RoleGuard([AuthenticationRole.SUPER_ADMIN]))
@Resolver()
export class ReservationResolver {
  constructor(private readonly reservationService: ReservationService) {}

  // @Mutation(() => Reservation)
  // createReservation(@Args('createReservationInput') createReservationInput: CreateReservationInput) {
  //   return this.reservationService.create(createReservationInput);
  // }

  @Query(() => MangeReservation, { name: 'allReservation' })
  findAll(
    @Args('name', { type: () => String }) name: string,
    @Args('page', { type: () => Int }) page: number,
    @Args('pagesize', { type: () => Int })
    pagesize: number = DEFAULT_PAGE_SIZE,
    @Args('propertyType', { type: () => String }) propertyType: string,
    @Args('status', { type: () => Int, nullable: true }) status: number,
  ) {
    return this.reservationService.findAll(
      name,
      page,
      pagesize,
      propertyType,
      status,
    );
  }

  @Query(() => Reservation, { name: 'reservation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.reservationService.findOne(id);
  }

  // @Mutation(() => Reservation)
  // updateReservation(
  //   @Args('updateReservationInput')
  //   updateReservationInput: UpdateReservationInput,
  // ) {
  //   return this.reservationService.update(
  //     updateReservationInput.id,
  //     updateReservationInput,
  //   );
  // }

  // @Mutation(() => Reservation)
  // removeReservation(@Args('id', { type: () => Int }) id: number) {
  //   return this.reservationService.remove(id);
  // }
}
