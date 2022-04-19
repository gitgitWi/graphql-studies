import DB from 'better-sqlite3';

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
      id    INT PRIMARY KEY,
      name  VARCHAR(30) NOT NULL,
      age   INT,
      title VARCHAR(200)
      )`);

    const data = this.readAll();
    if (data.length > 0) this.deleteAll();

    const stmt = this.db.prepare(
      `INSERT INTO ${this.table} VALUES (@id, @name, @age, @title)`
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
      stmt.run({ id, name, age, title });
    });

    console.log(`dummy data inserted`);
  }

  create() {
    // this.db.prepare(``)
  }

  read() {
    //
  }

  readAll() {
    console.time(`readAll`);
    const data = this.db.prepare(`SELECT * FROM ${this.table}`).all();

    console.timeEnd(`readAll`);
    return data;
  }

  update() {
    //
  }

  delete() {
    //
  }

  private deleteAll() {
    this.db.exec(`DELETE FROM ${this.table}`);
  }
}

export const sqlite = new SqliteClient();
