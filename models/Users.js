'use strict'

class Users {
  constructor (db, auth) {
    this.db = db
    this.auth = auth
    this.ref = this.db.ref('/')
    this.collection = this.ref.child('users')
  }

  async create ({ email, password, name }) {
    return this.auth.createUser({
      email,
      password,
      displayName: name
    })
  }
}

module.exports = Users
