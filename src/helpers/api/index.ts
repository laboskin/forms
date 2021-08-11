import axios from 'axios';

export const Api = axios.create({
  baseURL: 'https://ec2-18-117-84-227.us-east-2.compute.amazonaws.com:3000',
});
