'use strict'

const firebase = require('firebase-admin')

// generated file. Read more https://firebase.google.com/docs/admin/setup?authuser=0
const serviceAccount = require('../config/firebase.json')

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: 'https://stackhapiflow.firebaseio.com'
})

const db = firebase.database()
const auth = firebase.auth()

const Users = require('./Users')

module.exports = {
  users: new Users(db, auth)
}
