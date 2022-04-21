import DB from 'better-sqlite3';

import { type Note } from '../gql';

export class SqliteClient {
  constructor(
    private readonly db = new DB('test.db'),
    private readonly table = `test`
  ) {
    this.initialData();
  }

  private initialData() {
    // this.db.exec(`DROP TABLE IF EXISTS ${this.table}`);
    this.db.exec(`CREATE TABLE IF NOT EXISTS ${this.table} (
      id    INTEGER PRIMARY KEY,
      name  VARCHAR(30) NOT NULL,
      age   INTEGER,
      title VARCHAR(200),
      createdAt INTEGER NOT NULL DEFAULT (datetime('now', 'localtime')),
      updatedAt INTEGER NOT NULL DEFAULT (datetime('now', 'localtime'))
      )`);

    const data = this.getList();
    if (data.length > 0) this.deleteAll();

    const stmt = this.db.prepare(
      `INSERT INTO ${this.table} (id, name, age, title) VALUES (@id, @name, @age, @title)`
    );

    [
      {
        name: 'ms. sara Andersen',
        age: 23,
        title:
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      },
      { name: 'miss. Margarita Vicente', age: 25, title: 'qui est esse' },
      {
        name: 'mrs. Sibylle Leibold',
        age: 28,
        title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      },
    ].forEach(({ name, age, title }, id) => {
      stmt.run({ id: id + 1, name, age, title });
    });

    console.log(`dummy data inserted`);
  }

  create({ id, name, age, title }: Note): boolean {
    try {
      this.db
        .prepare(
          `INSERT INTO ${this.table} (id, name, age, title) VALUES (@id, @name, @age, @title)`
        )
        .run({
          id,
          name,
          age,
          title,
        });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  getById(id: string): Note | boolean {
    try {
      const data = this.db
        .prepare(`SELECT * FROM ${this.table} WHERE id=?`)
        .get(id);
      /** SQLite datetime이 ISO 방식을 지원하지 않으므로 변환 필요 */
      data.createdAt = new Date(data.createdAt).toISOString();
      data.updatedAt = new Date(data.updatedAt).toISOString();
      return data;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  getList(): Note[] {
    try {
      return this.db
        .prepare(`SELECT * FROM ${this.table}`)
        .all()
        .map((note) => {
          /** SQLite datetime이 ISO 방식을 지원하지 않으므로 변환 필요 */
          note.createdAt = new Date(note.createdAt).toISOString();
          note.updatedAt = new Date(note.updatedAt).toISOString();
          return note;
        });
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  getDataLength(): number {
    try {
      return this.db.prepare(`SELECT COUNT(id) FROM ${this.table}`).get()[
        'COUNT(id)'
      ];
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  update(id: string, title: string): boolean {
    if (!id) return false;
    try {
      return (
        this.db
          .prepare(
            `UPDATE ${this.table} SET title=@title, updatedAt=(datetime('now', 'localtime')) WHERE id=@id`
          )
          .run({
            id,
            title,
          }).changes > 0
      );
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  delete(id: string): boolean {
    try {
      return (
        this.db.prepare(`DELETE FROM ${this.table} WHERE id=@id`).run({ id })
          .changes > 0
      );
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  private deleteAll(): void {
    try {
      this.db.exec(`DELETE FROM ${this.table}`);
    } catch (error) {
      console.error(error);
    }
  }
}

export const sqlite = new SqliteClient();
