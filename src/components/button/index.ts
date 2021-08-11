import styled from "styled-components";

export const Button = styled.button`
  width: 200px;
  max-width: 100%;
  height: 50px;
  border-radius: 25px;
  background-color: #4B70E2;
  box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.25s;
  
  
  font-weight: 700;
  font-size: 1rem;
  color: #f9f9f9;
  
  :hover {
    box-shadow: 6px 6px 10px #d1d9e6, -6px -6px 10px #f9f9f9;
    transform: scale(0.985);
  }
  :focus {
    box-shadow: 6px 6px 10px #d1d9e6, -6px -6px 10px #f9f9f9;
    transform: scale(0.965);
  }
  
  :disabled {
    background-color: #b1b1b1;
    cursor: default;
    pointer-events: none;
  }
`;