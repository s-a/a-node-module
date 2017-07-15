#!/usr/bin/env node

'use strict'
const path = require('path')
const fs = require('fs')
const globArray = require('glob-array')
const fsx = require('fs-extra')
const npmName = require('npm-name')

var Cli = require('n-cli')
var cli = new Cli({
  silent: false,
  handleUncaughtException: true,
  handledRejectionPromiseError: true,
  runcom: '.node-module'
})

cli.runcom(function (rc) {
  if (!rc) {
    cli.stdout('no .node-module runcom file found\ncreate on with content like...\n')
    cli.stdout(fs.readFileSync(path.join(__dirname, '../.node-module').toString()))
    throw new Error('.node-module rc file not found')
  }

  var modulename = cli.argv._[0]

  npmName(modulename).then(available => {
    var dir = path.resolve(path.join(rc.settings.targetdir, modulename))

    if (fs.existsSync(dir)) {
      throw new Error(dir + ' already exist.')
    }
    cli.stdout('module "' + modulename + '" available? ' + available + '\n')
    if (available) {
      fsx.copySync(path.join(__dirname, '../template'), dir)
      var patterns = [path.join(dir, '/**/*.*'), path.join(dir, '/**/.*')]
      var files = globArray.sync(patterns)

      for (var index = 0; index < files.length; index++) {
        var file = files[index]
        var text = fs.readFileSync(file).toString()
        text = text.replace(/anodemoduleauthor/g, rc.settings.author.slug)
        text = text.replace(/anodemodule/g, modulename)
        fs.writeFileSync(file, text)
      }

      var pkg = path.join(dir, 'package.json')
      var p = JSON.parse(fs.readFileSync(pkg).toString())
      p.author.name = rc.settings.author.name
      p.author.email = rc.settings.author.email
      fs.writeFileSync(pkg, JSON.stringify(p, ' ', null, 4))
      cli.stdout('https://travis-ci.org/profile/' + rc.settings.author.slug + '\n')
      cli.stdout('https://coveralls.io/repos/new?name=' + rc.settings.author.slug + '&service=github\n')
    } else {
      throw new Error('modulename' + modulename + ' not available any more.')
    }
  })
})
