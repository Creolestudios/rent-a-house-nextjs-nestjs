import React, { useState } from 'react';
import Title from '../Title/Title';
import { DocumentSubmissionWrapper } from './InquiryRequest.styles';
import { fontFamily, color } from '@/styles/variable';
import SubTitle from '../SubTitle/SubTitle';
import cubeImg from '@/assets/images/cube.png';
import fileImg from '@/assets/images/file.png';
import Image from 'next/image';
import { CustomButton } from '@/globalStyles';
import Icon from '@ant-design/icons';
import uploadIcon from '@/assets/images/icons/UploadSvg';
import fileLineIcon from '@/assets/images/icons/FileLineSvg';
import { Button, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';

const handleRequest = ({ file, onSuccess, onError }: any) => {
  if (file) {
    onSuccess();
  }
};

const DocumentSubmission = ({ setRequiredDetails, requiredDetails }) => {
  const [identityDoc, setIdentityDoc] = useState();
  const [occupationDoc, setOccupationDoc] = useState();

  const handleIdentityDoc = (e) => {
    setRequiredDetails({
      ...requiredDetails,
      proofOfIdentity: e.file.originFileObj,
    });
  };

  const handleOccupationDoc = (e) => {
    setRequiredDetails({
      ...requiredDetails,
      occupationDoc: e.file.originFileObj,
    });
  };

  return (
    <DocumentSubmissionWrapper>
      <Title
        className='title'
        title='Documents Required to Provide'
        fontFamily={`${fontFamily.ptBold}`}
        color={`${color.blackColor}`}
        marginBottom={'4px'}
      />
      <SubTitle
        className='sub-title'
        title='To accept your booking James wants to see at least one document in each category.'
        fontFamily={`${fontFamily.ptBold}`}
        color={`${color.greyColor}`}
        marginBottom={'4px'}
      />
      <div className='format'>Max size: 7MB | Format: pdf</div>
      <div className='info-title'>
        <div className='img-wrap'>
          <Image src={cubeImg} width={16} height={16} alt='img' />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          fringilla finibus mi varius sodales. Vestibulum consectetur metus
          placerat tortor imperdiet egestas. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec fringilla finibus mi varius
          sodales. Vestibulum consectetur metus placerat tortor imperdiet
          egestas.
        </p>
      </div>
      <div className='upload-wrapper'>
        <div className='identify-proof'>
          <div className='left'>
            <div className='icon'>
              <Image src={fileImg} width={16} height={16} alt='img' />
            </div>
            <div className='text'>
              <h3>Proof of identity</h3>
              <p>Id, password, driver’s license.</p>
            </div>
          </div>
          <div className='right'>
            <div className='upload-more'>
              <Upload
                customRequest={handleRequest}
                iconRender={() => <Icon component={fileLineIcon} />}
                onChange={handleIdentityDoc}
                maxCount={1}
              >
                <Button icon={<Icon component={uploadIcon} />}>Upload</Button>
              </Upload>
            </div>
          </div>
        </div>
        <div className='occupation-proof'>
          <div className='text'>
            <h3>Proof of Occupation</h3>
            <p>Salary Slips or company card.</p>
            <div className='upload-more'>
              <Upload
                customRequest={handleRequest}
                iconRender={() => <Icon component={fileLineIcon} />}
                onChange={handleOccupationDoc}
                maxCount={1}
              >
                <Button icon={<Icon component={uploadIcon} />}>Upload</Button>
              </Upload>
            </div>
          </div>
        </div>
      </div>
    </DocumentSubmissionWrapper>
  );
};

export default DocumentSubmission;
