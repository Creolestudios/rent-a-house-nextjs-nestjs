import React, { useEffect, useState } from 'react';
import { CreateListWrapper as FacilityAmenitiesWrapper } from './PropertyListingOptionWrapper.styles';
import { Form, Radio, RadioChangeEvent } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import actions from '@/redux/addProperty/addProperty.action';
import duplicateActions from '@/redux/duplicateListing/duplicateListing.action';
import { RootState } from '@/redux/store/rootReducer';

const FacilityAmenities = ({ title, setPayload }: any) => {
  const dispatch = useDispatch();
  const [facilitiesForm] = Form.useForm();
  const [facilities, setFacilities] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const facility = useSelector(
    (state: RootState) => state.addPropertyReducer.facilities
  );
  const amenity = useSelector(
    (state: RootState) => state.addPropertyReducer.amenities
  );
  const propertyId = useSelector(
    (state: RootState) => state.addPropertyReducer.propertyId
  );
  const stepData = useSelector(
    (state: RootState) => state.duplicateListingReducer.step4
  );
  const idx = Number(
    globalThis.sessionStorage?.getItem('duplicate_property_id')
  );
  const [editData, setEditData] = useState([]);

  const handleFacilities = (value, id) => {
    console.log("handlefacility",id)
    setFacilities((prevFacilities) =>
      prevFacilities.map((data) =>
        data.id === id ? { ...data, availability: value } : data
      )
    );
    // setEditData([
    //   ...editData,
    //   { availability: value, amenities_id: id, id: idx },
    // ]);
      setEditData([
      ...editData,
      { availability: value, amenities_id: id, id: stepData[id - 1]?.id ? stepData[id - 1].id:idx },
    ]);
  };

  const handleAmenities = (value, id) => {
    setAmenities((prevFacilities) =>
      prevFacilities.map((data) =>
        data.id === id ? { ...data, availability: value } : data
      )
    );
    // setEditData([
    //   ...editData,
    //   { availability: value, amenities_id: id, id: idx },
    // ]);
    setEditData([
      ...editData,
      { availability: value, amenities_id: id, id:stepData[id - 1]?.id ? stepData[id - 1].id:idx },
    ]);
  };

  useEffect(() => {
    dispatch(actions.getfacilites());
    setPayload && dispatch(duplicateActions.getStep4Data({ property_id: idx }));
  }, []);
  console.log("editData",editData)

  useEffect(() => {
    const step4DataModifier = (data: any) => {
      let modifiedData = [];
      data?.map((item: any) => {
        let data = {
          id: item.amenities_id.id,
          name: item.amenities_id.name,
          availability:item.availability
        };
        modifiedData.push(data);
      });
      return modifiedData;
    };
    if (idx && setPayload) {
      if (step4DataModifier(stepData).length !== 0) {
        step4DataModifier(stepData)?.map((item: any) => {
          facilitiesForm.setFieldsValue({
            [item.name]: item.availability,
          });
        });
      }
    }
    console.log("step4DataModifier",step4DataModifier)
  }, [stepData]);

  useEffect(() => {
    let object = editData;
    console.log("object",object)
    setPayload && setPayload(object);
  }, [editData]);

  useEffect(() => {
    setAmenities([...amenity]);
    setFacilities([...facility]);
  }, [facility, amenity]);

  useEffect(() => {
    let step4Data = [...facilities, ...amenities];
    const modifiedArray = step4Data.map(
      ({ id, name, __typename, ...rest }) => ({
        ...rest,
        amenities_id: id,
      })
    );
    let value = {
      data: modifiedArray,
      propertyId: propertyId,
    };
    dispatch(actions.step4Data(value));
  }, [facilities, amenities]);

  // for setting initial values of facilities and aminities
 
  console.log("stepWise",stepData)
  console.log("aminities",amenities)
  console.log("facility",facilities)

  return (
    <FacilityAmenitiesWrapper className='facility-amenities'>
      {title && <div className='title'>{title}</div>}
      <Form form={facilitiesForm}>
        <div className='left'>
          <div className='title'>Facilities</div>
          <div className='form-item-wrapper'>
            {facility &&
              facility.map((data) => (
                <Form.Item name={data?.name} label={data?.name} key={data?.id}>
                  <Radio.Group
                    onChange={(e) => handleFacilities(e.target.value, data.id)}
                    defaultValue={0}
                  >
                    <Radio value={1}>Yes</Radio>
                    <Radio value={0}>No</Radio>
                  </Radio.Group>
                </Form.Item>
              ))}
          </div>
        </div>
        <div className='right'>
          <div className='title'>Amenities</div>
          <div className='form-item-wrapper'>
            {amenities &&
              amenities.map((data) => (
                <Form.Item name={data?.name} label={data?.name} key={data?.id}>
                  <Radio.Group
                    onChange={(e) => handleAmenities(e.target.value, data.id)}
                    defaultValue={0}
                  >
                    <Radio value={1}>Yes</Radio>
                    <Radio value={0}>No</Radio>
                  </Radio.Group>
                </Form.Item>
              ))}
          </div>
        </div>
      </Form>
    </FacilityAmenitiesWrapper>
  );
};

export default FacilityAmenities;
