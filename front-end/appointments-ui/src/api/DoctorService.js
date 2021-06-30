import axios from 'axios';
import { API_ENDPOINT } from '../constants';
import AuthService from './AuthService';

class DoctorService {
  constructor() {
    this.doctors = [
      { id: 1, name: 'Arthur' },
      { id: 1, name: 'André' },
      { id: 1, name: 'Celio' },
      { id: 1, name: 'João' },
    ];
  }

  list(onFetch, onError) {
    axios
      .get(`${API_ENDPOINT}/doctor`)
      .then((response) => onFetch(response.data))
      .catch((e) => onError(e));
  }

  delete(id) {
    this.doctors = this.doctors.filter((doctor) => doctor.id !== id);
  }

  save(doctor) {
    // this.doctors.map((a) => (doctor.id !== doctor.id ? a : doctor));
    axios
      .post(`${API_ENDPOINT}/doctor`, doctor)
      .then((response) => {
        console.log(response.data)
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
