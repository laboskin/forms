import styled from "styled-components";
import { Button } from '../../components';

export const FormContent = styled.div`
  flex: 1 0 auto;
  width: 100%;
  
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  justify-content: center;
`;

export const StyledButton = styled(Button)`
  margin-bottom: 20px;
`;