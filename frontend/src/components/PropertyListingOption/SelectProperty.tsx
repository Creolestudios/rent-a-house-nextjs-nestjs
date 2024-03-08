import React, {useState} from 'react';
import { Input } from 'antd';
import Icon from '@ant-design/icons';
import searchIcon from '@/assets/images/icons/SearchIconSvg';
import { SelectPropertyWrapper } from './PropertyListingOptionWrapper.styles';
import ListingProperty from './ListingProperty';

const SelectProperty = () => {

    const [duplicateApartmentModalOpen, setDuplicateApartmentModalOpen] = useState(false);

  return (
    <SelectPropertyWrapper>
      <div className='header-title'>
        <div className='title'>Select Properties</div>
        <div className='search'>
          <div className='search-wrapper'>
            <Input placeholder='Keyword' />
            <span className='icon'>
              <Icon component={searchIcon} />
            </span>
          </div>
        </div>
      </div>
      <ListingProperty setDuplicateApartmentModalOpen={setDuplicateApartmentModalOpen} duplicateApartmentModalOpen={duplicateApartmentModalOpen} />
    </SelectPropertyWrapper>
  );
};

export default SelectProperty;
