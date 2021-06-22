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

  static getMatches() {
    return httpClient.get('/match_conversations');
  }

  static deleteTarget(targetId) {
    return httpClient.delete(`/targets/${targetId}`);
  }
}

export default TargetService;
