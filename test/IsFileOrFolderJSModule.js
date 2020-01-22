import assert from 'assert'
import path from 'path'
import { isFileOrFolderJSModule } from '../source/isFileOrFolderJSModule.js'
const assetFolder = path.join(__dirname, 'asset')

describe('function isFileOrFolderJSModule: ', function() {
  describe('Type of module - string', function() {
    it('Should return `directory`', function() {
      let type = isFileOrFolderJSModule({ modulePath: path.join(assetFolder, 'folderModule') })
      assert.strictEqual(type, 'directory')
    })
    it('Should return `file`', function() {
      let type = isFileOrFolderJSModule({ modulePath: path.join(assetFolder, 'fileModule') })
      assert.strictEqual(type, 'file')
    })
  })

  describe('Type of module - boolean according to the type in question', function() {
    it('Should return true for matching types', function() {
      let type1 = isFileOrFolderJSModule({ modulePath: path.join(assetFolder, 'folderModule'), isType: 'directory' })
      assert.strictEqual(type1, true)
      let type2 = isFileOrFolderJSModule({ modulePath: path.join(assetFolder, 'fileModule'), isType: 'file' })
      assert.strictEqual(type2, true)
    })
    it('Should return false for non-matching types', function() {
      let type1 = isFileOrFolderJSModule({ modulePath: path.join(assetFolder, 'folderModule'), isType: 'file' })
      assert.strictEqual(type1, false)
      let type2 = isFileOrFolderJSModule({ modulePath: path.join(assetFolder, 'fileModule'), isType: 'directory' })
      assert.strictEqual(type2, false)
    })
  })
})
