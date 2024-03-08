import styled from 'styled-components';

export const AdminContentWrapper = styled.div`
  overflow: hidden;
  .content-wrapper {
    display: flex;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  height: calc(100vh - 50px);
  padding-left: ${(props: any) => {
    if (props.windowWidth < 992 && props.collapse) {
      return props.sidebarWidth + 15 + 'px';
    } else {
      return '';
    }
  }};
`;
