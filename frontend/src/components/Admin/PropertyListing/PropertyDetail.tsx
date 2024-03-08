import { Avatar } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import { PropertyDetailWrapper } from './PropertyListing.styles';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/rootReducer';
import {
  contractType,
  policyType,
  propertyDocuments,
} from '@/config/constants';
import Image from 'next/image';
import UserIcon from '@/assets/images/user5.png';

interface PropertyDetails {
  rules_and_preference: {
    document: number;
    contract_type: number;
    cancellation_policy_id: number;
  };
  host_details: {
    image: string;
    first_name: string;
    last_name: string;
    is_email_verified: number;
  };
  city_details: {
    name: string;
  };
  state_details: {
    name: string;
  };
  country_details: {
    name: string;
  };
  space_overview: {
    bedrooms: number;
    peoples: number;
    size: number;
    is_furnished: number;
    details: string;
  };
  amenity: { amenities_id: { name: string } }[];
  facility: { amenities_id: { name: string } }[];
  rental_condition: {
    additional_required_cost: string[];
  };
  images: { name: string }[];
  type: string;
  house_no: string;
  name: string;
  rent: number;
  min_rental_period: number;
  max_rental_period: number;
  available_from: string;
  tenant_counts: number;
}
const PropertyDetail = ({ route }) => {
  const router = useRouter();
  const propertyId: string = router.asPath.split('?')[1];
  const propertyDetails: PropertyDetails = useSelector(
    (state: RootState) => state.adminPropertyListingReducer.singleProperty
  );
  function isImageUrl(url: any) {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg'];
    const extension = url?.slice(url.lastIndexOf('.')).toLowerCase();
    return imageExtensions.includes(extension);
  }

  return (
    <PropertyDetailWrapper>
      <div className='block'>
        <label>Host name</label>
        <ul>
          <li>
            <Image
              src={
                isImageUrl(propertyDetails?.host_details?.image)
                  ? propertyDetails?.host_details?.image
                  : UserIcon
              }
              alt='images'
              width={24}
              height={24}
              style={{
                marginRight: '10px',
              }}
            />
            <span className='label'>{`${propertyDetails?.host_details?.first_name} ${propertyDetails?.host_details?.last_name}`}</span>
          </li>
        </ul>
      </div>
      <div className='block'>
        <label>property type</label>
        <ul>
          <li>
            <span className='label'>{propertyDetails?.type}</span>
          </li>
        </ul>
      </div>
      <div className='block'>
        <label>Property Address</label>
        <ul>
          <li>
            <span className='label'>
              {`${propertyDetails?.house_no} ${propertyDetails?.name}, ${propertyDetails?.city_details?.name}, ${propertyDetails?.state_details?.name}, ${propertyDetails?.country_details?.name}`}
            </span>
          </li>
        </ul>
      </div>
      <div className='block'>
        <label>price</label>
        <ul>
          <li>
            <span className='label'>CA${propertyDetails?.rent}/month</span>
          </li>
        </ul>
      </div>
      <div className='block'>
        <label>Rental Period</label>
        <ul>
          <li>
            <span className='label'>
              Min - {propertyDetails?.min_rental_period} month | Max -{' '}
              {propertyDetails?.max_rental_period} month
            </span>
          </li>
        </ul>
      </div>
      <div className='block'>
        <label>Availabile From</label>
        <ul>
          <li>
            <span className='label'>{propertyDetails?.available_from}</span>
          </li>
        </ul>
      </div>
      <div className='block'>
        <label>Property Description</label>
        <ul>
          <li>
            <span className='label'>Number of Bedroom</span>
            <span> : </span>
            <span className='text'>
              {propertyDetails?.space_overview?.bedrooms}
            </span>
          </li>
          <li>
            <span className='label'>Person capacity</span>
            <span> : </span>
            <span className='text'>
              {propertyDetails?.space_overview?.peoples}
            </span>
          </li>
          <li>
            <span className='label'>Size</span>
            <span> : </span>
            <span className='text'>
              {propertyDetails?.space_overview?.size} Sq.ft.
            </span>
          </li>
          <li>
            <span className='label'>Furnished</span>
            <span> : </span>

            {propertyDetails?.space_overview?.is_furnished === 1 ? (
              <span className='text'>Yes</span>
            ) : (
              <span className='text'>No</span>
            )}
          </li>
          <li>
            <span className='label'>Description</span>
            <span> : </span>
            <span className='text'>
              {propertyDetails?.space_overview?.details}
            </span>
          </li>
        </ul>
      </div>
      <div className='block'>
        <label>Amenities</label>
        <ul>
          {propertyDetails?.amenity?.map((data, key) => (
            <li key={key}>
              <span className='label'>{data.amenities_id.name}</span>
              <span> : </span>
              <span className='text'>Yes</span>
            </li>
          ))}
        </ul>
      </div>
      <div className='block'>
        <label>Facilities</label>
        <ul>
          {propertyDetails?.facility?.map((data, key) => (
            <li key={key}>
              <span className='label'>{data.amenities_id.name}</span>
              <span> : </span>
              <span className='text'>Yes</span>
            </li>
          ))}
        </ul>
      </div>
      <div className='block'>
        <label>Rental Conditions</label>
        <ul>
          <li>
            <span className='label'>Contract Type</span>
            <span> : </span>
            <span className='text'>
              {
                contractType[
                  propertyDetails?.rules_and_preference?.contract_type
                ]?.label
              }
            </span>
          </li>
          <li>
            <span className='label'>Cancellation Policy</span>
            <span> : </span>
            <span className='text'>
              {
                policyType[
                  propertyDetails?.rules_and_preference?.cancellation_policy_id
                ]?.label
              }
            </span>
          </li>
          <li>
            <span className='label'>Utility cost</span>
            <span> : </span>

            {propertyDetails?.rental_condition?.additional_required_cost?.map(
              (data, key) => (
                <span className='text' key={key}>
                  {data}
                </span>
              )
            )}
          </li>
        </ul>
      </div>
      <div className='block'>
        <label>Preferences</label>
        <ul>
          <li>
            <span className='label'>Required Documentation</span>
            <span> : </span>
            <span className='text'>
              {
                propertyDocuments[
                  propertyDetails?.rules_and_preference?.document
                ]?.label
              }
            </span>
          </li>
        </ul>
      </div>
      <div className='block'>
        <label>Media</label>
        <ul>
          <li>
            <span className='label'>Photos</span>
            <span> : </span>
            {propertyDetails?.images?.map((data, key) => (
              <>
                {' '}
                <a className='text underline' href={data.name} target='_blank'>
                  {key}
                </a>
                &nbsp;&nbsp;
              </>
            ))}
          </li>
        </ul>
      </div>

      <div className='block'>
        <label>Account</label>
        <ul>
          <li>
            {propertyDetails?.host_details?.is_email_verified === 0 ? (
              <span className='text'>Not verified </span>
            ) : (
              <span className='text'>Verified ✓</span>
            )}
          </li>
        </ul>
      </div>

      <div className='block'>
        <label>No of current Tenants</label>
        <ul>
          <li>
            <span className='text'>{propertyDetails?.tenant_counts}</span>
          </li>
        </ul>
      </div>
      <div className='block'>
        <label>Tenant History</label>
        <ul>
          <li>
            <span
              className='text underline'
              onClick={() => router.push(`${route}?${propertyId}`)}
            >
              View
            </span>
          </li>
        </ul>
      </div>
    </PropertyDetailWrapper>
  );
};

export default PropertyDetail;
