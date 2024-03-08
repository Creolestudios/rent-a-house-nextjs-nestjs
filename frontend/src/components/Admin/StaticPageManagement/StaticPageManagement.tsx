import React from 'react';
import { ManageListingWrapper } from '../PropertyListing/PropertyListing.styles';
import StaticManagementDataTable from './StaticManagementDataTable';

const StaticPageManagement = () => {
  return (
    <>
      <ManageListingWrapper>
        <StaticManagementDataTable
          route={'/admin/static-page-management/static-page-detail'}
        />
      </ManageListingWrapper>
    </>
  );
};

export default StaticPageManagement;
