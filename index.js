'use strict'

const Hapi = require('hapi')
const dotenv = require('dotenv')

dotenv.config()

const server = Hapi.server({
  port: process.env.PORT || 3000,
  host: 'localhost'
})

async function init () {
  server.route({
    method: 'GET',
    path: '/',
    handler: (req, h) => h.response('hello world!').code(200)
  })

  try {
    await server.start()
  } catch (e) {
    console.log(e)
    process.exit(1)
  }

  console.log(`Server listening: ${server.info.uri}`)
}

init()
