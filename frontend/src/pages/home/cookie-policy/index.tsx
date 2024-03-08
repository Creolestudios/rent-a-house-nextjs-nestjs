import React from 'react'
import MainComp from '@/components/MainComp/MainComp';
import CookiePolicy from '@/components/CookiePolicy/CookiePolicy';


function index() {
  return (
    <MainComp>
        <CookiePolicy/>
    </MainComp>
  )
}

export default index