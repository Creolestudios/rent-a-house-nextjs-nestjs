import styled from 'styled-components';
import { fontFamily, color } from '@/styles/variable';

export const CancellationPolicyWrapper = styled.div`
  margin-top: 5px;
  display: inline-block;
  hr {
    margin: 32px 0;
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
  .title {
    font-size: 14px;
  }
  .box {
    padding: 20px;
  }
  p {
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 18px;
    font-family: ${fontFamily.mediumFont};
    color: ${color.blackColor};
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const FlexiblePolicyWrapper = styled.div``;
export const StandardPolicyWrapper = styled.div``;
