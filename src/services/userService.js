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

  static editProfile(payload) {
    return httpClient.put(`https://target-mvd-api.herokuapp.com/api/v1/users/${payload.userId}`, {
      email: payload.email
    });
  }

  static changePassword(passwordInfo) {
    return httpClient.put(
      'https://target-mvd-api.herokuapp.com/api/v1/users/password',
      passwordInfo
    );
  }
}

export default UserService;
