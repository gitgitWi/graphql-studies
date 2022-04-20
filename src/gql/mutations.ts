import { ContextProps, Note } from './interfaces';

export const Mutation = {
  addNote(
    _parent: undefined,
    args: Omit<Note, 'id'>,
    { model }: ContextProps
  ): boolean {
    const id = String(Number(model.getDataLength()) + 1);
    return model.create({ id, ...args });
  },

  updateNote(
    _parent: undefined,
    { id = '', title = '' }: Partial<Note>,
    { model }: ContextProps
  ): boolean {
    return model.update(id, title);
  },

  deleteNote(
    _parent: undefined,
    { id }: Pick<Note, 'id'>,
    { model }: ContextProps
  ): boolean {
    return model.delete(id);
  },
};
