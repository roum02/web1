import React, { Component } from "react";
import styled from "styled-components";

const Button_box = styled.button`
  color: white;
  font-weight: 700;
  font-size: 1rem;
  height: 2.5rem;
  border-radius: 6px;
  border: none;
  outline: none;
`;

const Button = ({ name, width, color }) => {
  return (
    <div>
      <Button_box style={{ width: width, backgroundColor: color }}>
        {name}
      </Button_box>
    </div>
  );
};

export default Button;
