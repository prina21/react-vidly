import axios from "axios";
import { toast } from 'react-toastify';
// import logger from './logService';

axios.interceptors.response.use(null, error => {
    // console.log('INTERCEPTOR CALLED');
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    if(!expectedError) {
      // logger.log(error);
      console.log("Error is ", error);
      toast.error("An unexpected error occurred!");
    }
    
    return Promise.reject(error);
  });

  export default {
      get: axios.get,
      post: axios.post,
      put: axios.put,
      delete: axios.delete,
  }