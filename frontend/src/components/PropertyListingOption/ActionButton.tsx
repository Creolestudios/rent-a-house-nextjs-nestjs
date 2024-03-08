import React from 'react';
import { ActionButtonWrapper } from './PropertyListingOptionWrapper.styles';
import { Container, CustomButton } from '@/globalStyles';

const ActionButton = ({
  handleRightStep,
  handleLeftStep,
  listStep,
  totalStep,
  handlePublish,
  listOptionValue,
}: any) => {
  const PrevButton = () => {
    return (
      <CustomButton onClick={() => handleLeftStep()}>PREVIOUS</CustomButton>
    );
  };

  const NextButton = () => {
    return (
      <>
        <CustomButton className='fill' onClick={() => handleRightStep()}>
          Next
        </CustomButton>
      </>
    );
  };

  const PublishButton = () => {
    return (
      <>
        <CustomButton className='fill' onClick={() => handlePublish()}>
          PUBLISH
        </CustomButton>
      </>
    );
  };

  return (
    <>
      {!(listOptionValue === 2 && listStep === totalStep) && (
        <ActionButtonWrapper>
          <Container className='container'>
            <div className='btn-wrapper'>
              {listStep === 1 ? (
                <NextButton />
              ) : listOptionValue === 1 && listStep === totalStep ? (
                <>
                  <PrevButton />
                  <PublishButton />
                </>
              ) : listOptionValue === 2 && listStep === totalStep ? null : (
                <>
                  <PrevButton /> <NextButton />
                </>
              )}
            </div>
          </Container>
        </ActionButtonWrapper>
      )}
    </>
  );
};

export default ActionButton;
