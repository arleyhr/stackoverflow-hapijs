'use strict'

function home (req, h) {
  return h.view('index', {
    title: 'Home'
  })
}

function login (req, h) {
  return h.view('login', {
    title: 'Login'
  })
}

function register (req, h) {
  return h.view('register', {
    title: 'Register'
  })
}

module.exports = {
  home,
  login,
  register
}
