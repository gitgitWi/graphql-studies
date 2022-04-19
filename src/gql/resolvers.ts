import { sqlite } from '../db';

export interface Note {
  id: string;
  name: string;
  age: number;
  title: string;
}

export const resolvers = {
  Query: {
    hello: () => `Hello World`,
    notes: () => sqlite.getList(),
    note: (_parent: undefined, { id }: Pick<Note, 'id'>) => sqlite.getById(id),
  },
  Mutation: {
    addNote(_parent: undefined, args: Omit<Note, 'id'>) {
      const id = sqlite.getDataLength() + 1;
      const isSuccess = sqlite.create({ id, ...args });
      return isSuccess;
    },
  },
};
