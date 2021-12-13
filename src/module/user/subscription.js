import constant from '../../lib/constant';
import pubsub from '../pubsub';

export default {
  userUpdated: {
    subscribe: () => pubsub.asyncIterator([constant.subscriptions.USER_UPDATED]),
  },
  userDeleted: {
    subscribe: () => pubsub.asyncIterator([constant.subscriptions.USER_DELETED]),
  },
};
