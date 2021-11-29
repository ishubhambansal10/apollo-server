import { RESTDataSource } from 'apollo-datasource-rest';

import config from '../config/configurations';

export class TraineeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${config.serviceURL}/api/trainee`;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
    console.log(request.headers);
  }

  async getTrainee(limit, skip) {
    return this.get('/', { limit, skip });
  }

  async createTrainee(payload) {
    return this.post('/', payload);
  }

  async updateTrainee(payload) {
    return this.put('/', payload);
  }

  async deleteTrainee(id) {
    return this.delete(`/${id}`);
  }
}
