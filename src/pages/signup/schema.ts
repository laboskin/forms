import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  login: Yup.string().required('Login is required').min(4, 'Login is too short'),
  password: Yup.string().required('Password is required').min(6, 'Password is too short'),
  email: Yup.string().required('Email is required').email('Please enter valid email')
})