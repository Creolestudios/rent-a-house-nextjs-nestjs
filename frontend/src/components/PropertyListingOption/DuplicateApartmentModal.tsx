import React, { useState } from 'react';
import { Modal } from 'antd';
import Icon from '@ant-design/icons';
import crossIcon from '@/assets/images/icons/crossSvg';
import DuplicateApartment from './DuplicateApartment';

const DuplicateApartmentModal = ({
  setDuplicateApartmentModalOpen,
  duplicateApartmentModalOpen,
}: any) => {
  const headerText = () => {
    return (
      <div className='header-title'>
        <Icon
          component={crossIcon}
          onClick={() => setDuplicateApartmentModalOpen(false)}
        />
      </div>
    );
  };

  return (
    <Modal
      title={headerText()}
      open={duplicateApartmentModalOpen}
      onOk={() => setDuplicateApartmentModalOpen(false)}
      onCancel={() => setDuplicateApartmentModalOpen(false)}
      className='duplicate-apartment-modal'
      footer={''}
      width={640}
    >
      <DuplicateApartment
        // phoneVerificationModalOpen={phoneVerificationModalOpen}
        // setPhoneVerificationModalOpen={setPhoneVerificationModalOpen}
        setDuplicateApartmentModalOpen={setDuplicateApartmentModalOpen}
        duplicateApartmentModalOpen={duplicateApartmentModalOpen}
      />
    </Modal>
  );
};

export default DuplicateApartmentModal;
