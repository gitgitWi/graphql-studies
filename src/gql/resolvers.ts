import { sqlite } from '../db';

export const resolvers = {
  Query: {
    hello: () => `Hello World`,
    notes: () => sqlite.getList(),
    note: (_parent: undefined, args: Record<string, any>) =>
      sqlite.getById(args.id),
  },
};
