import React, { useEffect } from 'react';
import { Modal } from 'antd';
import LoginFormModal from './LoginFormModal';
import Icon from '@ant-design/icons';
import crossIcon from '@/assets/images/icons/crossSvg';
import { useForm } from 'antd/lib/form/Form';

const LoginModal = ({
  isModalOpen,
  setIsModalOpen,
  setSignupIsModalOpen,
}: any) => {
  const [singIn] = useForm();

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const headerText = () => {
    return (
      <div className='header-wrapper'>
        <div className='title'>Sign in</div>
        <div className='icon' onClick={() => handleCancel()}>
          <Icon component={crossIcon} />
        </div>
      </div>
    );
  };

  console.log(isModalOpen, 'login modal');

  useEffect(() => {
    if (!isModalOpen) {
      singIn.setFieldsValue({
        email: '',
        password: '',
      });
    }
  }, [isModalOpen]);

  return (
    <Modal
      title={headerText()}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      centered
      footer={''}
      className='login-modal'
      width={487}
    >
      <LoginFormModal
        singIn={singIn}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setSignupIsModalOpen={setSignupIsModalOpen}
      />
    </Modal>
  );
};

export default LoginModal;
