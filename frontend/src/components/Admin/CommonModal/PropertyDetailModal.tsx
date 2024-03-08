import React from 'react';
import { Modal } from 'antd';
import { Avatar } from 'antd';
import Icon from '@ant-design/icons';
import CrossIcon from '@/assets/images/icons/crossSvg';
import PropertyDetail from './PropertyDetail';

const PropertyDetailModal = ({
  isModalOpen,
  setIsModalOpen,
  label,
  view,
  route,
  proertyName,
  hostLabel,
  hostName,
}: any) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const headerTitle = () => {
    return (
      <div className='header-wrapper'>
        <div className='title-wrapper'>
          <Avatar size={36}>JA</Avatar>
          <div className='title'>{hostName}</div>
        </div>
        <div className='icon' onClick={handleCancel}>
          <Icon component={CrossIcon} />
        </div>
      </div>
    );
  };

  return (
    <>
      <Modal
        title={headerTitle()}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={''}
        width={800}
      >
        <PropertyDetail
          hostLabel={hostLabel}
          hostName={hostName}
          route={route}
          label={label}
          view={view}
          proertyName={proertyName}
        />
      </Modal>
    </>
  );
};

export default PropertyDetailModal;
