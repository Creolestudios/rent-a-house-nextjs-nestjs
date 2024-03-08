import React, { useEffect, useState } from 'react';
import { ListingPropertyWrapper } from './PropertyListingOptionWrapper.styles';
import Image from 'next/image';
import propertyImg from '@/assets/images/house-demo.jpg';
import { NULL } from 'sass';
import DuplicateApartmentModal from './DuplicateApartmentModal';
import { useDispatch, useSelector } from 'react-redux';
import actions from '@/redux/duplicateListing/duplicateListing.action';
import { RootState } from '@/redux/store/rootReducer';
import moment from 'moment';

const data = [
  {
    id: 1,
    title: 'Am Apartment, Vancouver',
    detail: [
      {
        city: 'Vancouver',
        date: '7-2-2023 to 31-5-2023',
        price: 60,
      },
    ],
  },
  {
    id: 2,
    title: 'Am Apartment, Vancouver',
    detail: [
      {
        city: 'Vancouver',
        date: '7-2-2023 to 31-5-2023',
        price: 60,
      },
    ],
  },
  {
    id: 3,
    title: 'Am Apartment, Vancouver',
    detail: [
      {
        city: 'Vancouver',
        date: '7-2-2023 to 31-5-2023',
        price: 60,
      },
    ],
  },
  {
    id: 4,
    title: 'Am Apartment, Vancouver',
    detail: [
      {
        city: 'Vancouver',
        date: '7-2-2023 to 31-5-2023',
        price: 60,
      },
    ],
  },
  {
    id: 5,
    title: 'Am Apartment, Vancouver',
    detail: [
      {
        city: 'Vancouver',
        date: '7-2-2023 to 31-5-2023',
        price: 60,
      },
    ],
  },
  {
    id: 6,
    title: 'Am Apartment, Vancouver',
  },
];

const ListingProperty = ({
  setDuplicateApartmentModalOpen,
  duplicateApartmentModalOpen,
}: any) => {
  const [propertyData, setPropertyData] = useState(data);
  const duplicatePropertyList = useSelector(
    (state: RootState) => state.duplicateListingReducer.duplicateList
  );
  const dispatch = useDispatch();

  const [proprtyId, setPropertyId] = useState<number>(null);

  const handlePropertyClick = (id: number) => {
    setPropertyId(id);
  };

  useEffect(() => {
    dispatch(actions.getDuplicateListing());
  }, []);

  return (
    <>
      <ListingPropertyWrapper>
        <div className='block-wrapper'>
          {duplicatePropertyList?.map((item: any) => (
            <div
              key={item?.id}
              className={`block ${proprtyId === item?.id && 'active'}`}
              onClick={() => {
                sessionStorage.setItem('duplicate_property_id', item.id);
                sessionStorage.setItem(
                  'dial_code',
                  item.host_details.dialer_code
                );
                handlePropertyClick(item?.id);
                setDuplicateApartmentModalOpen(true);
              }}
            >
              <Image src={propertyImg} width={90} height={90} alt='images' />
              <div className='content'>
                <div className='title'>{item?.name}</div>
                <ul>
                  <>
                    <li>{item?.city_details.name}</li>
                    <li>
                      {`Listed at ${moment(item?.created_at).format(
                        'YYYY-MM-DD'
                      )}`}
                    </li>
                    <li>
                      {` Available from 
                      ${moment(item?.available_from).format('YYYY-MM-DD')}`}
                    </li>
                    <li>
                      {item?.rent} {item.currency}
                    </li>
                  </>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </ListingPropertyWrapper>
      <DuplicateApartmentModal
        setDuplicateApartmentModalOpen={setDuplicateApartmentModalOpen}
        duplicateApartmentModalOpen={duplicateApartmentModalOpen}
      />
    </>
  );
};

export default ListingProperty;
