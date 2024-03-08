import React, { useEffect, useState } from 'react';
import DragingUploadFile from './DragingUploadFile';
import { MediaStepWrapper } from './PropertyListingOptionWrapper.styles';
import UploadPhotos from './UploadPhotos';
import { Input, UploadFile } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store/rootReducer';
import actions from '@/redux/addProperty/addProperty.action';

const MediaStep = ({ title, setPayload, setImageVideo }: any) => {
  const dispatch = useDispatch();
  const propertyId = useSelector(
    (state: RootState) => state.addPropertyReducer.propertyId
  );
  const stepData = useSelector(
    (state: RootState) => state.duplicateListingReducer.step7
  );
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [videoList, setVideoList] = useState<UploadFile[]>([]);
  const [filterVideo, setFilterVideo]= useState([])
  const [url, setUrl] = useState<any>('');
  useEffect(() => {
    if (stepData.length !== 0) {
      let filterUrl:any = stepData?.filter((item: any) => {
        if (item.type === 2) {
          return item.name;
        }
      });
      let filterVideo: any = stepData?.filter((item: any) => {
        if (item.type === 1) {
          return item;
        }
      });
      setFilterVideo(filterVideo);
      filterVideo.length !==0 && setUrl(filterUrl[0]?.name);
    }
  }, [stepData]);

  useEffect(() => {
    let step7Data;
    let list = [];
    fileList.map((item: any, index) => {
      let file = item.originFileObj;
      list.push(file);
    });
    videoList.length === 0
      ? (step7Data = {
          image: list,
          youtube: url,
          propertyId: propertyId,
        })
      : (step7Data = {
          image: list,
          videos: videoList[0].originFileObj,
          youtube: url,
          propertyId: propertyId,
        });
    dispatch(actions.step7Data(step7Data));
    setPayload &&
      setImageVideo(
        videoList.length === 0
          ? (step7Data = {
              image: fileList,
              youtube: url,
              propertyId: propertyId,
            })
          : (step7Data = {
              image: fileList,
              videos: videoList,
              youtube: url,
              propertyId: propertyId,
            })
      );
  }, [url, videoList, fileList]);

  return (
    <MediaStepWrapper className='media-wrapper'>
      {title && <div className='title'>{title}</div>}
      <div className='block'>
        <div className='sub-title'>Photos</div>
        <div className='content'>
          <UploadPhotos
            setFileList={setFileList}
            fileList={fileList}
            setPayload={setPayload}
          />
        </div>
      </div>
      <div className='block'>
        <div className='sub-title'>Videos</div>
        <div className='content'>
          <DragingUploadFile
            filterVideo={filterVideo}
            setVideoList={setVideoList}
            videoList={videoList}
            setPayload={setPayload}
          />
        </div>
      </div>
      <div className='block'>
        <div className='sub-title'>YouTube Video Link</div>
        <div className='content'>
          <Input
            placeholder='Paste valid YouTube video link here'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
      </div>
    </MediaStepWrapper>
  );
};

export default MediaStep;
