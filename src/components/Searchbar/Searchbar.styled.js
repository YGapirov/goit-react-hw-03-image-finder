import styled from "styled-components";

import { Field, Form } from "formik";

export const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const StyledField = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
    color: gray;
  }
`;

export const StyledButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url("/src/img/magnifying_glass.png");
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: 50%;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const StyledBtnLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;
