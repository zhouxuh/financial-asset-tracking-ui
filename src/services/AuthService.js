import axios from 'axios';

const ASSET_API_BASE_URL = 'http://localhost:8080/api/v1/';

class AuthService {
  signUp(user) {
    console.log(user);
    return axios.post(ASSET_API_BASE_URL + 'user/signup', user, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
  }

  signIn(user) {
    console.log(user);
    return axios.post(ASSET_API_BASE_URL + 'authenticate', user, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
  }
}

export default new AuthService();
