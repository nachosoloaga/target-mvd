import httpClient from 'httpClient';

class TargetService {
  static createTarget(target) {
    return httpClient.post('/targets/', target);
  }
}

export default TargetService;
