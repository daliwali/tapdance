'use strict'

const runTest = require('./')

runTest((assert, comment) => {
  comment('hello world')
  assert(true, 'sync assert works')
  // assert(1 * 2 === 3, 'uncomment for example')
})

runTest((assert, comment) => {
  comment('hello world, part 2')

  return new Promise(resolve => {
    assert(true, 'async assert works')
    resolve()
  })
})
