import React, { useEffect, useState } from 'react';
import { ListedPropertyWrapper } from './ListedProperty.styles';
import { Container, CustomButton } from '@/globalStyles';
import Link from 'next/link';
import { Input } from 'antd';
import Icon from '@ant-design/icons';
import searchIcon from '@/assets/images/icons/SearchIconSvg';
import plusIcon from '@/assets/images/icons/PlusIconSvg';
import ListedPropertyTabs from './ListedPropertyTabs';
import { Tabs } from 'antd';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import CustomPagination from '../UtilityComp/CustomPagination';
import { RootState } from '@/redux/store/rootReducer';

export interface HeaderProps {
  headerHeight;
}

// const item = [
//   {
//     id: 3,
//     label: 'All Status',
//     count: 1,
//   },
//   {
//     id: 2,
//     label: 'Published',
//     count: 1,
//   },
//   {
//     id: 1,
//     label: 'Unpublished',
//     count: 1,
//   },
//   {
//     id: 0,
//     label: 'Drafts',
//     count: 0,
//   },
// ];

const ListedProperty = () => {
  const [propertyStatus, setPropertyStatus] = useState('3');
  const [searchedKeyword, setSearchedKeyword] = useState('');
  const [pageNumber, setPageNumber] = useState(1);


  const all = useSelector(
    (state:RootState) => state.propertyListingReducer.all
  )
  const published = useSelector(
    (state:RootState) => state.propertyListingReducer.public
  )
  const unpublished =useSelector(
    (state:RootState) => state.propertyListingReducer.unpublic
  )

  const draft =useSelector(
    (state:RootState) => state.propertyListingReducer.draft
  )

  const[items,setItems]=useState<any>([
    {
      id: 3,
      label: 'All Status',
      count: all,
    },
    {
      id: 2,
      label: 'Published',
      count: published,
    },
    {
      id: 1,
      label: 'Unpublished',
      count: unpublished,
    },
    {
      id: 0,
      label: 'Drafts',
      count: draft,
    },
  ])

  const router = useRouter();

  const { windowWidth, headerHeight } = useSelector(
    (state: any) => state.appReducer
  );
  const totalPerUserProperty = useSelector(
    (state: RootState) => state.propertyListingReducer.perUserTotalProperty
  );

  
// this useEffect for numbering 
useEffect(()=>{
  setItems([
    {
      id: 3,
      label: 'All Status',
      count: all,
    },
    {
      id: 2,
      label: 'Published',
      count: published,
    },
    {
      id: 1,  
      label: 'Unpublished',
      count: unpublished,
    },
    {
      id: 0,
      label: 'Drafts',
      count: draft,
    },
  ])
},[all,published,unpublished,draft])

  useEffect(() => {
    const slider: any = document.querySelector('.ant-tabs-nav-list');
    let isDown = false;
    let startX: any;
    let scrollLeft: any;

    slider.addEventListener('mousedown', (e: any) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousewheel', (e: any) => {
      scrollY -= e.deltaY * 0.9;
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e: any) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });
  }, []);

  const obj: HeaderProps = {
    headerHeight,
  };

  return (
    <ListedPropertyWrapper {...obj} className='list-property'>
      <Container>
        <div className='header-wrapper'>
          <div className='title'>Listed Properties</div>
          <div className='right-content'>
            <Link href='/home/manage-listing'>Manage All Listings</Link>
            <CustomButton onClick={() => router.push(`/home/property-host`)}>
              <Icon component={plusIcon} />
              Add new Listing
            </CustomButton>
            <div className='search'>
              <div className='search-wrapper'>
                <Input
                  placeholder='Keyword'
                  onChange={(e) => setSearchedKeyword(e.target.value)}
                />
                <span className='icon'>
                  <Icon component={searchIcon} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <Tabs
          tabPosition={windowWidth < 768 ? 'top' : 'left'}
          onChange={(e) => setPropertyStatus(e)}
          items={items.map((e: any) => {
            return {
              label: (
                <div
                  className='tab-label-wrapper'
                  onClick={() => setPropertyStatus(e.id)}
                >
                  <div>
                    <span className='title'>{e?.label}</span>
                  </div>
                  <span className='badge'>{e?.count}</span>
                </div>
              ),
              key: e?.id,
              children: (
                <ListedPropertyTabs
                  id={e?.id}
                  title={e?.label}
                  statusId={propertyStatus}
                  searchedKeyword={searchedKeyword}
                />
              ),
            };
          })}
        />
        {totalPerUserProperty > 10 && (
          <CustomPagination
            pageSize={10}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            totalProperty={totalPerUserProperty}
          />
        )}
      </Container>
    </ListedPropertyWrapper>
  );
};

export default ListedProperty;
