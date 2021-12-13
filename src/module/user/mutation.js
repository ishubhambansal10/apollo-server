import pubsub from '../pubsub';
import constant from '../../lib/constant';

export default {
  loginUser: async (parent, args, context) => {
    const { payload: { email, password } } = args;
    const { dataSources: { userAPI } } = context;
    const response = await userAPI.loginUser({ email, password });
    return response.data;
  },
  createUser: async (parent, args, context) => {
    const { payload: { name, email, role } } = args;
    const { dataSources: { userAPI } } = context;
    const response = await userAPI.createUser({ name, email, role });
    return response;
  },
  updateUser: async (parent, args, context) => {
    const {
      payload: {
        originalId, name, email, role,
      },
    } = args;
    const { dataSources: { userAPI } } = context;
    const response = await userAPI.updateUser({
      originalId, name, email, role,
    });
    pubsub.publish(constant.subscriptions.USER_UPDATED, { userUpdated: response });
    return response;
  },
  deleteUser: async (parent, args, context) => {
    const { payload: { originalId } } = args;
    const { dataSources: { userAPI } } = context;
    const response = await userAPI.deleteUser({ originalId });
    const { message, status } = response;
    console.log(originalId);
    pubsub.publish(constant.subscriptions.USER_DELETED, {
      userDeleted: {
        message, status, originalId,
      },
    });
    return response;
  },
};
