const AbstractManager = require("./AbstractManager");

class ContactManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(data) {
    const { username, email, password } = data;
    return this.connection.query(
      `INSERT INTO ${this.table} ( username, email, password) VALUES (?, ?, ?)`,
      [username, email, password]
    );
  }
}
module.exports = ContactManager;
