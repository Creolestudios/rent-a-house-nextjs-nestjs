import React from 'react';
import { Modal } from 'antd';
import LoginFormModal from './LoginFormModal';
import Icon from '@ant-design/icons';
import crossIcon from '@/assets/images/icons/crossSvg';
import ForgotPasswordForm from './ForgotPasswordForm';

const ForgotPasswordModal = ({
  forgotPasswordModalOpen,
  setForgotPasswordModalOpen,
}: any) => {
  const handleOk = () => {
    setForgotPasswordModalOpen(false);
  };

  const handleCancel = () => {
    setForgotPasswordModalOpen(false);
  };

  const headerText = () => {
    return (
      <div className='header-wrapper'>
        <div className='title'>Forgot Password</div>
        <div className='icon' onClick={() => handleCancel()}>
          <Icon component={crossIcon} />
        </div>
      </div>
    );
  };

  return (
    <Modal
      title={headerText()}
      open={forgotPasswordModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      centered
      footer={''}
      className='login-modal'
      width={400}
    >
      <ForgotPasswordForm
        forgotPasswordModalOpen={forgotPasswordModalOpen}
        setForgotPasswordModalOpen={setForgotPasswordModalOpen}
      />
    </Modal>
  );
};

export default ForgotPasswordModal;
