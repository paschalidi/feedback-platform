import React from "react";
import Rater from "react-rater";
import styled from "styled-components";
import PropTypes from "prop-types";
import Colors from "../Colors";

const Box = styled.div`
  width: 85px;
  height: 85px;
  border: 2px solid #ffffff;
  background: ${({ isActive, willBeActive }) => {
    if (isActive) {
      return Colors.active;
    }

    if (willBeActive) {
      return Colors.primary;
    }

    return Colors.background;
  }};
`;

const Scale = ({ onAnswer }) => (
  <Rater total={10} onRate={({ rating }) => onAnswer({ scale: rating })}>
    <Box />
  </Rater>
);

Scale.propTypes = {
  onAnswer: PropTypes.func.isRequired
};

export default Scale;