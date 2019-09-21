const { gql } = require('apollo-server');

const typeDefs = gql`
  type Vehicle {
    _id:ID!
    name: String!
    color: String!    
    type: VehicleType!
    owner: User!
  }

  type VehicleType {
    _id:ID!
    name: String!
  }

  type User {
    _id: ID!
    name: String!
    age : Int!
  }

  type Query  {
    vehicles(type:ID):[Vehicle!]!
    users:[User]!    
  }

  input vehicleinputtype {
    name: String!
    color: String!    
    type: ID!
    owner: ID!
  }

  type Mutation {
    createUser(name: String!, age: Int!): User!
    createVehicleType(name: String):[VehicleType!]!
    createVehicle(vehicleinputtype: vehicleinputtype!):Vehicle!
  }
`;

module.exports = typeDefs;
