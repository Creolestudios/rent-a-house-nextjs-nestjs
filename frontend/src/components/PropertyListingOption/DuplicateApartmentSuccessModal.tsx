import React from 'react';
import Icon from '@ant-design/icons';
import crossIcon from '@/assets/images/icons/crossSvg';
import { Modal } from 'antd';
import SuccessDuplicateApartment from './SuccessDuplicateApartment';

const DuplicateApartmentSuccessModal = ({
    setAddSuccessApartmentModal,
  addSuccessApartmentModal,
}: any) => {
  const headerText = () => {
    return (
      <div className='header-title'>
        <Icon
          component={crossIcon}
          onClick={() => setAddSuccessApartmentModal(false)}
        />
      </div>
    );
  };

  return (
    <Modal
      title={headerText()}
      open={addSuccessApartmentModal}
      onOk={() => setAddSuccessApartmentModal(false)}
      onCancel={() => setAddSuccessApartmentModal(false)}
      className='duplicate-apartment-modal'
      footer={''}
      width={640}
    >
      <SuccessDuplicateApartment
        setAddSuccessApartmentModal={setAddSuccessApartmentModal}
        addSuccessApartmentModal={addSuccessApartmentModal}
      />
    </Modal>
  );
};

export default DuplicateApartmentSuccessModal;
