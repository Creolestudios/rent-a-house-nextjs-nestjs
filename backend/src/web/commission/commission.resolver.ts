import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CommissionService } from './commission.service';
import {
  CommissionFeesEntity,
  CommissionFeesResponse,
  CommissionFeesResponseSingle,
} from 'src/shared/entity/commissionFees.entity';
import { UpdateCommissionOnly } from '../../dto/update-commisionfees.input';
import { RoleGuard } from '../auth/role.guard';
import { AuthenticationRole } from '../../common/enum';
/**
 * ANCHOR createCommision
 * Creates site configuration.
 * @author Vinay kaithwas <vinay.kaithwas@creolestudios.com>
 * @param CreateSiteconfigInput, upload_logo
 * @returns Object of created site config.
 * @version 1.0.1
 */

@UseGuards(new RoleGuard([AuthenticationRole.SUPER_ADMIN]))
@Resolver(() => CommissionFeesEntity)
export class CommissionResolver {
  constructor(private readonly commissionService: CommissionService) {}
  // @UsePipes(ValidationPipe)
  // @Mutation(() => CommissionFeesResponse)
  // async createCommision(
  //   @Args('createCommissionInput') createCommissionInput: CreateCommissionInput,
  // ) {
  //   return await this.commissionService.create(createCommissionInput);
  // }
  // /**
  //  * ANCHOR findCommisionById
  //  * Returns Commision.
  //  * @author Vinay kaithwas <vinay.kaithwas@creolestudios.com>
  //  * @param integer id
  //  * @returns Object of site configs.
  //  * @version 1.0.0
  //  */
  // @Query(() => CommissionFeesResponseSingle, { name: 'commisionDetail' })
  // async findCommisionById(@Args('id', { type: () => Int }) id: number) {
  //   return await this.commissionService.findCommisionById(id);
  // }

  /**
   * ANCHOR findCommisionById
   * Returns Commision.
   * @author Vinay kaithwas <vinay.kaithwas@creolestudios.com>
   * @param integer id
   * @returns Object of site configs.
   * @version 1.0.0
   */
  @Query(() => CommissionFeesResponseSingle, { name: 'commisionData' })
  async findCommision() {
    return await this.commissionService.findCommision();
  }
  // /**
  //  * ANCHOR findAll
  //  * Returns Commisions.
  //  * @author Vinay kaithwas <vinay.kaithwas@creolestudios.com>
  //  * @param
  //  * @returns array of site configs.
  //  * @version 1.0.0
  //  */
  // @Query(() => CommissionFeesResponse, { name: 'commissions' })
  // async findAll() {
  //   return await this.commissionService.findAll();
  // }
  /**
  //  * ANCHOR updateCommision
  //  * Update Commission.
  //  * @author Vinay kaithwas <vinay.kaithwas@creolestudios.com>
  //  * @param integer id
  //  * @returns Object of site configs.
  //  * @version 1.0.0
  //  */
  // @UsePipes(ValidationPipe)
  // @Mutation(() => CommissionFeesResponse)
  // async updateCommision(
  //   @Args('updateCommissionInput') updateCommissionInput: UpdateCommissionInput,
  // ) {
  //   return await this.commissionService.update(updateCommissionInput);
  // }
  /**
   * ANCHOR updateCommisionOnly
   * Update Commission.
   * @author Vinay kaithwas <vinay.kaithwas@creolestudios.com>
   * @param integer id
   * @returns Object of site configs.
   * @version 1.0.0
   */

  @UsePipes(ValidationPipe)
  @Mutation(() => CommissionFeesResponseSingle)
  async updateCommisionOnly(
    @Args('updateCommissionOnly') updateCommissionOnly: UpdateCommissionOnly,
  ) {
    return await this.commissionService.updateCommisionOnly(
      updateCommissionOnly,
    );
  }
  // /**
  //  * ANCHOR removeCommision
  //  * Remove commision.
  //  * @author Vinay kaithwas <vinay.kaithwas@creolestudios.com>
  //  * @param integer id
  //  * @returns String message.
  //  * @version 1.0.0
  //  */
  // @UsePipes(ValidationPipe)
  // @Mutation(() => CommissionFeesResponse)
  // async removeCommision(@Args('id', { type: () => Int }) id: number) {
  //   return await this.commissionService.remove(id);
  // }
}
