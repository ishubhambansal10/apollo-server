import { RESTDataSource } from 'apollo-datasource-rest';

import config from '../config/configurations';

export class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${config.serviceURL}/api/user`;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
    console.log(request.headers);
  }

  getMe() {
    return this.get('/me');
  }

  loginUser(payload) {
    return this.post('/createToken', payload);
  }
}
