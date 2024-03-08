import { Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { ViewDetailWrapper } from '../PropertyListing/PropertyListing.styles';
import { Button, Upload } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import actions from '@/redux/admin/siteConfig/siteConfig.action';
import { appConstant } from '@/config/constants';
import { RootState } from '@/redux/store/rootReducer';
import Image from 'next/image';
import UserIcon from '@/assets/images/user5.png';

const { TextArea } = Input;

const SiteConfigurationDetail = ({
  enableEdit,
  siteConfigForm,
  onFinish,
  setLogo,
}) => {
  const dispatch = useDispatch();
  const siteConfigData = useSelector(
    (state: RootState) => state.siteConfigReducer.data
  );
  const [textareaHeight, setTextareaHeight] = useState(0);
  const [textareaText, settextareaText] = useState('');
  function isImageUrl(url: any) {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg'];
    const extension = url?.slice(url.lastIndexOf('.')).toLowerCase();
    return imageExtensions.includes(extension);
  }
  useEffect(() => {
    dispatch(actions.getSiteConfig());
  }, []);

  useEffect(() => {
    siteConfigForm.setFieldsValue({
      name: siteConfigData?.name,
      address: siteConfigData?.address,
      contact: parseInt(siteConfigData?.contact),
    });
  }, [siteConfigData]);

  const beforeUpload = (file: File) => {
    const isValidImage =
      file.type === 'image/jpeg' ||
      file.type === 'image/png' ||
      file.type === 'image/jpg';
    if (!isValidImage) {
      siteConfigForm.setFields([
        {
          logo: name,
          errors: ['Please upload JPG/ PNG/ JPEG files only.'],
        },
      ]);
      return Upload.LIST_IGNORE;
    }
    siteConfigForm.setFields([
      {
        logo: name,
        errors: [''],
      },
    ]);
  };
  useEffect(() => {
    if (siteConfigData.address !== undefined) {
      // console.log(document.querySelector('#address').scrollHeight);
    }
  }, [siteConfigData.address]);

  const handleTextareaChange = (e: any) => {
    settextareaText(e.target.value);
  };

  useEffect(() => {
    const textarea = document.getElementById('address');
    if (siteConfigData.address !== undefined) {
      setTextareaHeight(textarea.scrollHeight);
    }
  });

  return (
    <ViewDetailWrapper>
      <Form form={siteConfigForm} onFinish={onFinish}>
        <Form.Item
          label='Site Name'
          name='name'
          rules={[
            {
              required: true,
              message: appConstant.formValidation.siteNameRequired,
            },
          ]}
        >
          <Input
            name='name'
            className={enableEdit === false ? 'rmBorder' : ''}
            readOnly={!enableEdit}
          />
        </Form.Item>

        <Form.Item label='logo' name='logo'>
          <span>
            <Image
              src={
                isImageUrl(siteConfigData?.logo)
                  ? siteConfigData?.logo
                  : UserIcon
              }
              alt='images'
              width={45}
              height={45}
              style={{
                borderRadius: '50%',
                marginRight: '10px',
              }}
            />
            {enableEdit && (
              <span>
                <Upload
                  accept='.png,.jpg,.jpeg'
                  name='logo'
                  onChange={(e) => setLogo(e.file.originFileObj)}
                  beforeUpload={beforeUpload}
                >
                  <Button>Upload File</Button>
                </Upload>
              </span>
            )}
          </span>
        </Form.Item>
        <Form.Item label='Email Address'>
          <Input value={siteConfigData?.email} readOnly className='rmBorder' />
        </Form.Item>
        <Form.Item
          label='Contact Number'
          name='contact'
          rules={[
            {
              required: true,
              message: appConstant.formValidation.contactRequired,
            },
          ]}
        >
          <Input
            name='contact'
            type='number'
            className={enableEdit === false ? 'rmBorder' : ''}
            readOnly={!enableEdit}
          />
        </Form.Item>
        <Form.Item
          label='Address'
          name='address'
          rules={[
            {
              required: true,
              message: appConstant.formValidation.addressRequired,
            },
          ]}
        >
          <TextArea
            onChange={handleTextareaChange}
            style={{
              minHeight: 'auto',
              height: `${textareaHeight}px`,
              overflow: 'hidden',
              resize: 'none',
            }}
            rows={enableEdit ? 5 : 1}
            name='address'
            className={enableEdit === false ? 'rmBorder' : ''}
            readOnly={!enableEdit}
          />
        </Form.Item>
      </Form>
    </ViewDetailWrapper>
  );
};

export default SiteConfigurationDetail;
