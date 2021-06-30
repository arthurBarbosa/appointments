import axios from 'axios';
import { API_ENDPOINT } from '../constants';
import AuthService from './AuthService';

class CustomerService {
  constructor() {
    this.customers = [
      { id: 1, name: 'Arthur' },
      { id: 1, name: 'André' },
      { id: 1, name: 'Celio' },
      { id: 1, name: 'João' },
    ];
  }

  list(onFetch, onError) {
    axios
      .get(`${API_ENDPOINT}/customer`)
      .then((response) => onFetch(response.data))
      .catch((e) => onError(e));
  }

  delete(id) {
    this.customers = this.customers.filter((customer) => customer.id !== id);
  }

  save(customer) {
      axios.post(`${API_ENDPOINT}/customer`, customer)
    .then((response) => {
      console.log(response.data)
    })
  }

  buildAuthHeader() {
    return {
      headers: {
        Authorization: `Bearer ${AuthService.getJWTToken()}`,
      },
    };
  }
}
export default new CustomerService();
