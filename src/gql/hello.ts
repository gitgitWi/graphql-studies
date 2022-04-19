import { gql } from 'apollo-server-express';

export const HelloType = gql`
  type Query {
    hello: String
  }
`;

export const HelloResolvers = {
  Query: {
    hello: () => `Hello World`,
  },
};
