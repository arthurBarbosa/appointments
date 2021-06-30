import axios from 'axios';
import {
  AUTH_ENDPOINT,
  CLIENT_ID,
  CLIENT_SECRET,
  JWT_TOKEN_NAME,
} from '../constants';

class AuthService {
  login(username, password, onLogin) {
    const token = `${CLIENT_ID}:${CLIENT_SECRET}`;
    const headers = {
      Authorization: `Basic ${window.btoa(token)}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      'authenticationType': 'password'
    };

    axios
      .post(
        `${AUTH_ENDPOINT}`,
        { username: username, password: password },
        { headers },
      )
      .then((response) => {
        const jwtToken = response.headers['authorization'];
        sessionStorage.setItem(JWT_TOKEN_NAME, jwtToken);
        onLogin(true);
      })
      .catch((error) => {
        console.error(error);
        onLogin(false);
      });
  }

  getJWTToken() {
    return sessionStorage.getItem(JWT_TOKEN_NAME);
  }

  isAuthenticated() {
    return this.getJWTToken() !== null;
  }
}

export default new AuthService();
