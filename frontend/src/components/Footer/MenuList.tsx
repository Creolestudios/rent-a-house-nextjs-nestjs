import React from 'react';
import { MenuListWrapper } from './Footer.styles';
import List from './List';

const housingMenuList = [
  {
    id: 1,
    label: 'About',
    route: 'about-us',
  },
  // {
  //   id: 2,
  //   label: 'Accommodation',
  //   route: 'accommodation',
  // },
  {
    id: 3,
    label: 'Pricing',
    route: 'pricing',
  },
];

const policyMenuList = [
  {
    id: 1,
    label: 'Terms & Conditions',
    route: 'terms&conditions',
  },
  {
    id: 2,
    label: 'Privacy Policy',
    route: 'privacy-policy',
  },
  {
    id: 3,
    label: 'Cookie Policy',
    route: 'cookie-policy',
  },
];

const supportMenuList = [
  {
    id: 1,
    label: 'FAQs',
    route: 'faq',
  },
  {
    id: 2,
    label: 'Contact Us',
    route: 'contact-us',
  },
];

const MenuList = () => {
  return (
    <MenuListWrapper>
      <List title='RentSmartly' menuItem={housingMenuList} />
      <List title='Policies' menuItem={policyMenuList} />
      <List title='Support' menuItem={supportMenuList} />
    </MenuListWrapper>
  );
};

export default MenuList;
