import React from 'react';
import { FormWrapper } from '../CommonModal/CommonMoal.styles';
import { ContactFormWrapper } from './ContactUs.styles';
import { Button, Form, Input } from 'antd';
import Icon from '@ant-design/icons';
import arrowIcon from '@/assets/images/icons/LongRightArrowSvg';
import callImg from '@/assets/images/call.png';
import emailImg from '@/assets/images/mail.png';
import Image from 'next/image';
import { appConstant, mobileValidationRegex } from '@/config/constants';
import actions from '@/redux/contactUs/contactUs.action';
import { CustomButton } from '@/globalStyles';
import { useDispatch } from 'react-redux';

const ContactForm = ({isEdit,data}:any) => {
  const dispatch = useDispatch();
  const onFinish = (values: any) => {
    dispatch(actions.sendContactUs(values));
  };

  return (
    <ContactFormWrapper>
      <div className='left'>
        <FormWrapper>
          <Form name='basic' onFinish={onFinish} autoComplete='off'>
            <Form.Item
              name='name'
              rules={[
                {
                  required: true,
                  message: appConstant.formValidation.userNameRequired,
                },
              ]}
            >
              <Input placeholder={appConstant.placeHolder.userName} />
            </Form.Item>
            <Form.Item
              name='email'
              rules={[
                {
                  required: true,
                  message: appConstant.formValidation.emailRequired,
                },
                {
                  type: 'email',
                  message: appConstant.formValidation.emailValidate,
                },
              ]}
            >
              <Input placeholder={appConstant.placeHolder.email} />
            </Form.Item>
            <Form.Item
              name='phone'
              rules={[
                {
                  required: true,
                  message: appConstant.formValidation.contactRequired,
                },
                {
                  pattern: mobileValidationRegex,
                  message: appConstant.formValidation.contactValidate,
                },
              ]}
            >
              <Input placeholder={appConstant.placeHolder.contact} />
            </Form.Item>
            <Form.Item
              name='message'
              rules={[
                {
                  required: true,
                  message: appConstant.formValidation.messageRequired,
                },
              ]}
            >
              <Input.TextArea
                rows={3}
                placeholder={appConstant.formValidation.message}
              />
            </Form.Item>
            <Form.Item>
              <CustomButton className='fill' type='submit'>
                SEND
                <Icon component={arrowIcon} />
              </CustomButton>
            </Form.Item>
          </Form>
        </FormWrapper>
      </div>
      <div className='right'>
        <div className='comp-detail'>
          <div className='block'>
            <div className='title'>Open Hours</div>
            <div className='content'>
              <div>
                <label contentEditable={isEdit} id='contactDayLabel1'>{data.contact6}</label>
                <span contentEditable={isEdit} id='contactTimeLabel1'>{data.contact8}</span>
              </div>
              <div>
                <label contentEditable={isEdit} id='contactDayLabel2'>{data.contact7}</label>
                <span contentEditable={isEdit} id='contactTimeLabel2'>{data.contact9}</span>
              </div>
            </div>
          </div>
          <div className='block'>
            <div className='title'>Address</div>
            <div className='content'>
              <div>
                <address contentEditable={isEdit} id='contactAddress'>
                 {data.contact5}
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-info'>
        <div className='block'>
          <div className='icon'>
            <Image src={callImg} width={24} height={24} alt='img' />
          </div>
          <div className='content'>
            <label>PHONE No</label>
            <span contentEditable={isEdit} id='contactPhoneNo'>{data.contact3}</span>
          </div>
        </div>
        <div className='block'>
          <div className='icon'>
            <Image src={emailImg} width={24} height={24} alt='img' />
          </div>
          <div className='content'>
            <label>EMAIL ID</label>
            <span contentEditable={isEdit} id='contactEmail'>{data.contact4}</span>
          </div>
        </div>
      </div>
    </ContactFormWrapper>
  );
};

export default ContactForm;
