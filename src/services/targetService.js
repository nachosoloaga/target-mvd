import httpClient from 'httpClient';

class TargetService {
  static createTarget(target) {
    return httpClient.post('/targets/', target);
  }

  static getTargets() {
    return httpClient.get('/targets/');
  }

  static getTargetTopics() {
    return httpClient.get('/topics/');
  }
}

export default TargetService;
