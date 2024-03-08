import React, { useEffect, useState } from 'react';
// import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/rootReducer';

const { Dragger } = Upload;

const DragingUploadFile = ({
  videoList,
  setVideoList,
  setPayload,
  filterVideo,
}) => {
  // const [filesList, setFileList] = useState<any>([]);
  // const stepData = useSelector(
  //   (state: RootState) => state.duplicateListingReducer.step7
  // );

  useEffect(() => {
    let files = [];
    filterVideo.map((item: any, index: any) => {
      let video = {
        uid: index,
        name: item.name,
      };
      files.push(video);
    });
    setPayload && setVideoList(files);
  }, [filterVideo]);

  const props: UploadProps = {
    name: 'file',
    multiple: true,
    onChange(info) {
      const { status } = info.file;
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
        setVideoList([...videoList, info.file]);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      return e.dataTransfer.files;
    },
  };

  return (
    <div className='video-upload-wrapper'>
      <Dragger {...props}>
        <p className='ant-upload-drag-icon'>
          Click or drage video files here to upload
        </p>
      </Dragger>
    </div>
  );
};

export default DragingUploadFile;
