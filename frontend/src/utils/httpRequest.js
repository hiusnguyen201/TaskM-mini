import axios from "axios";

const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (endpoint, options = {}) => {
  const response = await httpRequest.get(endpoint, options);
  return response.data;
};

export const post = async (endpoint, options = {}) => {
  const response = await httpRequest.post(endpoint, options);
  return response.data;
};

export default httpRequest;
