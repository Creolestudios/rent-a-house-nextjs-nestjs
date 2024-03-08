import { Box, CustomButton } from '@/globalStyles';
import { fontFamily, color } from '@/styles/variable';
import React, { useState } from 'react';
import { ReservationDetailWrapper } from '../Reservation/Reservation.styles';
import Title from '../Title/Title';
import SiteConfigurationDetail from './SiteConfigurationDetail';
import { useDispatch } from 'react-redux';
import actions from '@/redux/admin/siteConfig/siteConfig.action';
import { Form } from 'antd';

const SiteConfiguration = () => {
  const dispatch = useDispatch();
  const [enableEdit, setEnableEdit] = useState<boolean>(false);
  const [logo, setLogo] = useState(null);
  const [siteConfigForm] = Form.useForm();

  const handleSaveConfig = (value) => {
    const newValue = value;
    newValue.contact = parseInt(newValue.contact);
    newValue.logo === undefined
      ? (delete newValue.logo,
        setEnableEdit(false),
        dispatch(actions.updateSiteConfig(newValue)))
      : ((newValue.logo = logo),
        setEnableEdit(false),
        dispatch(actions.updateSiteConfig(newValue)));
  };

  return (
    <ReservationDetailWrapper>
      <Title
        className='title-wrapper'
        title=''
        fontFamily={`${fontFamily.demiBold}`}
        color={`${color.blackColor}`}
      >
        <div className='btn-wrapper'>
          {enableEdit ? (
            <CustomButton onClick={() => siteConfigForm.submit()}>
              Save
            </CustomButton>
          ) : (
            <CustomButton onClick={() => setEnableEdit(true)}>
              Edit
            </CustomButton>
          )}
        </div>
      </Title>

      <Box className='box'>
        <SiteConfigurationDetail
          siteConfigForm={siteConfigForm}
          enableEdit={enableEdit}
          onFinish={handleSaveConfig}
          setLogo={setLogo}
        />
      </Box>
    </ReservationDetailWrapper>
  );
};

export default SiteConfiguration;
