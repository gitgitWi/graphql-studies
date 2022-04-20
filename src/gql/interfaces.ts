import { SqliteClient } from '../db';

export interface Note {
  id: string;
  name: string;
  age: number;
  title: string;
}

export interface ContextProps {
  model: SqliteClient;
}
