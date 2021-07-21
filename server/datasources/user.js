const { DataSource } = require("apollo-datasource");

class UserAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getUsers() {
    const users = this.store.users;
    return users;
  }
}

module.exports = UserAPI;
