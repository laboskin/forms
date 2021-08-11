import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  login: Yup.string().required('Login is required'),
  password: Yup.string().required('Password is required'),
});
