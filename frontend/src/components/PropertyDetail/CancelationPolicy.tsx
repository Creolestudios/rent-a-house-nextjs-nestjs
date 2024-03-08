import React from 'react';
import { CancelationPolicyWrapper } from './PropertyDetail.styles';
import Title from '../Title/Title';
import { fontFamily, color } from '@/styles/variable';

const CancelationPolicy = () => {
  return (
    <CancelationPolicyWrapper>
      <Title
        title='Cancellation Policy - Standard'
        marginBottom={'4px'}
        fontFamily={`${fontFamily.ptBold}`}
        color={`${color.blackColor}`}
      />
      <div className="policy-content">
            <div className="title">If you cancel this booking</div>
            <ul>
                <li>
                    <div className="label">Within 24 hours of confirmation</div>
                    <div className="seprator">–</div>
                    <div className="text refund">You’ll get full refund of first month’s rent</div>
                </li>
                <li>
                <div className="label">After 24 hours of confirmation</div>
                    <div className="seprator">–</div>
                    <div className="text no-refund">You’ll not get any refund</div>
                </li>
            </ul>
      </div>
    </CancelationPolicyWrapper>
  );
};

export default CancelationPolicy;
