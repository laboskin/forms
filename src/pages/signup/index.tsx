import React from 'react';
import { Field, Formik } from 'formik';
import { Api, useAuth } from '../../helpers';
import { validationSchema } from './schema';
import { Form, Input, Link, PageTitle } from '../../components';
import { FormContent, StyledButton } from './styled';

export const SignupPage: React.FC = () => {
  const { login } = useAuth();

  return (
    <Formik
      validateOnChange
      initialValues={{ login: '', password: '', email: '' }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        try {
          await Api.post('/register', values);
          login(values.login);
        } catch (error) {
          alert('Failed to sign up');
        }
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <PageTitle>Create Account</PageTitle>
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
              name="email"
              type="email"
              component={Input}
              error={null}
              placeholder={'Email'}
              disabled={isSubmitting}
              data-testid={'email'}
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
            Sign up
          </StyledButton>
          <Link to={'/login'}>Already have an account?</Link>
        </Form>
      )}
    </Formik>
  );
};
