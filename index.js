'use strict'

const Hapi = require('hapi')
const inert = require('inert')
const handlebars = require('handlebars')
const vision = require('vision')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config()

const server = Hapi.server({
  port: process.env.PORT || 3000,
  host: 'localhost',
  routes: {
    files: {
      relativeTo: path.join(__dirname, 'public')
    }
  }
})

async function init () {
  try {
    await server.register(inert)
    await server.register(vision)

    server.views({
      engines: {
        hbs: handlebars
      },
      relativeTo: __dirname,
      path: 'views',
      layout: true,
      layoutPath: 'views'
    })

    server.route({
      method: 'GET',
      path: '/',
      handler: (req, h) => h.view('index', {
        title: 'Home'
      })
    })

    server.route({
      method: 'GET',
      path: '/{param*}',
      handler: {
        directory: {
          path: '.',
          index: ['index.html']
        }
      }
    })

    server.route({
      method: 'GET',
      path: '/arleyhr',
      handler: (req, h) => h.redirect('https://github.com/arleyhr')
    })
    await server.start()
  } catch (e) {
    console.log(e)
    process.exit(1)
  }

  console.log(`Server listening: ${server.info.uri}`)
}

init()
