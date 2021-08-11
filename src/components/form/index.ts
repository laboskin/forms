import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  width: min(450px, 90%);
  height: min(500px, 90%);
  overflow: hidden;
  
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;

  background-color: #ecf0f3;
  box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
  border-radius: 12px;
  padding: 60px 60px 40px;
  
  ::before {
    content: '';
    display: block;
    position: absolute;
    bottom: -100px;
    left: -150px;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-color: #ecf0f3;
    box-shadow: inset 8px 8px 12px #d1d9e6, inset -8px -8px 12px #f9f9f9;

    @media (max-width: 480px) {
      left: -200px;
    }
  }
  
  ::after {
    content: '';
    display: block;
    position: absolute;
    top: -100px;
    right: -100px;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background-color: #ecf0f3;
    box-shadow: inset 8px 8px 12px #d1d9e6, inset -8px -8px 12px #f9f9f9;
  }
`;