import httpClient from 'httpClient';
import storeConfig from 'state/store/configureStore';

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
    const currentState = storeConfig.store.getState();
    const userId = currentState.session.user.id;
    return httpClient.put(`/users/${userId}`, {
      user: {
        email: payload.email
      }
    });
  }

  static changePassword(payload) {
    return httpClient.put('/users/password', {
      currentPassword: payload.currentPassword,
      password: payload.password,
      password_confirmation: payload.passwordConfirmation
    });
  }
}

export default UserService;
