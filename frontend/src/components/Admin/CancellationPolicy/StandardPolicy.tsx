import React from 'react';
import Title from '../Title/Title';
import { StandardPolicyWrapper } from './CancellationPolicy.styles';
import { color, fontFamily } from '@/styles/variable';
import { Box } from '@/globalStyles';

const StandardPolicy = () => {
  return (
    <StandardPolicyWrapper>
      <Title
        className='title'
        title='Standard'
        marginBottom={'8px'}
        color={`${color.secondaryColor}`}
        fontFamily={`${fontFamily.demiBold}`}
        lineHeight={'18px'}
      />
      <Box className='box'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu ex, malesuada ut porttitor nec, ullamcorper eu arcu. Curabitur eros dolor, elementum eu nisl eget, interdum mattis lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu ex, malesuada ut porttitor nec, ullamcorper eu arcu.</p>
        <p>Curabitur eros dolor, elementum eu nisl eget, interdum mattis lorem.</p>
      </Box>
    </StandardPolicyWrapper>
  );
};

export default StandardPolicy;
