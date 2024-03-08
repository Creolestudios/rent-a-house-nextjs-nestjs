import { Container, CustomButton } from '@/globalStyles';
import React from 'react';
import { FooterBtnInfoWrapper } from './InquiryRequest.styles';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store/rootReducer';
import actions from '@/redux/inquiryRequest/inquiryRequest.action';
import Icon from '@ant-design/icons';
import backBtn from '@/assets/images/icons/DownArrowSvg';

const FooterBtnInfo = ({
  documentPage,
  handleDocument,
  setDocumentPage,
  requiredDetails,
  setRequiredDetails,
}: any) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const rent = useSelector(
    (state: RootState) => state.inquiryRequestReducer.propertyInfo.rent
  );

  const { windowWidth } = useSelector((state: RootState) => state.appReducer);

  const submitDetails = () => {
    dispatch(actions.sendDetails(requiredDetails));
  };

  return (
    <FooterBtnInfoWrapper>
      <Container className='container'>
        <div className='content'>
          <div className='left'>
            <div className='rate'>
              <div>
                <strong>CA${rent}</strong>/ month
              </div>
              <span>Bills Included</span>
            </div>
          </div>
          <div className='right'>
            {documentPage === false ? (
              <div className='btn-wrapper'>
                <CustomButton
                  onClick={(e) => (
                    handleDocument(e), router.push('/home/property-listing?::')
                  )}
                >
                  Cancel
                </CustomButton>
                <CustomButton
                  className='fill next'
                  onClick={(e) => handleDocument(e)}
                >
                  {windowWidth < 600 ? <Icon component={backBtn} /> : 'Next'}
                </CustomButton>
              </div>
            ) : (
              <div className='btn-wrapper'>
                <CustomButton
                  className='back'
                  onClick={(e) => (handleDocument(e), setDocumentPage(false))}
                >
                  {windowWidth < 600 ? <Icon component={backBtn} /> : 'Back'}
                </CustomButton>
                <CustomButton
                  className='fill'
                  onClick={(e) => (handleDocument(e), submitDetails())}
                >
                  Save and Continue
                </CustomButton>
              </div>
            )}
          </div>
        </div>
      </Container>
    </FooterBtnInfoWrapper>
  );
};

export default FooterBtnInfo;
