import React, { useEffect, useState } from 'react';
import { StepperWrapper } from './InquiryRequest.styles';
import { Steps } from 'antd';
import MessageSentStep from './MessageSentStep';
import SentBookingStep from './SentBookingStep';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store/rootReducer';
import appActions from '@/redux/app/app.action';
import Icon from '@ant-design/icons';
import sendIcon from '@/assets/images/icons/SendSvg';
import chatIcon from '@/assets/images/icons/ChatSvg';
import clockIcon from '@/assets/images/icons/ClockSvg';
import bookmarkIcon from '@/assets/images/icons/BookmarkSvg';
import { AnyARecord } from 'dns';

const Stepper = ({ setRequiredDetails, requiredDetails }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [currentStepLandlord, setCurrentStepLandlord] = useState<number>(0);
  const [landlord, setLandlord] = useState<any>(false);

  const dispatch = useDispatch();

  const { inquiryStep, cancelBook } = useSelector(
    (state: RootState) => state.appReducer
  );

  const changeTab = (current: number) => {
    setCurrentStep(current);
    setCurrentStepLandlord(current);
    // to change stepper
    dispatch(appActions.inquiryStepper(current));
    window.sessionStorage.setItem('stepper', current.toString());
  };

  useEffect(() => {
    let stepperValue = parseInt(window.sessionStorage.getItem('stepper'));
    dispatch(appActions.inquiryStepper(stepperValue));
    setCurrentStep(inquiryStep);
  }, [inquiryStep]);

  useEffect(() => {
    if (Number(sessionStorage.getItem('landlord')) === 1) {
      setLandlord(true);
    }
  }, []);

  const steps: any = [
    {
      title: (
        <span>
          Message
          <br />
          Sent
        </span>
      ),
      content: (
        <MessageSentStep
          setRequiredDetails={setRequiredDetails}
          requiredDetails={requiredDetails}
        />
      ),
      icon: <Icon component={chatIcon} />,
    },
    {
      title: (
        <span>
          Send booking
          <br />
          requests
        </span>
      ),
      content: <SentBookingStep landlord={landlord} />,
      icon: <Icon component={sendIcon} />,
    },
    {
      title: (
        <span>
          Wait for
          <br />
          confirmation
        </span>
      ),
      content: <SentBookingStep landlord={landlord} />,
      icon: <Icon component={clockIcon} />,
    },
    {
      title: (
        <span>
          Booking
          <br />
          confirmation
        </span>
      ),
      content: <SentBookingStep landlord={landlord} />,
      icon: <Icon component={bookmarkIcon} />,
    },
  ];

  const stepsLandlord: any = [
    {
      title: (
        <span>
          Received
          <br />
          Message
        </span>
      ),
      content: (
        <MessageSentStep
          setRequiredDetails={setRequiredDetails}
          requiredDetails={requiredDetails}
        />
      ),
      icon: <Icon component={chatIcon} />,
    },
    {
      title: (
        <span>
          Send invitation
          <br />
          to book
        </span>
      ),
      content: <SentBookingStep landlord={landlord} />,
      icon: <Icon component={sendIcon} />,
    },
    {
      title: (
        <span>
          Wait for
          <br />
          confirmation
        </span>
      ),
      content: <SentBookingStep landlord={landlord} />,
      icon: <Icon component={clockIcon} />,
    },
    {
      title: (
        <span>
          Booking
          <br />
          confirmation
        </span>
      ),
      content: <SentBookingStep landlord={landlord} />,
      icon: <Icon component={bookmarkIcon} />,
    },
  ];

  return (
    <StepperWrapper>
      {!landlord && !cancelBook && (
        <Steps
          current={currentStep}
          items={steps.map((item: any) => {
            return { key: item.title, title: item.title, icon: item.icon };
          })}
          onChange={(current) => {
            currentStep > current && changeTab(current);
          }}
        />
      )}
      {landlord && (
        <Steps
          current={currentStepLandlord}
          items={stepsLandlord.map((item: any) => {
            return { key: item.title, title: item.title, icon: item.icon };
          })}
          onChange={(current) => {
            currentStepLandlord > current && changeTab(current);
          }}
        />
      )}
      <div className='steps-content'>{steps[currentStep]?.content}</div>
    </StepperWrapper>
  );
};

export default Stepper;
