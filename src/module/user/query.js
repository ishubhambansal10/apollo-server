export default {
  getMyProfile: async (parent, args, context) => {
    const { dataSources: { userAPI } } = context;
    const response = await userAPI.getMe();
    return response.userdata;
  },
  getAllUser: async (parent, args, context) => {
    const { skip, limit } = args;
    const { dataSources: { userAPI } } = context;
    const response = await userAPI.getAllUser(skip, limit);
    return response;
  },
};
