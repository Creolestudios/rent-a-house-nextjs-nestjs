import React from 'react';
import { StepIndicatorWrapper } from './PropertyListingOptionWrapper.styles';

const StepIndicator = ({listStep,totalStep}: any) => {
    return (
        <StepIndicatorWrapper>
            Step {`${listStep}/${totalStep}`}
        </StepIndicatorWrapper>
    );
};

export default StepIndicator;