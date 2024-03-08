import React, { useState } from 'react';
import { Breadcrumb } from 'antd';
import HeadTitle from '@/components/Admin/HeadTitle/HeadTitle';
import AdminContent from '@/components/Admin/AdminContent/AdminContent';
import ContentHeader from '@/components/Admin/ContentHeader/ContentHeader';
// import ManageUsers from '@/components/Admin/ManageUsers/ManageUsers';
import Icon from '@ant-design/icons';
import { Button } from 'antd';
import PlusIconSvg from '@/assets/images/icons/PlusIconSvg';
import SystemUsers from '@/components/Admin/SystemUsers/SystemUsers';
import Authguard from '@/services/Authguard/Authgaurd';
import { useRouter } from 'next/router';
import AddLanguageModal from '@/components/Admin/AddLanguage/AddLanguageModal';
import AddLanguageTable from '@/components/Admin/AddLanguage/AddLanguageTable';

const index = () => {
  const router = useRouter();
  const [collapse, setCollapse] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
      <Authguard secure={true} role={'2'}>
        <HeadTitle title='Add Languages' />
        <AdminContent collapse={collapse} setCollapse={setCollapse}>
          <ContentHeader setCollapse={setCollapse} collapse={collapse}>
            <Breadcrumb items={[{title:'Add Languages'}]}/>
            <div className='btn-wrapper'>
              <Button onClick={() => {router.push(`/admin/add-languages`); setIsModalOpen(true);}}>
                <Icon component={PlusIconSvg} />
                Add New Language
              </Button>
            </div>
          </ContentHeader>
          <AddLanguageTable />
        </AdminContent>
      </Authguard>
      <AddLanguageModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default index;
