import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { ListWrapper } from './Footer.styles';
import { useRouter } from 'next/router';

const List = ({ title, menuItem }: any) => {
  const router = useRouter();
  const [homeIncluded, setHomeIncluded] = useState(false);
  useEffect(() => {
    console.log(router.asPath.split('/')?.[2]);
  });
  return (
    <ListWrapper>
      <div className='title'>{title}</div>
      <ul>
        {menuItem.map((item: any) => (
          <li key={item.id}>
            {router.asPath.split('/')?.[2] === undefined ? (
              <div onClick={() => router.push(`home/${item.route}`)}>
                {item?.label}
              </div>
            ) : (
              <div onClick={() => router.push(`${item.route}`)}>
                {item?.label}
              </div>
            )}
          </li>
        ))}
      </ul>
    </ListWrapper>
  );
};

export default List;
