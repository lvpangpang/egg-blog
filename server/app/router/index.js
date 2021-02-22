'use strict';

const user = require('./user')
const menu = require('./menu')

module.exports = (app) => {
  user(app)
  menu(app)
}
