import React from 'react';
import { Field, Formik } from 'formik';
import { Api, useAuth } from '../../helpers';
import { Form, Input, Link, PageTitle } from '../../components';
import { validationSchema } from './schema';
import { FormContent, StyledButton } from './styled';

export const LoginPage: React.FC = () => {
  const { login } = useAuth();
  return (
    <Formik
      validateOnChange
      initialValues={{ login: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        try {
          await Api.post('/login', values);
          login(values.login);
        } catch (error) {
          alert('Failed to login with your credentials');
        }
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <PageTitle>Welcome Back!</PageTitle>
          <FormContent>
            <Field
              name="login"
              type="text"
              component={Input}
              placeholder={'Login'}
              disabled={isSubmitting}
              data-testid={'login'}
            />
            <Field
              name="password"
              type="password"
              component={Input}
              error={null}
              placeholder={'Password'}
              disabled={isSubmitting}
              data-testid={'password'}
            />
          </FormContent>
          <StyledButton type="submit" disabled={isSubmitting} data-testid={'submit'}>
            Log in
          </StyledButton>
          <Link to={'/signup'}>Don't have an account?</Link>
        </Form>
      )}
    </Formik>
  );
};
