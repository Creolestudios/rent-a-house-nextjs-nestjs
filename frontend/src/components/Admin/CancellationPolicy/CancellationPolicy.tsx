import React from 'react';
import { CancellationPolicyWrapper } from './CancellationPolicy.styles';
import FlexiblePolicy from './FlexiblePolicy';
import StandardPolicy from './StandardPolicy';

const CancellationPolicy = () => {
  return (
    <CancellationPolicyWrapper>
      <StandardPolicy />
      <hr />
      <FlexiblePolicy />
    </CancellationPolicyWrapper>
  );
};

export default CancellationPolicy;
