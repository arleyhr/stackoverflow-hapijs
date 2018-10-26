'use strict'

class Users {
  constructor (db, auth) {
    this.db = db
    this.auth = auth
    this.ref = this.db.ref('/')
    this.collection = this.ref.child('users')
  }

  create ({ email, password, name }) {
    return this.auth.createUser({
      email,
      password,
      displayName: name
    })
  }

  login ({ email, password }) {
    console.log(Object.keys(this.auth))
    return {
      email,
      password
    }
  }
}

module.exports = Users
