import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ActionButton from './ActionButton';
import CreateList from './CreateList';
import FacilityAmenities from './FacilityAmenities';
import ListOption from './ListOption';
import MediaStep from './MediaStep';
import ProgressLine from './ProgressLine';
import { ListingOptionWrapper } from './PropertyListingOptionWrapper.styles';
import PublishStep from './PublishStep';
import RentalCondition from './RentalCondition';
import RulesPreferences from './RulesPreferences';
import SelectProperty from './SelectProperty';
import SpaceOverview from './SpaceOverview';
import StepIndicator from './StepIndicator';
import actions from '@/redux/addProperty/addProperty.action';
import { RootState } from '@/redux/store/rootReducer';
import { step2validateInputs } from './CreateListErrors';
import { step3validateInputs } from './SpaceOverviewErrors';

const ListingOption = () => {
  const dispatch = useDispatch();
  const [publish, setPublish] = useState<boolean>(false);
  const stepperValue = useSelector(
    (state: RootState) => state.addPropertyReducer.addPropertyStepper
  );
  const step2Data = useSelector(
    (state: RootState) => state.addPropertyReducer.step2
  );
  const step3Data = useSelector(
    (state: RootState) => state.addPropertyReducer.step3
  );
  const step4Data = useSelector(
    (state: RootState) => state.addPropertyReducer.step4
  );
  const step5Data = useSelector(
    (state: RootState) => state.addPropertyReducer.step5
  );
  const step6Data = useSelector(
    (state: RootState) => state.addPropertyReducer.step6
  );
  const step7Data = useSelector(
    (state: RootState) => state.addPropertyReducer.step7
  );
  const [error, setError] = useState({});
  let { listOptionValue, headerHeight } = useSelector(
    (state: any) => state.appReducer
  );

  const totalStep =
    listOptionValue === 1 ? 7 : listOptionValue === 2 ? 2 : null;

  const listStepContent = () => {
    switch (stepperValue) {
      case 1: {
        return <ListOption />;
      }

      case 2: {
        return (
          <CreateList
            title='Create Listing'
            error={error}
            setError={setError}
          />
        );
      }

      case 3: {
        return (
          <SpaceOverview
            title='Space Overview'
            error={error}
            setError={setError}
          />
        );
      }

      case 4: {
        return <FacilityAmenities title='Facilities & Amenities' />;
      }

      case 5: {
        return <RentalCondition title='Rental Conditions' />;
      }

      case 6: {
        return <RulesPreferences title='Rules & Preferences' />;
      }

      case 7: {
        return <MediaStep title='Media' />;
      }

      default: {
        return <ListOption />;
      }
    }
  };

  const duplicateListing = () => {
    switch (stepperValue) {
      case 1: {
        return <ListOption />;
      }

      case 2: {
        return <SelectProperty />;
      }

      default: {
        return <ListOption />;
      }
    }
  };

  const handleRightStep = () => {
    switch (stepperValue) {
      case 2: {
        const personalDetailsError = step2validateInputs(step2Data);
        const errorsLength = Object.entries(personalDetailsError).length;
        if (errorsLength === 0) {
          dispatch(actions.postStep2Details(step2Data));
        } else {
          setError(personalDetailsError);
        }
        break;
      }
      case 3: {
        const personalDetailsError = step3validateInputs(step3Data);
        const errorsLength = Object.entries(personalDetailsError).length;
        if (errorsLength === 0) {
          dispatch(actions.postStep3Details(step3Data));
        } else {
          setError(personalDetailsError);
        }
        break;
      }
      case 4: {
        dispatch(actions.postStep4Details(step4Data));
        break;
      }
      case 5: {
        if(step5Data.cancellationPolicy === undefined && step5Data.contractType === undefined){

          let obj = {...step5Data,cancellationPolicy:1,contractType:1}
          console.log("in step 5",obj)
          dispatch(actions.postStep5Details(obj));
        }
        else{
          dispatch(actions.postStep5Details(step5Data));

        }
        break;
      }
      case 6: {
        dispatch(actions.postStep6Details(step6Data));
        break;
      }
    }

    stepperValue === totalStep
      ? (dispatch(actions.stepperValue(totalStep)),
        dispatch(actions.postStep7Details(step7Data)))
      : stepperValue < 2 && dispatch(actions.stepperValue(stepperValue + 1));
  };

  const handleLeftStep = () => {
    stepperValue === 1
      ? dispatch(actions.stepperValue(1))
      : dispatch(actions.stepperValue(stepperValue - 1));
  };

  const handlePublish = () => {
    dispatch(actions.postStep7Details(step7Data));
    setPublish(true);
  };

  const handleVerify = (otp, number, id) => {
    setPublish(false);
    console.log('===========================================');

    dispatch(actions.stepperValue(1));
    let payload = {
      verifyOTPInput: {
        mobileNumber: number,
        property_id: id,
        otp: otp,
      },
    };
    dispatch(actions.submitOtp(payload));
  };

  return (
    <ListingOptionWrapper>
      {!publish && (
        <>
          <ProgressLine listStep={stepperValue} totalStep={totalStep} />
          <StepIndicator listStep={stepperValue} totalStep={totalStep} />
          {listOptionValue === 1
            ? listStepContent()
            : listOptionValue === 2
            ? duplicateListing()
            : null}
          {/* {listOptionValue === 2 && listStep === totalStep && ( */}
          <ActionButton
            listStep={stepperValue}
            totalStep={totalStep}
            listOptionValue={listOptionValue}
            handleRightStep={handleRightStep}
            handleLeftStep={handleLeftStep}
            handlePublish={handlePublish}
          />
          {/* )} */}
        </>
      )}
      {publish && <PublishStep handleVerify={handleVerify} />}
    </ListingOptionWrapper>
  );
};

export default ListingOption;
