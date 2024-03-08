import React, { useEffect, useState } from 'react';
import { DataWrapper } from './Account.styles';
import { Form, Upload } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import actions from '@/redux/account/account.action';
import { RootState } from '@/redux/store/rootReducer';
import debounce from 'lodash/debounce';

const SupportingDocument = ({ title }: any) => {
  const { Dragger } = Upload;
  const dispatch = useDispatch();
  const [id, setId] = useState<Number>();
  const userDetails = useSelector(
    (state: RootState) => state.accountReducer.userDetails
  );
  const [firstFiles, setFirstFiles] = useState<any>({
    uid: 1,
    name: userDetails.identity_proof,
  });
  const [secondFiles, setSecondFiles] = useState<any>({
    uid: 1,
    name: userDetails.proof_of_occupation_income,
  });
  const idVisaLabel = ({ title, subTitle }: any) => {
    return (
      <div className='label-wrapper'>
        <h4>{title}</h4>
        <p>{subTitle}</p>
      </div>
    );
  };

  const labelTitleData = [
    {
      title: 'ID and visa',
      subTitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis posuere ante, quis condimentum augue tincidunt nec.',
    },
    {
      title: 'Proof of occupation/Income',
      subTitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis posuere ante, quis condimentum augue tincidunt nec.',
    },
  ];
  useEffect(() => {
    setId(Number(sessionStorage.getItem('user_id')));
  }, [userDetails]);

  const firstFileChange = (e: any) => {
    if (e.fileList.length === 1) {
      setFirstFiles(e.file);
      dispatch(
        actions.supportingDocumentUpload({
          id: id,
          identity_proof: e.file.originFileObj,
        })
      );
    }
  };
  const firstFileChanged = debounce(firstFileChange, 1000);

  const secondFileChange = (e: any) => {
    if (e.fileList.length === 1) {
      setSecondFiles(e);
      dispatch(
        actions.supportingDocumentUpload({
          id: id,
          proof_of_occupation_income: e.file.originFileObj,
        })
      );
    }
  };

  const secondFileChanged = debounce(secondFileChange, 1000);

  const onRemoveFirst = (e: any) => {
    setFirstFiles(e);
    dispatch(
      actions.supportingDocumentUpload({
        id: id,
        identity_proof: 'delete',
      })
    );
  };

  const onRemoveSecond = (e: any) => {
    setFirstFiles(e);
    dispatch(
      actions.supportingDocumentUpload({
        id: id,
        proof_of_occupation_income: 'delete',
      })
    );
  };

  return (
    <DataWrapper>
      <h3>{title}</h3>
      <Form className='small-width'>
        <Form.Item name='identity_proof' label={idVisaLabel(labelTitleData[0])}>
          <div className='video-upload-wrapper'>
            <Dragger
              name='file'
              maxCount={1}
              onChange={firstFileChanged}
              onDrop={firstFileChanged}
              onRemove={onRemoveFirst}
              defaultFileList={
                userDetails.identity_proof !== null && [firstFiles]
              }
              multiple={false}
              accept='.jpg,.png,.jpeg'
            >
              <p className='ant-upload-drag-icon'>
                {userDetails.identity_proof !== null
                  ? 'Click or dragg file here to replace'
                  : 'Click or dragg file here to upload'}
              </p>
            </Dragger>
          </div>
        </Form.Item>
        <Form.Item
          name='proof_of_occupation_income'
          label={idVisaLabel(labelTitleData[1])}
        >
          <div className='video-upload-wrapper'>
            <Dragger
              name='file'
              maxCount={1}
              onChange={secondFileChanged}
              onDrop={secondFileChanged}
              onRemove={onRemoveSecond}
              defaultFileList={
                userDetails.proof_of_occupation_income !== null && [secondFiles]
              }
              multiple={false}
              accept='.jpg,.png,.jpeg'
            >
              <p className='ant-upload-drag-icon'>
                {userDetails.proof_of_occupation_income !== null
                  ? 'Click or dragg file here to replace'
                  : 'Click or dragg file here to upload'}
              </p>
            </Dragger>
          </div>
        </Form.Item>
      </Form>
    </DataWrapper>
  );
};

export default SupportingDocument;
