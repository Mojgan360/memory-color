import React from "react";
import { Container } from "../styles/button";

const Button = ({ title, handleClick }) => {
  return (
    <Container onClick={handleClick}>
      <h3>{title}</h3>
    </Container>
  );
};

export default Button;
