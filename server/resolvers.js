module.exports = {
  Query: {
    quakes: (_, __, { dataSources }) => dataSources.quakeAPI.getAllQuakes(),
    quake: (_, { id }, { dataSources }) =>
      dataSources.quakeAPI.getQuakeById({ quakeId: id }),
    users: (_, __, { dataSources }) => dataSources.userAPI.getUsers(),
  },
};
