import axios from 'axios';
import { API_ENDPOINT } from '../constants';
import AuthService from './AuthService';

class DoctorService {
  constructor() {
    this.doctors = [];
  }

  listDoctor(onFetch, onError) {
    axios
      .get(`${API_ENDPOINT}/doctor`)
      .then((response) => onFetch(response.data))
      .catch((e) => onError(e));
  }

  async list() {
    const response = await axios
      .get(`${API_ENDPOINT}/doctor`)
      .then((response) => {
        return response.data;
      });
    return response;
  }

  delete(id) {
    this.doctors = this.doctors.filter((doctor) => doctor.id !== id);
  }

  save(doctor) {
    axios.post(`${API_ENDPOINT}/doctor`, doctor).then((response) => {
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
