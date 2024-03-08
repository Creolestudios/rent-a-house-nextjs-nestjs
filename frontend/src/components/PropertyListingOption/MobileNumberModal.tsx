import React, { useState } from 'react';
import { Modal } from 'antd';
import Icon from '@ant-design/icons';
import crossIcon from '@/assets/images/icons/crossSvg';
import PublishStep from './PublishStep';
import MobileNumberStep from './MobileNumberStep';

const MobileNumberModal = ({
  mobileNumberModal,
  setMobileNumberModal,
}: any) => {
  const headerText = () => {
    return (
      <div className='header-title'>
        <Icon
          component={crossIcon}
          onClick={() => setMobileNumberModal(false)}
        />
      </div>
    );
  };

  return (
    <Modal
      title={headerText()}
      open={mobileNumberModal}
      onOk={() => setMobileNumberModal(false)}
      onCancel={() => setMobileNumberModal(false)}
      className='duplicate-apartment-modal mobile-number'
      footer={''}
      width={400}
    >
      <MobileNumberStep
        className='mobile-step'
        mobileNumberModal={mobileNumberModal}
        setMobileNumberModal={setMobileNumberModal}
      />
    </Modal>
  );
};

export default MobileNumberModal;
