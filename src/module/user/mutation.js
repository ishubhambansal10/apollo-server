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
    return response;
  },
  deleteUser: async (parent, args, context) => {
    const { payload: { originalId } } = args;
    const { dataSources: { userAPI } } = context;
    const response = await userAPI.deleteUser({ originalId });
    return response;
  },
};
