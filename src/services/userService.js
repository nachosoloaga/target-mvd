import httpClient from 'httpClient';

class UserService {
  static login(user) {
    return httpClient.post('/users/sign_in', user);
  }

  static logout() {
    return httpClient.delete('/users/sign_out');
  }

  static signUp(user) {
    return httpClient.post('/users', user);
  }

  static editProfile(user) {
    console.log('Edit profile ', user);
  }
}

export default UserService;
