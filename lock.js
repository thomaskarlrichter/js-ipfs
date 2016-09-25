'use strict'

const fs = require('fs-ext')
const path = require('path')
const c = require('constants')

const lockfile = path.resolve('/Users/dignifiedquire/.ipfs/repo.lock')
const fd = fs.openSync(lockfile, 'w')

fs.fcntl(fd, 'setlk', c.F_WRLCK, (err, result) => {
  console.log(err, result)
  setTimeout(() => {
    console.log('exit')
  }, 10 * 1000)
})
