import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LoginPage, ProtectedPage, SignupPage } from './pages';
import { useAuth } from './helpers';
import { PageContainer } from './components';

export const App: React.FC = () => {
  const { username } = useAuth();
  return (
    <PageContainer>
      <Switch>
        {username ? (
          <>
            <Route exact path={'/'} component={ProtectedPage} />
            <Redirect to={'/'} />
          </>
        ) : (
          <>
            <Route exact path={'/login'} component={LoginPage} />
            <Route exact path={'/signup'} component={SignupPage} />
            <Redirect to={'/login'} />
          </>
        )}
      </Switch>
    </PageContainer>
  );
};
