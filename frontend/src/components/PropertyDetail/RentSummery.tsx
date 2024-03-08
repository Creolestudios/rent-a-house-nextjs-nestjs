import React, { useEffect, useState } from 'react';
import { RentSummeryWrapper } from './PropertyDetail.styles';
import Icon from '@ant-design/icons';
import tickIcon from '@/assets/images/icons/TickSvg';
import { useDispatch } from 'react-redux';
import actions from '@/redux/propertyListing/propertyListing.action';

const RentSummery = ({ rent, additional, minMonth }) => {
  const [val, setVal] = useState<any>('');
  const utilities = ['Electricity', 'Water', 'Gas', 'Internet'];
  const dispatch = useDispatch();
  const dateOpenHandler = () => {
    dispatch(actions.datePopupOpen(true));
  };

  return (
    <RentSummeryWrapper>
      <ul>
        <li>
          <div className='label'>Rental Period</div>
          <div className='text' onClick={dateOpenHandler}>
            <span className='add-btn'>Add Bookings</span>
          </div>
        </li>
        <li>
          <div className='label'>Minimum Stay</div>
          <div className='text'>
            <span>{minMonth} months</span>
          </div>
        </li>
        <li>
          <div className='label'>Deposits</div>
          <div className='text'>
            <span className='rate'>CA$3125</span>
          </div>
        </li>
        <li>
          <div className='label'>Rent</div>
          <div className='text'>
            <span className='rate'>
              CA${rent}
              <span>/monthly</span>
            </span>
          </div>
        </li>
        <li>
          <div className='label'>Utilities</div>
          <ul>
            {utilities.map((data) => (
              <li>
                <div className='label'>{data}</div>
                <div className='text'>
                  {additional?.filter((e: any) => e.name === data).length >
                  0 ? (
                    <span className='rate'>
                      CA$
                      {
                        additional?.filter((e: any) => e.name === data)[0]
                          ?.amount
                      }
                      <span>/monthly (est.)</span>
                    </span>
                  ) : (
                    <span>
                      <Icon component={tickIcon} />
                      Included
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <div className='label'>Broadcasting fee</div>
          <div className='text'>
            <span className='rate'>
              CA$238<span>at move-in</span>
            </span>
          </div>
        </li>
      </ul>
    </RentSummeryWrapper>
  );
};

export default RentSummery;
