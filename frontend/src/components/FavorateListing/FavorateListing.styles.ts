import styled from 'styled-components';
import { fontFamily, color } from '@/styles/variable';

export const FavorateListingWrapper = styled.div`
  .container {
    padding-top: 24px;
  }
  .header-wrapper {
    margin-bottom: 24px;
    .title {
      font-size: 20px;
      line-height: 25px;
      font-family: ${fontFamily.ptBold};
      text-transform: capitalize;
      color: ${color.blackColor};
      display: flex;
      align-items: center;
      .badge {
        margin-left: 10px;
        min-width: 24px;
        min-height: 24px;
        padding: 4px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid ${color.secondaryColor};
        font-size: 12px;
        line-height: 1;
        color: ${color.secondaryColor};
      }
    }
  }
`;

export const FavorateListWrapper = styled.div``;
