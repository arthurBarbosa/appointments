import axios from 'axios';
import { API_ENDPOINT } from '../constants';
import AuthService from './AuthService';

class DoctorService {

  save(user) {
    axios.post(`${API_ENDPOINT}/users`, user).then((response) => {
      console.log(response.data);
    });
  }

  buildAuthHeader() {
    return {
      headers: {
        Authorization: `Bearer ${AuthService.getJWTToken()}`,
      },
    };
  }
}
export default new DoctorService();
