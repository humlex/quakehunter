const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    quakes: [Quake]!
    quake(id: ID!): Quake
    users: [User]
    me: User
  }

  type Quake {
    id: ID!
    location: String
    magnitude: Float
    when: String
    cursor: String
  }

  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    records: [Quake]!
  }

  type Mutation {
    saveRecord(recordId: ID!): RecordUpdateResponse!
    deleteRecord(recordId: ID!): RecordUpdateResponse!
    login(email: String): User
  }

  type RecordUpdateResponse {
    success: Boolean!
    message: String
    records: [Quake]
  }
`;

module.exports = typeDefs;
