'use strict'

const { users } = require('../models')

async function createUser (req, h) {
  try {
    const user = await users.create(req.payload)
    return h.response(`User created ${user.displayName}`)
  } catch (e) {
    console.error(e)
    return h.response(`Register failed: ${e.message}`).code(500)
  }
}

module.exports = {
  createUser
}
