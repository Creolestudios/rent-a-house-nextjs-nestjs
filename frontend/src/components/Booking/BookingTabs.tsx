import React from 'react';
import AllBooking from './AllBooking';

const BookingTabs = ({ id, title }: any) => {
  const data = [
    {
      id: 1,
      name: 'Jordan Austin',
      property: 'Am Apartment',
      city: 'Vancouver',
      date: '7-2-2023 to 31-5-2023',
      price: 60,
      status: 'Send Message',
      call: '+91 12345678',
      mail: 'jordan@mail.com',
    },
    {
      id: 2,
      name: 'Jordan Austin',
      property: 'Am Apartment',
      city: 'Vancouver',
      date: '10-3-2023 to 28-6-2023',
      price: 40,
      status: 'Send Message',
      call: '+91 12345678',
      mail: 'jordan@mail.com',
    },
  ];

  const propertyList = () => {
    switch (id) {
      case 1: {
        return <AllBooking data={data} />;
      }

      case 2: {
        return '2';
      }

      case 3: {
        return '3';
      }

      default: {
        return '1';
      }
    }
  };

  return (
    <div>
      <div className='title-wrapper'>
        <div className='title'>{
          title === 'Current'
            ? 'All Booking'
            : title === 'Upcoming'
            ? 'All Upcoming'
            : title === 'Past'
            ? 'All Past'
            : title
        }</div>
        <div className='sub-title'>2 {title} tenants</div>
      </div>
      {propertyList()}
    </div>
  );
};

export default BookingTabs;
