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
    note(id: ID!): Note
  }

  type Mutation {
    addNote(title: String!, name: String!, age: Int!): Boolean!
    updateNote(id: ID!, title: String!): Boolean!
    deleteNote(id: ID!): Boolean!
  }
`;
