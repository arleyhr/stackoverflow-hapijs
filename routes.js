'use strict'

const Joi = require('joi')

const site = require('./controllers/site')
const user = require('./controllers/user')

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: site.home
  },
  {
    method: 'GET',
    path: '/register',
    handler: site.register
  },
  {
    method: 'GET',
    path: '/login',
    handler: site.login
  },
  {
    method: 'POST',
    path: '/verify-login',
    options: {
      validate: {
        payload: {
          email: Joi.string().email().required(),
          password: Joi.string().required()
        }
      }
    },
    handler: user.login
  },
  {
    method: 'POST',
    path: '/create-user',
    options: {
      validate: {
        payload: {
          name: Joi.string().min(3).required(),
          email: Joi.string().email().required(),
          password: Joi.string().min(6).required()
        }
      }
    },
    handler: user.createUser
  },
  {
    method: 'GET',
    path: '/arleyhr',
    handler: (req, h) => h.redirect('https://github.com/arleyhr')
  },
  {
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: '.',
        index: ['index.html']
      }
    }
  }
]
