import { ContextProps, Note } from './interfaces';

export const Mutation = {
  addNote(_parent: undefined, args: Omit<Note, 'id'>, { model }: ContextProps) {
    const id = model.getDataLength() + 1;
    const isSuccess = model.create({ id, ...args });
    return isSuccess;
  },
};
