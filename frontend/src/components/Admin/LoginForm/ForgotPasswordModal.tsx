import React from "react";
import { Modal } from "antd";
import ForgotPassword from "./ForgotPassword";

const ForgotPasswordModal = ({ isModalOpen, setIsModalOpen }) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Modal
      title="Forgot Password"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={""}
      className="forgot-password-modal"
      width={400}
      zIndex={2}
    >
      <ForgotPassword setIsModalOpen={setIsModalOpen} />
    </Modal>
  );
};

export default ForgotPasswordModal;
