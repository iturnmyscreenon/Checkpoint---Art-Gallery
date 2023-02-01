const AbstractManager = require("./AbstractManager");

class ArtManager extends AbstractManager {
  constructor() {
    super({ table: "art" });
  }

  insert(data) {
    const { id, name, description, image, price } = data;
    return this.connection.query(
      `insert into ${this.table} (id, name, description, image, price) values (?, ?, ?, ?, ?)`,
      [id, name, description, image, price]
    );
  }
}

module.exports = ArtManager;
