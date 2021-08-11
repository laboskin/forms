import styled from "styled-components";
import {Link as RouterLink} from 'react-router-dom';

export const Link = styled(RouterLink)`
  font-size: 0.8rem;
  color: #4B70E2;
  text-decoration: none;
  
  :hover {
    text-decoration: underline;
  }
`;