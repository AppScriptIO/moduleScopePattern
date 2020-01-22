// import assert from 'assert'
import path from 'path'
import { assert } from 'chai'
import { addModuleResolutionPath, addModuleResolutionPathMultiple } from '../source/addModuleResolutionPath.js'
const testAssetPath = path.join(__dirname, 'asset')
const moduleFolder = [path.join(testAssetPath, 'moduleFolder1'), path.join(testAssetPath, 'moduleFolder2')]

describe('function addModuleResolutionPath: ', function() {
  afterEach(function() {
    console.log('resetting NODE_PATH environment variable.')
    process.env.NODE_PATH = '' // reset global path module resolution paths
  })

  describe('Add single path to the module resolution array', function() {
    it('Should resolve module in newly added module resolution path', function() {
      addModuleResolutionPath({ nodeModulePath: moduleFolder[0] })
      let actual = require('module1.js'),
        expected = true
      assert.equal(actual, expected)
    })
  })

  describe('Add multiple paths to the module resolution array', function() {
    it('Should resolve module in newly added module resolution paths', function() {
      addModuleResolutionPathMultiple({ pathArray: moduleFolder })
      let expected = true,
        actual
      actual = require('module1.js')
      assert.equal(actual, expected)
      actual = require('module2.js')
      assert.equal(actual, expected)
    })
  })
})
