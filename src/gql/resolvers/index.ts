import { GraphQLDateTime } from 'graphql-iso-date';

import { Query } from './query';
import { Mutation } from './mutations';

export const resolvers = {
  Query,
  Mutation,
  DateTime: GraphQLDateTime,
};
