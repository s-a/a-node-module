'use strict'

const npmName = require('npm-name')

npmName('a-node-module').then(available => {
  console.log(available)
  // => false 
})

module.exports = {}
