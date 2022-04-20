import { ContextProps, Note } from './interfaces';

export const Query = {
  hello: () => `Hello World`,
  notes: (_parent: undefined, _args: undefined, { model }: ContextProps) =>
    model.getList(),
  note: (
    _parent: undefined,
    { id }: Pick<Note, 'id'>,
    { model }: ContextProps
  ) => model.getById(id),
};
