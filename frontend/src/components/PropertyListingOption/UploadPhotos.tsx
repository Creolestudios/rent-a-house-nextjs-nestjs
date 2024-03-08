import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import { useDispatch, useSelector } from 'react-redux';
import duplicateActions from '@/redux/duplicateListing/duplicateListing.action';
import { RootState } from '@/redux/store/rootReducer';

// const getBase64 = (file: RcFile): Promise<string> =>
//   new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result as string);
//     reader.onerror = (error) => reject(error);
//   });

const UploadPhotos = ({ fileList, setFileList, setPayload }) => {
  const dispatch = useDispatch();
  const filesList: any = [];
  const stepData = useSelector(
    (state: RootState) => state.duplicateListingReducer.step7
  );
  const idx = Number(
    globalThis.sessionStorage?.getItem('duplicate_property_id')
  );
  const [editData, setEditData] = useState({});
  const [removedFile, setRemovedFile] = useState([]);

  useEffect(() => {
    let object = removedFile;
    setPayload && setPayload(object);
  }, [removedFile]);

  useEffect(() => {
    setPayload && dispatch(duplicateActions.getStep7Data({ property_id: idx }));
  }, [idx]);

  useEffect(() => {
    setPayload &&
      stepData.length > 0 &&
      stepData?.filter((item: any, index: any) => {
        if (item.type === 0) {
          let image = {
            id: item.id,
            uid: `-${index}`,
            name: 'image.png',
            thumbUrl: item.name,
            url: item.name,
          };
          filesList.push(image);
        }
      });
    setPayload && setFileList(filesList);
  }, [stepData]);

  const handlePreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const handleRemove = (e: any) => {
    setRemovedFile([...removedFile, e.id]);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>
        Add <br /> Media
      </div>
    </div>
  );

  return (
    <>
      <Upload
        // action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
        listType='picture-card'
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        onRemove={handleRemove}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
    </>
  );
};

export default UploadPhotos;
