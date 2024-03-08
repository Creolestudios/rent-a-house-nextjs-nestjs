import React, { useState } from "react";
import { Modal, Input, Radio, Space } from "antd";
import type { RadioChangeEvent } from "antd";
import { CustomButton } from "@/globalStyles";
import Icon from "@ant-design/icons";
import crossIcon from "@/assets/images/icons/crossSvg";
import { useDispatch, useSelector } from "react-redux";
import appActions from "@/redux/app/app.action";

const BookingCancelModal = ({
  isModalOpen,
  setIsModalOpen,
  handleOk,
  handleCancel,
  title,
  radioList,
}: any) => {
  const [value, setValue] = useState<any>(null);

  const dispatch = useDispatch();

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  const headerConetnt = () => {
    return (
      <div className="header-wrapper">
        <div className="title">{title}</div>
        <Icon component={crossIcon} onClick={() => setIsModalOpen(false)} />
      </div>
    );
  };

  const handleCancelBooking = () => {
    dispatch(appActions.cancelBooking(true));
    setIsModalOpen(false);
  };

  const footerContent = () => {
    return (
      <div className="footer-wrapper">
        <div className="btn-wrapper">
          <CustomButton className="fill" onClick={() => handleCancelBooking()}>
            Save
          </CustomButton>
          <CustomButton onClick={() => setIsModalOpen(false)}>
            Cancel
          </CustomButton>
        </div>
      </div>
    );
  };

  return (
    <Modal
      title={headerConetnt()}
      open={isModalOpen}
      onOk={() => setIsModalOpen(false)}
      onCancel={() => setIsModalOpen(false)}
      footer={footerContent()}
      className="booking-cancel"
      width={640}
    >
      <Radio.Group onChange={onChange} value={value}>
        <Space direction="vertical">
          {radioList.map((e, index): any => (
            <Radio value={index}>{e}</Radio>
          ))}
          <Input
            placeholder="Mention Other"
            style={{ width: 100, marginLeft: 10 }}
          />
        </Space>
      </Radio.Group>
    </Modal>
  );
};

export default BookingCancelModal;
