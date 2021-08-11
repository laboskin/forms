import React from 'react';
import { useAuth } from '../../helpers';
import { Button, PageTitle } from '../../components';
import {Container} from "./styled";

export const ProtectedPage: React.FC = () => {
  const { username, logout } = useAuth();
  return (
    <Container>
      <PageTitle>Hello, {username}</PageTitle>
      <Button onClick={() => logout()}>Log out</Button>
    </Container>
  );
};
