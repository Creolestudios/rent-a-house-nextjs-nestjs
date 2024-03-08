import React, { useState, useEffect } from 'react';
import { TabListWrapper } from './TabList.styles';
import { useDispatch, useSelector } from 'react-redux';
import actions from '@/redux/app/app.action';

const TabList = ({ tabList, className, setTabId, tabId }: any) => {
  const [list, setList] = useState(tabList);
  const dispatch = useDispatch();

  const handleClick = (id: any) => {
    setTabId(id);
    dispatch(actions.updateActiveTab(id));
  };
  useEffect(() => {
    dispatch(actions.getActiveTab());
  }, []);
  return (
    <TabListWrapper className={className}>
      <ul>
        {list.map((item: any) => (
          <li
            key={item?.id}
            className={`${tabId === item?.id ? 'fill' : ''}`}
            onClick={() => handleClick(item?.id)}
          >
            {item?.label}
          </li>
        ))}
      </ul>
    </TabListWrapper>
  );
};

export default TabList;
