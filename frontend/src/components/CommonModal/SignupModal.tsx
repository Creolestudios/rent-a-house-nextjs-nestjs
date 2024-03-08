import React from 'react';
import { Modal } from 'antd';
import Icon from '@ant-design/icons';
import crossIcon from '@/assets/images/icons/crossSvg';
import SignupFormModal from './SignupFormModal';

const SignupModal = ({
  isSignupModalOpen,
  setSignupIsModalOpen,
  setIsModalOpen,
}: any) => {
  const handleOk = () => {
    setSignupIsModalOpen(false);
  };

  const handleCancel = () => {
    setSignupIsModalOpen(false);
  };

  const headerText = () => {
    return (
      <div className='header-wrapper'>
        <div className='title'>Sign up for your account</div>
        <div className='icon' onClick={() => handleCancel()}>
          <Icon component={crossIcon} />
        </div>
      </div>
    );
  };

  return (
    <Modal
      title={headerText()}
      open={isSignupModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      centered
      footer={''}
      className='login-modal'
      width={487}
    >
      <SignupFormModal
        setIsModalOpen={setIsModalOpen}
        setSignupIsModalOpen={setSignupIsModalOpen}
      />
    </Modal>
  );
};

export default SignupModal;
