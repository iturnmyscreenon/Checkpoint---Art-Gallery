const AbstractManager = require("./AbstractManager");

class ContactManager extends AbstractManager {
  constructor() {
    super({ table: "contact" });
  }

  insert(data) {
    const { name, email, message } = data;
    return this.connection.query(
      `INSERT INTO ${this.table} (name, email, message) VALUES (?, ?, ?)`,
      [name, email, message]
    );
  }
}

module.exports = ContactManager;
