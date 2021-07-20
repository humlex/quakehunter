const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const QuakeAPI = require("./datasources/quake");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    quakeAPI: new QuakeAPI(),
  }),
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
