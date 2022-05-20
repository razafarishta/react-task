import * as React from "react";
import styled, { css } from "styled-components";

const Btn = ({ onClick, disabled }) => {
  const Button = styled.button`
    font-size: 20px;
    color: rgb(0 127 255) !important;
    padding: 0.25em 1em;
    display: block;
    margin: auto;
    background-color: white;
    border: 2px solid rgb(0 127 255);
  `;
  return (
    <Button disabled={disabled} onClick={onClick} variant="contained">
      {disabled ? "Loading..." : "Fetch Todos"}
    </Button>
  );
};

export default Btn;
