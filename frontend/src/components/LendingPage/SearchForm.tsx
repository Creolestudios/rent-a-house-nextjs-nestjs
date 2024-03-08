import React, { useEffect, useState } from 'react';
import { Button, DatePickerProps, Form, Input } from 'antd';
import { SearchFormWrapper } from './LendingPage.styles';
import { DatePicker } from 'antd';
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';
import Icon from '@ant-design/icons';
import SearchIcon from '@/assets/images/icons/SearchIconSvg';
import { useDispatch, useSelector } from 'react-redux';
import actions from '@/redux/propertyListing/propertyListing.action';
import { useRouter } from 'next/router';
import moment from 'moment';
import { RootState } from '@/redux/store/rootReducer';
import { disabledDate } from '@/config/Common';

const SearchForm = () => {
  const dispatch = useDispatch();
  const searchData = useSelector(
    (state: RootState) => state.propertyListingReducer.searchData
  );
  const [predictions, setPredictions] = useState('');

  const [searchValue, setSearchValue] = useState({
    area: [],
    inDate: '',
    outDate: '',
    pageNo: 1,
    sort: 0,
    max: 5000,
    min: 0,
    size: [],
    suitable: [],
    type: [],
    bill: false,
    facility: [],
    furnished: 0,
  });
  const router = useRouter();

  const handleCheckIn: DatePickerProps['onChange'] = (date, dateString) => {
    setSearchValue({
      ...searchValue,
      inDate: moment(dateString).format('YYYY-MM-DD'),
    });
  };
  const handleCheckOut: DatePickerProps['onChange'] = (date, dateString) => {
    setSearchValue({
      ...searchValue,
      outDate: moment(dateString).format('YYYY-MM-DD'),
    });
  };

  const onFinish = (values: any) => {
    let token = window.sessionStorage.getItem('token');
    console.log({ token });

    token !== null
      ? dispatch(actions.searchAuthProperty(searchData))
      : dispatch(actions.searchProperty(searchData));

    router.push(
      `/home/property-listing?${searchValue?.area[0] ?? ''}:${
        searchValue?.inDate
      }:${searchValue?.outDate}`
    );
  };

  useEffect(() => {
    dispatch(actions.searchData(searchValue));
  }, [searchValue]);

  const handleSelect = async (value) => {
    const result = await geocodeByAddress(value);
    setPredictions(result?.[0]?.formatted_address);
    // setSearchValue({
    //   ...searchValue,
    //   area: [`${result?.[0]?.place_id}`],
    // });
    setSearchValue({
      ...searchValue,
      area: result?.[0]?.formatted_address.trim().split(','),
    });
  };

  return (
    <SearchFormWrapper>
      <Form
        name='basic'
        autoComplete='off'
        onFinish={onFinish}
        initialValues={{ area: [], inDate: '', outDate: '' }}
      >
        <Form.Item label='Where in Canada' name='area'>
          {/* Google autocomplete code  */}
          <PlacesAutocomplete
            value={predictions}
            onChange={setPredictions}
            searchOptions={{
              types: [
                '(cities)',
                // 'administrative_area_level_1',
                // 'administrative_area_level_2',
                // 'country',
              ],
              componentRestrictions: {
                country: 'CA',
              },
            }}
            onSelect={handleSelect}
            onError={(err) => console.log(err)}
          >
            {({
              getInputProps,
              getSuggestionItemProps,
              loading,
              suggestions,
            }) => (
              <div className='google-searcharea-wrapper'>
                <Input
                  {...getInputProps({
                    placeholder: 'Search city',
                    className: 'location-search-input',
                  })}
                  value={predictions}
                />
                <div className='autocomplete-dropdown-container'>
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion, ky) => {
                    const className = suggestion.active
                      ? 'suggestion-item suggestion-item--active'
                      : 'suggestion-item';
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                        })}
                        key={ky}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </Form.Item>
        <div className='date-wrap'>
          <Form.Item label='Check In date' name='inDate'>
            <DatePicker
              suffixIcon={''}
              onChange={handleCheckIn}
              disabledDate={disabledDate}
            />
          </Form.Item>

          <Form.Item label='Check out Date' name='outDate'>
            <DatePicker
              suffixIcon={''}
              onChange={handleCheckOut}
              disabledDate={disabledDate}
            />
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit'>
              <Icon component={SearchIcon} />
            </Button>
          </Form.Item>
        </div>
      </Form>
    </SearchFormWrapper>
  );
};

export default SearchForm;
