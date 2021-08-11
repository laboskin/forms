import styled from "styled-components";

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  margin: 4px 0 0;
  padding-left: 25px;
  font-size: 0.8rem;
  letter-spacing: 0.15px;
  border: none;
  outline: none;
  background-color: #ecf0f3;
  transition: 0.25s ease;
  border-radius: 8px;
  box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
  :focus {
    box-shadow: inset 4px 4px 4px #d1d9e6, inset -4px -4px 4px #f9f9f9;
  }
`;

export const ErrorWrapper = styled.div`
  height: 30px;
  color: #f00;
  font-size: 0.8rem;
  padding: 5px 10px;
`;