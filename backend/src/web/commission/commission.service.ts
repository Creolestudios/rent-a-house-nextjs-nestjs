import { Injectable } from '@nestjs/common';
import { GraphQLError } from 'graphql';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../../common/constants';
import { StatusEnum } from '../../common/enum';
import { GqlNotFoundException } from '../../common/error';
import { CreateCommissionInput } from '../../dto/create-commisionfees.input';
import {
  UpdateCommissionInput,
  UpdateCommissionOnly,
} from '../../dto/update-commisionfees.input';
import { CommissionFeesEntity } from '../../shared/entity/commissionFees.entity';

@Injectable()
export class CommissionService {
  /**
   * ANCHOR create
   * Creates site configuration.
   * @author Vinay kaithwas <vinay.kaithwas@creolestudios.com>
   * @param CreateSiteconfigInput, upload_logo
   * @returns Object
   * @version 1.0.0
   */
  async create(createCommissionInput: CreateCommissionInput) {
    try {
      //Remove old rows.
      await CommissionFeesEntity.clear();
      const commisionInfo: any = await CommissionFeesEntity.save({
        type: createCommissionInput.type,
        value: createCommissionInput.value,
        currency: createCommissionInput.currency,
      });
      return {
        data: commisionInfo,
        message: SUCCESS_MESSAGE.CommisionCreated,
      };
    } catch (error) {
      throw new GraphQLError(error.message || 'Internal server error', {
        extensions: { code: error.extensions?.code || 'INTERNAL_SERVER_ERROR' },
      });
    }
  }

  /**
   * ANCHOR findCommisionById
   * Returns Commision
   * @author Vinay kaithwas <vinay.kaithwas@creolestudios.com>
   * @param integer id
   * @returns Object.
   * @version 1.0.0
   */
  async findCommisionById(id) {
    try {
      const commisionDetail = await CommissionFeesEntity.findOne({
        where: {
          id: id,
        },
      });
      if (!commisionDetail) {
        throw new GqlNotFoundException(ERROR_MESSAGE.CommisionNotFound);
      }
      return {
        data: commisionDetail,
        message: SUCCESS_MESSAGE.Success,
      };
    } catch (error) {
      throw new GraphQLError(error.message || 'Internal server error', {
        extensions: { code: error.extensions?.code || 'INTERNAL_SERVER_ERROR' },
      });
    }
  }
  /**
   * ANCHOR findCommisionById
   * Returns Commision
   * @author Vinay kaithwas <vinay.kaithwas@creolestudios.com>
   * @param integer id
   * @returns Object.
   * @version 1.0.0
   */
  async findCommision() {
    try {
      const commisionDetail = await CommissionFeesEntity.findOne({
        where: {
          status: StatusEnum.ACTIVE,
        },
      });
      if (!commisionDetail) {
        throw new GqlNotFoundException(ERROR_MESSAGE.CommisionNotFound);
      }
      return {
        data: commisionDetail,
        message: SUCCESS_MESSAGE.Success,
      };
    } catch (error) {
      throw new GraphQLError(error.message || 'Internal server error', {
        extensions: { code: error.extensions?.code || 'INTERNAL_SERVER_ERROR' },
      });
    }
  }

  /**
   * ANCHOR findAll
   * Returns Commision
   * @author Vinay kaithwas <vinay.kaithwas@creolestudios.com>
   * @param integer id
   * @returns Object.
   * @version 1.0.0
   */
  async findAll() {
    try {
      const commisions = await CommissionFeesEntity.find();
      return {
        data: commisions,
        message: SUCCESS_MESSAGE.CommisionListing,
      };
    } catch (error) {
      throw new GraphQLError(error.message || 'Internal server error', {
        extensions: { code: error.extensions?.code || 'INTERNAL_SERVER_ERROR' },
      });
    }
  }

  /**
   * ANCHOR update
   * Update commision
   * @author Vinay kaithwas <vinay.kaithwas@creolestudios.com>
   * @param UpdateCommissionInput
   * @returns Object of created site config.
   * @version 1.0.0
   */
  async update(updateCommissionInput: UpdateCommissionInput) {
    try {
      const commisionInfo: any = await CommissionFeesEntity.update(
        updateCommissionInput.id,
        updateCommissionInput,
      );
      return {
        data: commisionInfo,
        message: SUCCESS_MESSAGE.CommisionUpdated,
      };
    } catch (error) {
      throw new GraphQLError(error.message || 'Internal server error', {
        extensions: { code: error.extensions?.code || 'INTERNAL_SERVER_ERROR' },
      });
    }
  }

  /**
   * ANCHOR update
   * Update commision
   * @author Vinay kaithwas <vinay.kaithwas@creolestudios.com>
   * @param UpdateCommissionInput
   * @returns Object of created site config.
   * @version 1.0.0
   */
  async updateCommisionOnly(updateCommissiononly: UpdateCommissionOnly) {
    try {
      const commisionDetails = await CommissionFeesEntity.findOneBy({
        type: 0,
      });
      if (!commisionDetails) {
        throw new GqlNotFoundException(ERROR_MESSAGE.CommisionNotFound);
      }
      if (commisionDetails) {
        commisionDetails.value = updateCommissiononly.value;
        commisionDetails.commission_from = updateCommissiononly.commission_from;

        const updatedCommission = await CommissionFeesEntity.save(
          commisionDetails,
        );

        return {
          message: SUCCESS_MESSAGE.CommisionUpdated,
          data: updatedCommission,
        };
      }
    } catch (error) {
      throw new GraphQLError(error.message || 'Internal server error', {
        extensions: { code: error.extensions?.code || 'INTERNAL_SERVER_ERROR' },
      });
    }
  }

  /**
   *  ANCHOR remove
   * Remove Commision
   * @author Vinay kaithwas <vinay.kaithwas@creolestudios.com>
   * @param integer id
   * @returns string message.
   * @version 1.0.0
   */
  async remove(id: number) {
    try {
      await CommissionFeesEntity.delete(id);
      return {
        data: {},
        message: SUCCESS_MESSAGE.CommisionDeleted,
      };
    } catch (error) {
      throw new GraphQLError(error.message || 'Internal server error', {
        extensions: { code: error.extensions?.code || 'INTERNAL_SERVER_ERROR' },
      });
    }
  }
}
