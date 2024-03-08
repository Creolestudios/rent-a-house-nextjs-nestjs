import React, { useState } from 'react';
import { PropertyEditWrapper } from './PropertyEdit.styles';
import { Container, CustomButton } from '@/globalStyles';
import { Modal, Tabs } from 'antd';
import PropertyContent from './PropertyContent';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store/rootReducer';
import actions from '@/redux/duplicateListing/duplicateListing.action';
import Icon from '@ant-design/icons';
import crossIcon from '@/assets/images/icons/crossSvg';

export interface HeaderProps {
  headerHeight: number;
}

const item = [
  {
    id: 1,
    label: 'Property Details',
  },
  {
    id: 2,
    label: 'Space Overview',
  },
  {
    id: 3,
    label: 'Facilities & Amenities',
  },
  {
    id: 4,
    label: 'Rental Condition',
  },
  {
    id: 5,
    label: 'Rules & Preferences',
  },
  {
    id: 6,
    label: 'Media',
  },
];

const PropertyEdit = () => {
  const dispatch = useDispatch();
  const [deletePropertyModal, setDeletePropertyModal] = useState(false);
  const { windowWidth, headerHeight } = useSelector(
    (state: any) => state.appReducer
  );
  const propertyId = Number(
    globalThis.sessionStorage?.getItem('duplicate_property_id')
  );

  const obj: HeaderProps = {
    headerHeight,
  };
  const handleDelete = () => {
    setDeletePropertyModal(false);
    dispatch(actions.deleteProperty({ propertyId: propertyId }));
  };

  const headerText = () => {
    return (
      <div className='header-title'>
        {/* <div className='title'>Do yoy Want to Delete Property?</div> */}
        <Icon
          component={crossIcon}
          onClick={() => setDeletePropertyModal(false)}
        />
      </div>
    );
  };

  return (
    <PropertyEditWrapper {...obj} className='edit-property'>
      <Container className='container'>
        <div className='header-wrapper'>
          <div className='title'>Edit Property - An Apartment</div>
          <div className='btn-wrapper'>
            <CustomButton>Preview</CustomButton>
            <CustomButton onClick={() => setDeletePropertyModal(true)}>
              Delete
            </CustomButton>
          </div>
        </div>
        <Tabs
          tabPosition={windowWidth < 768 ? 'top' : 'left'}
          items={item.map((e: any) => {
            return {
              label: (
                <div className='tab-label-wrapper'>
                  <div>
                    <span className='title'>{e?.label}</span>
                  </div>
                  {/* <span className='badge'>{e?.masgCount}</span> */}
                </div>
              ),
              key: e?.id,
              children: <PropertyContent id={e?.id} />,
            };
          })}
        />
        <Modal
          title={headerText()}
          open={deletePropertyModal}
          onOk={() => setDeletePropertyModal(false)}
          onCancel={() => setDeletePropertyModal(false)}
          className='duplicate-apartment-modal delete-property'
          footer={''}
          width={300}
        >
          <div className='title'>Do you really want to delete property?</div>
          <div className='btn-wrapper'>
            <CustomButton className='fill' onClick={handleDelete}>
              Yes
            </CustomButton>
            <CustomButton onClick={() => setDeletePropertyModal(false)}>
              No
            </CustomButton>
          </div>
        </Modal>
      </Container>
    </PropertyEditWrapper>
  );
};

export default PropertyEdit;
