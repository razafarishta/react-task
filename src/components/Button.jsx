import * as React from "react";
import styled, { css } from "styled-components";

const Btn = ({ onClick, disabled }) => {
  const Button = styled.button`
    display: inline-block;
    color: palevioletred;
    font-size: 1.5em;
    margin-left: 3em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    display: block;
  `;
  return (
    <Button disabled={disabled} onClick={onClick} variant="contained">
      {disabled ? "Loading..." : "Fetch Todos"}
    </Button>
  );
};

export default Btn;
