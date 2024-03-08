import React from 'react';
import Icon from '@ant-design/icons';
import crossIcon from '@/assets/images/icons/crossSvg';
import { Modal } from 'antd';
import DeleteManageListing from './DeleteManageListing';
// import SuccessDuplicateApartment from './SuccessDuplicateApartment';

const DeleteManageListingModal = ({
  setDeleteListingModal,
  deleteListingModal,
}: any) => {
  const headerText = () => {
    return (
      <div className='header-title'>
        <Icon
          component={crossIcon}
          onClick={() => setDeleteListingModal(false)}
        />
      </div>
    );
  };

  return (
    <Modal
      title={headerText()}
      open={deleteListingModal}
      onOk={() => setDeleteListingModal(false)}
      onCancel={() => setDeleteListingModal(false)}
      className='duplicate-apartment-modal'
      footer={''}
      width={640}
    >
      {/* fgnbkb */}
      <DeleteManageListing
        setDeleteListingModal={setDeleteListingModal}
        deleteListingModal={deleteListingModal}
      />
    </Modal>
  );
};

export default DeleteManageListingModal;
