import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Note {
    id: ID!
    name: String!
    age: Int!
    title: String!
  }

  type Query {
    hello: String!
    notes: [Note!]!
  }
`;
