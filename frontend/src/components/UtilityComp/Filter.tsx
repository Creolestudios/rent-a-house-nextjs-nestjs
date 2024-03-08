import React, { useEffect, useState } from 'react';
import { FilterWrapper } from './UtilityComp.styles';
import { Input, Select, Checkbox, Slider, DatePicker } from 'antd';
import Icon from '@ant-design/icons';
import searchIcon from '@/assets/images/icons/SearchIconSvg';
import crossIcon from '@/assets/images/icons/crossSvg';
import downArrow from '@/assets/images/icons/DownArrowSvg';
import calenderIcon from '@/assets/images/icons/CalenderSvg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store/rootReducer';
import actions from '@/redux/propertyListing/propertyListing.action';
import { disabledDate } from '@/config/Common';
import { appConstant } from '@/config/constants';
import PlacesAutocomplete, {
  geocodeByAddress,
} from 'react-places-autocomplete';

const Filter = ({
  mobFilterActive,
  setMobFilterActive,
  setSearchValue,
  searchValue,
}: any) => {
  const dispatch = useDispatch();
  const searchData = useSelector(
    (state: RootState) => state.propertyListingReducer.searchData
  );
  const filterData = useSelector(
    (state: RootState) => state.propertyListingReducer.filterData
  );
  const [predictions, setPredictions] = useState('');

  const [price, setPrice] = useState({
    min: 0,
    max: 5000,
  });
  const [slider, setSlider] = useState({
    start: 0,
    end: 100,
  });

  const [id, setId] = useState(null);

  // for UI
  const handleClick = (id: any) => {
    setId(id);
  };

  const handleMinMax = (value) => {
    setSlider({
      start: value[0],
      end: value[1],
    });
    setSearchValue({
      ...searchValue,
      min: price.min + (value[0] * (price.max - price.min)) / 100,
      max: price.min + (value[1] * (price.max - price.min)) / 100,
    });
  };

  const handleType = (value, name) => {
    value === true
      ? setSearchValue((prevSearchValue) => ({
          ...prevSearchValue,
          type: [...prevSearchValue.type, name],
        }))
      : setSearchValue((prevSearchValue) => ({
          ...prevSearchValue,
          type: prevSearchValue.type.filter((typeName) => typeName !== name),
        }));
  };

  const handleSize = (value, name) => {
    if (value === true) {
      setSearchValue((prevSearchValue) => ({
        ...prevSearchValue,
        size: [...prevSearchValue.size, parseInt(name)],
      }));
    } else {
      setSearchValue((prevSearchValue) => ({
        ...prevSearchValue,
        size: prevSearchValue.size.filter(
          (sizeName) => sizeName !== parseInt(name)
        ),
      }));
    }
  };

  const handleFurniture = (value, name) => {
    switch (name) {
      case 'Furnished':
        return setSearchValue({ ...searchValue, furnished: 1 });

      case 'Unfurnished':
        return setSearchValue({ ...searchValue, furnished: 2 });
    }
  };

  const handleFacility = (value, name) => {
    setSearchValue((prevSearchValue) => ({
      ...prevSearchValue,
      facility: value
        ? [...prevSearchValue.facility, name]
        : prevSearchValue.facility.filter(
            (facilityName) => facilityName !== name
          ),
    }));
  };

  const handleSuitable = (value, name) => {
    setSearchValue((prevSearchValue) => ({
      ...prevSearchValue,
      suitable: value
        ? [...prevSearchValue.suitable, name]
        : prevSearchValue.facility.filter(
            (suitableName) => suitableName !== name
          ),
    }));
  };

  const handleSelect = async (value) => {
    const result = await geocodeByAddress(value);
    setPredictions(result?.[0]?.formatted_address);

    setSearchValue({
      ...searchValue,
      area: result?.[0]?.formatted_address.trim().split(','),
    });

    // setSearchValue({
    //   ...searchValue,
    //   area: [`${result?.[0]?.place_id}`],
    // });
  };

  useEffect(() => {
    let token = window.sessionStorage.getItem('token');

    token !== null
      ? dispatch(actions.searchAuthProperty(searchValue))
      : searchData && dispatch(actions.searchProperty(searchValue));

    dispatch(actions.searchData(searchValue));
  }, [searchValue]);

  return (
    <FilterWrapper className='filter-wrap'>
      <div className='title'>
        Filters
        {mobFilterActive && (
          <span className='icon' onClick={() => setMobFilterActive(false)}>
            <Icon component={crossIcon} />
          </span>
        )}
      </div>
      <div className='block'>
        <div className='icon-wrap'>
          <div className='title'>Location</div>
        </div>
        <div className='block-content'>
          <div className='block-item'>
            {/* <Input
              prefix={<Icon component={searchIcon} />}
              placeholder='Search '
              // value={searchValue?.area}
              onChange={(e) =>
                setSearchValue({ ...searchValue, area: [e.target.value] })
              }
            /> */}

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
                      placeholder: 'Search area',
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
                      // inline style for demonstration purpose
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
          </div>
          {/* <div className='block-item'>
            <Select
              defaultValue='distance'
              style={{ width: '100%' }}
              options={[
                { value: 'distance', label: 'Distance From the Center' },
                { value: 'distance1', label: 'Distance From the Center1' },
              ]}
              suffixIcon={<Icon component={downArrow} />}
            />
          </div> */}
        </div>
      </div>
      <div className='block'>
        <div className='icon-wrap'>
          <div className='title'>Price</div>
        </div>
        <div className='block-content'>
          <div className='block-item'>
            <span className='priceIndicator'>{appConstant.minMaxRequired}</span>

            <Slider
              range={{ draggableTrack: true }}
              value={[slider.start, slider.end]}
              tooltip={{ open: false }}
              onChange={handleMinMax}
            />
          </div>
          <div className='block-item w-50'>
            <Input
              placeholder='Minimum CA$'
              value={searchValue.min}
              onChange={(e) => (
                setPrice({
                  ...price,
                  min: parseFloat(e.target.value),
                }),
                setSlider({
                  start: 0,
                  end: 100,
                }),
                setSearchValue({
                  ...searchValue,
                  min: parseFloat(e.target.value),
                })
              )}
              type='number'
            />
          </div>
          <div className='block-item w-50 remove-mr'>
            <Input
              placeholder='Maximum CA$'
              value={searchValue.max}
              onChange={(e) => (
                setPrice({
                  ...price,
                  max: parseFloat(e.target.value),
                }),
                setSlider({
                  start: 0,
                  end: 100,
                }),
                setSearchValue({
                  ...searchValue,
                  max: parseFloat(e.target.value),
                })
              )}
              type='number'
            />
          </div>
          <div className='block-item'>
            <Checkbox
              value={searchValue?.bill}
              onChange={(e) =>
                setSearchValue({
                  ...searchValue,
                  bill: e.target.checked,
                })
              }
            >
              Bills Included
            </Checkbox>
          </div>
        </div>
      </div>
      <div className={`block filter-content ${id === 1 ? 'active' : ''}`}>
        <div className='icon-wrap' onClick={() => handleClick(1)}>
          <div className='title'>Date</div>
          <div className='icon'>
            <Icon component={downArrow} />
          </div>
        </div>
        <div className='block-content'>
          <div className='block-item'>
            <div className='date-wrapper'>
              <div className='placeholder-text'>Move in date</div>
              <div className='icon'>
                <Icon component={calenderIcon} />
              </div>
              <DatePicker
                placeholder='Start date'
                suffixIcon={''}
                disabledDate={disabledDate}
                onChange={(date, dateString) =>
                  setSearchValue({
                    ...searchValue,
                    inDate: dateString,
                  })
                }
              />
            </div>
          </div>
          <div className='block-item'>
            <div className='date-wrapper'>
              <div className='placeholder-text'>Move out date</div>
              <div className='icon'>
                <Icon component={calenderIcon} />
              </div>
              <DatePicker
                placeholder='End date'
                suffixIcon={''}
                disabledDate={disabledDate}
                onChange={(date, dateString) =>
                  setSearchValue({
                    ...searchValue,
                    outDate: dateString,
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`block filter-content ${id === 2 ? 'active' : ''}`}>
        <div className='icon-wrap' onClick={() => handleClick(2)}>
          <div className='title'>Type</div>
          <div className='icon'>
            <Icon component={downArrow} />
          </div>
        </div>
        <div className='block-content'>
          <div className='block-item'>
            {filterData?.type?.map((data) => (
              <div className='checkbox-wrapper'>
                <Checkbox
                  onChange={(e) => handleType(e.target.checked, data?.name)}
                >
                  {data.name}
                </Checkbox>
                <div className='badge'>{data.total}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`block filter-content ${id === 3 ? 'active' : ''}`}>
        <div className='icon-wrap' onClick={() => handleClick(3)}>
          <div className='title'>Size</div>
          <div className='icon'>
            <Icon component={downArrow} />
          </div>
        </div>
        <div className='block-content'>
          <div className='block-item'>
            {filterData?.size?.map((data) => (
              <div className='checkbox-wrapper'>
                <Checkbox
                  onChange={(e) => handleSize(e.target.checked, data?.name)}
                >
                  {data.name} Sq. Ft.
                </Checkbox>
                <div className='badge'>{data.total}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`block filter-content ${id === 4 ? 'active' : ''}`}>
        <div className='icon-wrap' onClick={() => handleClick(4)}>
          <div className='title'>Furniture</div>
          <div className='icon'>
            <Icon component={downArrow} />
          </div>
        </div>
        <div className='block-content'>
          <div className='block-item'>
            {filterData?.furniture?.map((data) => (
              <div className='checkbox-wrapper'>
                <Checkbox
                  onChange={(e) =>
                    handleFurniture(e.target.checked, data?.name)
                  }
                >
                  {data.name}
                </Checkbox>
                <div className='badge'>{data.total}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`block filter-content ${id === 5 ? 'active' : ''}`}>
        <div className='icon-wrap' onClick={() => handleClick(5)}>
          <div className='title'>Facilities</div>
          <div className='icon'>
            <Icon component={downArrow} />
          </div>
        </div>
        <div className='block-content'>
          <div className='block-item'>
            {filterData?.facilities?.map((data) => (
              <div className='checkbox-wrapper'>
                <Checkbox
                  onChange={(e) => handleFacility(e.target.checked, data?.name)}
                >
                  {data.name}
                </Checkbox>
                <div className='badge'>{data.total}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`block filter-content ${id === 6 ? 'active' : ''}`}>
        <div className='icon-wrap' onClick={() => handleClick(6)}>
          <div className='title'>Amenities</div>
          <div className='icon'>
            <Icon component={downArrow} />
          </div>
        </div>
        <div className='block-content'>
          <div className='block-item'>
            {filterData?.amenities?.map((data) => (
              <div className='checkbox-wrapper'>
                <Checkbox
                  onChange={(e) => handleFacility(e.target.checked, data?.name)}
                >
                  {data.name}
                </Checkbox>
                <div className='badge'>{data.total}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`block filter-content ${id === 7 ? 'active' : ''}`}>
        <div className='icon-wrap' onClick={() => handleClick(7)}>
          <div className='title'>Suitable For</div>
          <div className='icon'>
            <Icon component={downArrow} />
          </div>
        </div>
        <div className='block-content'>
          <div className='block-item'>
            {filterData?.suitable_for?.map((data) => (
              <div className='checkbox-wrapper'>
                <Checkbox
                  onChange={(e) => handleSuitable(e.target.checked, data?.name)}
                >
                  {data.name}
                </Checkbox>
                <div className='badge'>{data.total}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FilterWrapper>
  );
};

export default Filter;
