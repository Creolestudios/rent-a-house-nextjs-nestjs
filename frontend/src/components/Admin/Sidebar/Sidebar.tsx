import React, { useState, useEffect } from 'react';
import { SidebarWrapper } from './Sidebar.styles';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/router';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import appActions from '@/redux/app/app.action';
import useWindowSize from '@/hooks/useWindowSize';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Dashboard', '1'),
  getItem('Users Roles', '2'),
  getItem('System Users', '3'),
  getItem('Property Listing', '4'),
  getItem('Reservation', '5'),
  getItem('Commission', '6'),
  getItem('Payout', '7'),
  getItem('Payment History', '8'),
  getItem('Cancellation Policy Management', '9'),
  getItem('Static Page Management', '10'),
  getItem('Site Configuration', '11'),
  getItem('Add Languages', '12'),
];

const Sidebar = ({ setCollapse, collapse }: any) => {
  const router = useRouter();
  const sidebarKey = useSelector(
    (state: any) => state.appReducer.activeSidebarKey
  );
  const windowSize = useWindowSize();
  const dispatch = useDispatch();
  const [activeKey, setActiveKey] = useState([sidebarKey ?? '1']);

  const routesArr: any = {
    ['/admin/dashboard']: '1',
    ['/admin/users-roles']: '2',
    ['/admin/system-users']: '3',
    ['/admin/property-listing']: '4',
    ['/admin/reservation']: '5',
    ['/admin/commission']: '6',
    ['/admin/payout']: '7',
    ['/admin/payment-history']: '8',
    ['/admin/cancellation-policy-management']: '9',
    ['/admin/static-page-management']: '10',
    ['/admin/site-configuration']: '11',
    ['/admin/add-languages']: '12',
  };

  useEffect(() => {
    let subString = router.pathname.split('/').slice(1);
    let subMenuPage = routesArr[`/admin/${subString[1]}`];
    subString[2]
      ? setActiveKey(subMenuPage)
      : setActiveKey([routesArr?.[router.pathname]]);
  }, [router.pathname]);

  const handleOnClick = (e: any) => {
    e.domEvent.preventDefault();

    setActiveKey([e.key]);

    dispatch(appActions.changeSidebarKey(e.key));
    router.push(
      `/admin/${e.domEvent?.target?.textContent
        .toLowerCase()
        .split(' ')
        .join('-')}`
    );
  };
  return (
    <>
      {collapse && (
        <SidebarWrapper className='sidebar'>
          <Menu
            defaultSelectedKeys={['1']}
            mode='inline'
            items={items}
            selectedKeys={activeKey}
            onClick={(e) => handleOnClick(e)}
          />
        </SidebarWrapper>
      )}
    </>
  );
};

export default Sidebar;
