import React, { useState } from 'react';
import Icon from '@ant-design/icons';
import homeFrameIcon from '@/assets/images/icons/HomeFrameSvg';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const Spacification = ({ furnished, type, size, noOfPeople }) => {
  const data = [
    {
      id: 1,
      icon: <Icon component={homeFrameIcon} />,
      title: 'Entire apartment',
    },
    furnished === 1 && {
      id: 2,
      icon: <Icon component={homeFrameIcon} />,
      title: 'Furnished',
    },
    {
      id: 3,
      icon: <Icon component={homeFrameIcon} />,
      title: `Property: ${size} sq. ft.`,
    },
    {
      id: 4,
      icon: <Icon component={homeFrameIcon} />,
      title: `Space for ${noOfPeople} people`,
    },
    {
      id: 5,
      icon: <Icon component={homeFrameIcon} />,
      title: `${type}`,
    },
  ];

  const propertyData = useSelector(
    (state: any) => state.propertyListingReducer.singleProperty
  );
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className='spacification-wrapper'>
      <ul>
        {data.map(
          (item) =>
            item.id && (
              <li key={item?.id}>
                {item?.icon}
                {item?.title}
              </li>
            )
        )}
      </ul>
      <div className='spec-info'>
        <InfoCircleOutlined />
        You can register at this address (anmeldung). Depending on how long
        you’re staying in Vancouver, you may have to register your house address
        at the local citizens’ office.
      </div>
      <div className={isReadMore ? 'read' : 'less'}>
        <p>Move into this modern property!</p>
        {isReadMore ? (
          <p>{propertyData?.space_overview?.details.slice(0, 150)}...</p>
        ) : (
          <p>{propertyData?.space_overview?.details}</p>
        )}
      </div>
      <span onClick={toggleReadMore} className='read-more'>
        {isReadMore ? 'Read More' : ' Show Less'}
      </span>
    </div>
  );
};

export default Spacification;
