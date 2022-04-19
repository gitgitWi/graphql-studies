import { sqlite } from '../db';

export const resolvers = {
  Query: {
    hello: () => `Hello World`,
    notes: () => sqlite.readAll(),
  },
};
