// import assert from 'assert'
import path from 'path'
import { assert } from 'chai'
import filesystem from 'fs'
import deleteModule from 'del'
import configuration from '../setup/configuration'
import { moduleScopePattern } from './entrypoint.js'
const testAssetPath = path.join(configuration.directory.application.containerAbsolutePath, 'test/asset'),
      moduleFolderName = ['module1', 'module2'],
      temporaryFolderPath = path.join(testAssetPath, 'temporary')

describe('function moduleScopePattern: ', function() {
    afterEach(function() {
        console.log('Remove symlinks.')
        deleteModule.sync([temporaryFolderPath])
    })
    describe('Create symlinks from source folders to destination path', function() {
        it('Should require module using `<module name>` or with path if any `<path>/<module>`', async function() {
            await moduleScopePattern({
                rootFolderArray: moduleFolderName,
                rootPath: testAssetPath,
                rootScopeModulePath: temporaryFolderPath
            })
            assert.isOk(require(path.join(temporaryFolderPath, moduleFolderName[0])))
            assert.isOk(require(path.join(temporaryFolderPath, moduleFolderName[1])))
        })
    })
})
