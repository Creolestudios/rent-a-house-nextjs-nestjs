import React, { useState } from "react";
import CreateList from "../PropertyListingOption/CreateList";
import { CustomButton } from "@/globalStyles";
import SpaceOverview from "../PropertyListingOption/SpaceOverview";
import FacilityAmenities from "../PropertyListingOption/FacilityAmenities";
import RentalCondition from "../PropertyListingOption/RentalCondition";
import RulesPreferences from "../PropertyListingOption/RulesPreferences";
import MediaStep from "../PropertyListingOption/MediaStep";
import { useDispatch } from "react-redux";
import actions from "@/redux/duplicateListing/duplicateListing.action";
import addActions from "@/redux/addProperty/addProperty.action";
import { step2validateInputs } from "../PropertyListingOption/CreateListErrors";
import { step3validateInputs } from "../PropertyListingOption/SpaceOverviewErrors";

const PropertyContent = ({ id }: any) => {
  const dispatch = useDispatch();
  const idx = Number(
    globalThis.sessionStorage?.getItem("duplicate_property_id")
  );
  const [error, setError] = useState({});
    const changeToCamelCase=(data:any)=>{
      let obj:any={}
      obj.type=data.type,
      obj.propertyName=data.name,
      obj.countryId=data.country_id,
      obj.stateId=data.state_id,
      obj.cityId=data.city_id,
      obj.houseNo=data.house_no,
      obj.postal=data.postal_code,
      obj.availability=data.available_from,
      obj.rentMonth= data.rent,
      obj.min=data.min_rental_period,
      obj.max=data.max_rental_period
      return obj


    }
    const changeToCapital=(data:any)=>{
      let obj:any={}
      obj.bedroom=data.bedrooms,
      obj.details=data.details,
      obj.people=data.peoples
      return obj
    }

  const propertyItems = () => {
    switch (id) {
      case 1: {
        const [payload, setPayload] = useState({});
        const handleSave = () => {
          let data=changeToCamelCase(payload)
          console.log("payload",data)

          const personalDetailsError = step2validateInputs(data);
          const errorsLength = Object.entries(personalDetailsError).length;
          console.log("personalDetailsError",personalDetailsError)
          if (errorsLength === 0) {
            dispatch(
              actions.editStep2Details({
                updatePropertyStep2Input: { ...payload, property_id: idx },
              })
            );
          } else {
            setError(personalDetailsError);
          }

          // Object.keys(payload).length !== 0 &&
          //   dispatch(
          //     actions.editStep2Details({
          //       updatePropertyStep2Input: { ...payload, property_id: idx },
          //     })
          //   );
        };
        return (
          <div className="bordered">
            <CreateList
              title=""
              setPayload={setPayload}
              error={error}
              setError={setError}
            />
            <CustomButton className="fill" onClick={handleSave}>
              Save
            </CustomButton>
          </div>
        );
      }

      case 2: {
        const [payload, setPayload] = useState({});
        const handleSave = () => {
          console.log("firstcase2",payload)
          let data=changeToCapital(payload)
          const spaceOverviewErrors=step3validateInputs(data)
          const spaceErrorLength=Object.entries(spaceOverviewErrors).length
          if(spaceErrorLength === 0){
            dispatch(
              actions.editStep3Details({
                updatePropertyStep3Input: { ...payload, property_id: idx },
              })
            );
          }
          else{
            setError(spaceOverviewErrors)
          }
          console.log("spaceOverviewErrors",spaceOverviewErrors)

          
          
         
          // payload["id"] !== undefined &&
            // dispatch(
            //   actions.editStep3Details({
            //     updatePropertyStep3Input: { ...payload, property_id: idx },
            //   })
            // );
        };
        return (
          <div className="bordered">
            <SpaceOverview title="" error={error} setError={setError} setPayload={setPayload} />
            <CustomButton className="fill" onClick={handleSave}>
              Save 
            </CustomButton>
          </div>
        );
      }

      case 3: {
        const [payload, setPayload] = useState([]);
        const handleSave = () => {
          console.log("facilityandamenities",payload)

              dispatch(
              actions.editStep4Details({
                updatePropertyStep4Input: {
                  step4inputList: payload,
                  property_id: idx,
                },
              })
            );



          // payload["id"] !== undefined &&
          //   dispatch(
          //     actions.editStep4Details({
          //       updatePropertyStep4Input: {
          //         step4inputList: payload,
          //         property_id: idx,
          //       },
          //     })
          //   );
        };
        return (
          <div className="bordered no-border">
            <FacilityAmenities title="" setPayload={setPayload} />
            <CustomButton className="fill" onClick={handleSave}>
              Save
            </CustomButton>
          </div>
        );
      }

      case 4: {
        const [payload, setPayload] = useState({});
        const handleSave = () => {
          console.log("4hello",payload)

              dispatch(
              actions.editStep5Details({
                updatePropertyStep5Input: { ...payload, property_id: idx },
              })
            );




          // payload["id"] !== undefined &&
          //   dispatch(
          //     actions.editStep5Details({
          //       updatePropertyStep5Input: { ...payload, property_id: idx },
          //     })
          //   );
        };
        return (
          <div className="bordered">
            <RentalCondition
              title=""
              className="edit-apartment"
              setPayload={setPayload}
            />
            <CustomButton className="fill" onClick={handleSave}>
              Save
            </CustomButton>
          </div>
        );
      }

      case 5: {
        const [payload, setPayload] = useState({});
        const handleSave = () => {
          console.log("case5",payload)
           dispatch(
              actions.editStep6Details({
                updatePropertyStep6Input: { ...payload, property_id: idx },
              })
            );




          // Object.keys(payload).length !== 0 &&
            // dispatch(
            //   actions.editStep6Details({
            //     updatePropertyStep6Input: { ...payload, property_id: idx },
            //   })
            // );
        };
        return (
          <div className="bordered">
            <RulesPreferences
              title=""
              className="edit-apartment"
              setPayload={setPayload}
            />
            <CustomButton className="fill" onClick={handleSave}>
              Save
            </CustomButton>
          </div>
        );
      }

      case 6: {
        const [payload, setPayload] = useState([]);
        const [newImageVideo, setImageVideo] = useState<any>([]);
        const handleSave = () => {
          let list = [];
          newImageVideo?.image.map((item: any, index) => {
            let file = item.originFileObj;
            list.push(file);
          });
          let refinedList = list.filter((item: any) => item !== undefined);
          Object.keys(payload).length !== 0 &&
            dispatch(
              actions.editStep7Details({
                id: payload,
              })
            );
          newImageVideo?.videos === undefined
            ? (refinedList.length !== 0 || newImageVideo.url !== "") &&
              dispatch(
                addActions.postStep7Details({
                  ...newImageVideo,
                  propertyId: idx,
                  image: refinedList,
                })
              )
            : dispatch(
                addActions.postStep7Details({
                  ...newImageVideo,
                  propertyId: idx,
                  image: refinedList,
                  videos: newImageVideo.videos[0].originFileObj,
                })
              );
        };
        return (
          <div className="bordered">
            <MediaStep
              title=""
              setPayload={setPayload}
              setImageVideo={setImageVideo}
            />
            <CustomButton className="fill" onClick={handleSave}>
              Save
            </CustomButton>
          </div>
        );
      }

      default: {
        return "1";
      }
    }
  };

  return <div>{propertyItems()}</div>;
};

export default PropertyContent;
