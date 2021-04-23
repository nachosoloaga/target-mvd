import httpClient from 'httpClient';

class TargetService {
  static createTarget(target) {
    return httpClient.post('/targets/', target);
  }

  static getTargetTopics() {
    return httpClient.get('/topics/');
  }
}

export default TargetService;
