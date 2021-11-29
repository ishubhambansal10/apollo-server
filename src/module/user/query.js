export default {
  getMyProfile: async (parent, args, context) => {
    const { dataSources: { userAPI } } = context;
    const response = await userAPI.getMe();
    console.log('My response', response);
    return response.userdata;
  },
  getAllUser: async (parent, args, context) => {
    const { dataSources: { userAPI } } = context;
    const response = await userAPI.getAll();
    return response.data;
  },
};
