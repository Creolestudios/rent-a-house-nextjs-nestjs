import React from 'react';
import { ImageViewWrapper } from './PropertyDetail.styles';
import bgImg1 from '@/assets/images/about2.png';
import bgImg2 from '@/assets/images/about5.png';
import bgImg3 from '@/assets/images/about4.png';
import bgImg4 from '@/assets/images/about7.png';
import Icon from '@ant-design/icons';
import mapIcon from '@/assets/images/icons/MapSvg';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const ImageView = () => {
  const propertyData = useSelector(
    (state: any) => state.propertyListingReducer.singleProperty
  );
  propertyData.images;

  return (
    <ImageViewWrapper>
      <div className='parent'>
        {propertyData?.images?.slice(0, 6)?.map((data, key) => (
          <div
            className={`div${key + 1}`}
            style={{
              backgroundImage: `url(${data.name})`,
            }}
          ></div>
        ))}
      </div>
      <div className='title-content'>
        <div className='title'>
          {propertyData?.name}, {propertyData?.city_details?.name}
        </div>
        <p>
          {`${propertyData?.house_no}, Cordova Street, ${propertyData?.city_details?.name}, ${propertyData?.state_details?.name}`}
          , V6B 1E1
        </p>
        <div className='rate-detail'>
          <div className='rate'>
            <strong>CA${propertyData?.rent}</strong>/month
          </div>
          <div className='badge'>
            <InfoCircleOutlined />
            Some Bills included
          </div>
        </div>
      </div>
    </ImageViewWrapper>
  );
};

export default ImageView;
