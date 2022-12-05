import axios from 'axios';
const ASSET_API_BASE_URL = 'http://localhost:8080/api/v1';

export default axios.create({
  baseURL: ASSET_API_BASE_URL,
});

export const axiosService = axios.create({
  baseURL: ASSET_API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});
