import { axiosService } from '../services/axios';
import { useEffect } from 'react';
import useAuth from './useAuth';

const useAxiosService = () => {
  const { auth } = useAuth();

  useEffect(() => {
    const requestIntercept = axiosService.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${auth?.token}`;
          //   console.log('In useAxiosService, ' + config.headers['Authorization']);
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      axiosService.interceptors.request.eject(requestIntercept);
    };
  }, [auth]);

  return axiosService;
};

export default useAxiosService;
