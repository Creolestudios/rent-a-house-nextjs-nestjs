import React from 'react';
import { FlexiblePolicyWrapper } from './CancellationPolicy.styles';
import Title from '../Title/Title';
import { color, fontFamily } from '@/styles/variable';
import { Box } from '@/globalStyles';

const FlexiblePolicy = () => {
  return (
    <FlexiblePolicyWrapper>
      <Title
        className='title'
        title='Flexible'
        marginBottom={'8px'}
        color={`${color.secondaryColor}`}
        fontFamily={`${fontFamily.demiBold}`}
        lineHeight={'18px'}
      />
      <Box className='box'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu
          ex, malesuada ut porttitor nec, ullamcorper eu arcu. Curabitur eros
          dolor, elementum eu nisl eget, interdum mattis lorem. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nulla arcu ex, malesuada
          ut porttitor nec, ullamcorper eu arcu.
        </p>
        <p>
          Curabitur eros dolor, elementum eu nisl eget, interdum mattis lorem.
        </p>
      </Box>
    </FlexiblePolicyWrapper>
  );
};

export default FlexiblePolicy;
