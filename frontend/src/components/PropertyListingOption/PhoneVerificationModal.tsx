import React, { useState } from 'react';
import { Modal } from 'antd';
import Icon from '@ant-design/icons';
import crossIcon from '@/assets/images/icons/crossSvg';
import PublishStep from './PublishStep';

const PhoneVerificationModal = ({
  setPhoneVerificationModalOpen,
  phoneVerificationModalOpen,
  setDuplicateApartmentModalOpen,
}: any) => {
  const headerText = () => {
    return (
      <div className='header-title'>
        <Icon
          component={crossIcon}
          onClick={() => setPhoneVerificationModalOpen(false)}
        />
      </div>
    );
  };

  return (
    <Modal
      title={headerText()}
      open={phoneVerificationModalOpen}
      onOk={() => setPhoneVerificationModalOpen(false)}
      onCancel={() => setPhoneVerificationModalOpen(false)}
      className='duplicate-apartment-modal'
      footer={''}
      width={640}
    >
      <PublishStep
        className='verify-number'
        phoneVerificationModalOpen={phoneVerificationModalOpen}
        setPhoneVerificationModalOpen={setPhoneVerificationModalOpen}
      />
    </Modal>
  );
};

export default PhoneVerificationModal;
