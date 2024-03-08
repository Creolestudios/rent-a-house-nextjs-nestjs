import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// import { Title } from '../../global.styles';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 18px;
  height: 18px;
  background-color: #ce0505;
  border: 2px solid #ce0505;
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: ${(props) => (props.onClick ? "pointer" : "default")};
  &:hover {
    z-index: 2;
  }
`;
const SecondWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  background-color: #ffff;
  border: 2px solid #ffff;
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -50%);
  &:hover {
    z-index: 1;
  }
`;

const Marker = ({ text }: any) => {
  return (
    <div>
      <Wrapper
      // alt={text}
      //  onClick={onClick}
      >
        <SecondWrapper />
      </Wrapper>
    </div>
  );
};

// Marker.defaultProps = {
//   onClick: null,
// };

// Marker.propTypes = {
//   onClick: PropTypes.func,
//   text: PropTypes.string.isRequired,
// };

export default Marker;
