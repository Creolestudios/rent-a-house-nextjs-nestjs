import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { OptionsWrapper } from './PropertyListingOptionWrapper.styles';
import createListingImg from '@/assets/images/create-listing.png';
import duplicateListingImg from '@/assets/images/duplicate-listing.png';
import { Radio } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const Options = ({ data, handleChange,value }: any) => {
  const { listOptionValue } = useSelector((state: any) => state.appReducer);
const router=useRouter()
  
console.log("listOptionValue",listOptionValue)
console.log('value',value)
console.log("router",router.pathname.split('/')[2])



// this is original

  // return (
  //   <OptionsWrapper className='option-wrapper'>
  //     <Radio.Group onChange={handleChange}    defaultValue={listOptionValue}>
  //       {data.map((e: any) => (
  //         <Radio key={e?.id} value={e?.id} className='option' >
  //           {e?.img && (
  //             <div className='img-wrapper'>
              
  //               <Image
  //                 src={e?.img}
  //                 width={50}
  //                 height={50}
  //                 alt='create-listing'
  //               />
  //             </div>
  //           )}
  //           <div className='content'>
  //             <h3>{e?.title}</h3>
  //             <p>{e?.subTitle}</p>
  //           </div>
  //         </Radio>
  //       ))}
  //     </Radio.Group>
  //   </OptionsWrapper>
  // );
 
if(router.pathname.split('/')[2] === 'property-edit'){
  return (
    <OptionsWrapper className='option-wrapper'>
      <Radio.Group onChange={handleChange} value={value}  >
        {data.map((e: any) => (
          <Radio key={e?.id} value={e?.id} className='option' >
            {e?.img && (
              <div className='img-wrapper'>
              
                <Image
                  src={e?.img}
                  width={50}
                  height={50}
                  alt='create-listing'
                />
              </div>
            )}
            <div className='content'>
              <h3>{e?.title}</h3>
              <p>{e?.subTitle}</p>
            </div>
          </Radio>
        ))}
      </Radio.Group>
    </OptionsWrapper>
  );
}
else{
  return (
    <OptionsWrapper className='option-wrapper'>
      <Radio.Group onChange={handleChange}    defaultValue={listOptionValue}>
        {data.map((e: any) => (
          <Radio key={e?.id} value={e?.id} className='option' >
            {e?.img && (
              <div className='img-wrapper'>
              
                <Image
                  src={e?.img}
                  width={50}
                  height={50}
                  alt='create-listing'
                />
              </div>
            )}
            <div className='content'>
              <h3>{e?.title}</h3>
              <p>{e?.subTitle}</p>
            </div>
          </Radio>
        ))}
      </Radio.Group>
    </OptionsWrapper>
  );
}

};

export default Options;
