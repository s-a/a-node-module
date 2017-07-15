#!/usr/bin/env node

'use strict'

var Cli = require('n-cli')
var cli = new Cli({
  silent: true,
  handleUncaughtException: true,
  handledRejectionPromiseError: true,
  runcom: '.myapprc'
})

cli.on('migrate', function () {
  this.argv.notNull('dataset')
})

cli.on('import', function () {

})
