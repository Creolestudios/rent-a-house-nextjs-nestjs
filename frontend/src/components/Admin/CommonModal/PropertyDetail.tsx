import { Avatar } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import { PropertyDetailWrapper } from './PropertyDetail.styles';

const PropertyDetail = ({
  label,
  view,
  route,
  hostLabel,
  hostName,
  user,
  proertyName,
}: any) => {
  const router = useRouter();

  return (
    <PropertyDetailWrapper>
      {user && (
        <div className='block'>
          <label>{hostLabel}</label>
          <ul>
            <li>
              <Avatar size={36}>ABS</Avatar>
              <span className='label'>{hostName}</span>
            </li>
          </ul>
        </div>
      )}
      <div className='block'>
        <label>Listing</label>
        <ul>
          <li>
            <span className='label'>New</span>
          </li>
        </ul>
      </div>
      {proertyName && (
        <div className='block'>
          <label>property name</label>
          <ul>
            <li>
              <span className='label'>{proertyName}</span>
            </li>
          </ul>
        </div>
      )}
      <div className='block'>
        <label>property type</label>
        <ul>
          <li>
            <span className='label'>Apartment</span>
          </li>
        </ul>
      </div>
      <div className='block'>
        <label>Property Address</label>
        <ul>
          <li>
            <span className='label'>
              2972 Westheimer Rd. Santa Ana, Illinois 85486
            </span>
          </li>
        </ul>
      </div>
      <div className='block'>
        <label>price</label>
        <ul>
          <li>
            <span className='label'>CA$200/month</span>
          </li>
        </ul>
      </div>
      <div className='block'>
        <label>Rental Period</label>
        <ul>
          <li>
            <span className='label'>Min - 1 month | Max - 1 year</span>
          </li>
        </ul>
      </div>
      <div className='block'>
        <label>Availability</label>
        <ul>
          <li>
            <span className='label'>5/5/2022 to 5/5/2023</span>
          </li>
        </ul>
      </div>
      <div className='block'>
        <label>Property Description</label>
        <ul>
          <li>
            <span className='label'>Number of Bedroom</span>
            <span> : </span>
            <span className='text'>2</span>
          </li>
          <li>
            <span className='label'>Person capacity</span>
            <span> : </span>
            <span className='text'>2</span>
          </li>
          <li>
            <span className='label'>Size</span>
            <span> : </span>
            <span className='text'>150m²</span>
          </li>
          <li>
            <span className='label'>Furnished</span>
            <span> : </span>
            <span className='text'>Yes</span>
          </li>
          <li>
            <span className='label'>Description</span>
            <span> : </span>
            <span className='text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </li>
        </ul>
      </div>
      <div className='block'>
        <label>Amenities</label>
        <ul>
          <li>
            <span className='label'>Balconym</span>
            <span> : </span>
            <span className='text'>Yes</span>
          </li>
          <li>
            <span className='label'>WIFI</span>
            <span> : </span>
            <span className='text'>Yes</span>
          </li>
          <li>
            <span className='label'>Garden</span>
            <span> : </span>
            <span className='text'>Yes</span>
          </li>
          <li>
            <span className='label'>Kitchen</span>
            <span> : </span>
            <span className='text'>Yes</span>
          </li>
          <li>
            <span className='label'>Balcony</span>
            <span> : </span>
            <span className='text'>Yes</span>
          </li>
        </ul>
      </div>
      <div className='block'>
        <label>Facilities</label>
        <ul>
          <li>
            <span className='label'>Balconym</span>
            <span> : </span>
            <span className='text'>Yes</span>
          </li>
          <li>
            <span className='label'>WIFI</span>
            <span> : </span>
            <span className='text'>Yes</span>
          </li>
          <li>
            <span className='label'>Garden</span>
            <span> : </span>
            <span className='text'>Yes</span>
          </li>
          <li>
            <span className='label'>Kitchen</span>
            <span> : </span>
            <span className='text'>Yes</span>
          </li>
          <li>
            <span className='label'>Balcony</span>
            <span> : </span>
            <span className='text'>Yes</span>
          </li>
        </ul>
      </div>
      <div className='block'>
        <label>Rental Conditions</label>
        <ul>
          <li>
            <span className='label'>Contract Type</span>
            <span> : </span>
            <span className='text'>Daily</span>
          </li>
          <li>
            <span className='label'>Cancellation Policy</span>
            <span> : </span>
            <span className='text'>Standard</span>
          </li>
          <li>
            <span className='label'>Utility cost</span>
            <span> : </span>
            <span className='text'>
              Gas | Included in rent | Estimated amount 50 Euros
            </span>
          </li>
        </ul>
      </div>
      <div className='block'>
        <label>Preferences</label>
        <ul>
          <li>
            <span className='label'>Required Documentation</span>
            <span> : </span>
            <span className='text'>Proof of Identity</span>
          </li>
        </ul>
      </div>
      <div className='block'>
        <label>Media</label>
        <ul>
          <li>
            <span className='label'>Photos</span>
            <span> : </span>
            <span className='text underline'>VIew</span>
          </li>
        </ul>
      </div>
      <div className='block'>
        <label>Listed Properties</label>
        <ul>
          <li>
            <span className='text'>Apartment</span>
          </li>
        </ul>
      </div>
      <div className='block'>
        <label>Account</label>
        <ul>
          <li>
            <span className='text'>Verified ✓</span>
          </li>
        </ul>
      </div>
      {view && (
        <div className='block'>
          <label>{label}</label>
          <ul>
            <li>
              <span
                className='text underline'
                onClick={() => router.push(`${route}`)}
              >
                {view}
              </span>
            </li>
          </ul>
        </div>
      )}
    </PropertyDetailWrapper>
  );
};

export default PropertyDetail;
