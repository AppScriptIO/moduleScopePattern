// import assert from 'assert'
import path from 'path'
import { assert } from 'chai'
import filesystem from 'fs'
import deleteModule from 'del'
import { installModule, installModuleMultiple } from '../source/installModule.js'
const testAssetPath = path.join(__dirname, 'asset')
const moduleFolder = [
        path.join(testAssetPath, 'module1'),
        path.join(testAssetPath, 'module2'),
    ]

describe('function installModule: ', function() {
    afterEach(function() { 
        console.log('Reset modules: Remove installed node_modules folders.')
        deleteModule.sync([path.join(moduleFolder[0], 'node_modules'), path.join(moduleFolder[1], 'node_modules')])
    })
    describe('install a single package.json module', function() {
        it('Should create node_modules folder', async function() {
            await installModule({ installPath: moduleFolder[0] })
            let nodeModulesFolderExist = filesystem.existsSync(path.join(moduleFolder[0], 'node_modules'))
            assert.isOk(nodeModulesFolderExist)
        })
    })
    describe('install  multiple package.json module', function() {
        it('Should create node_modules folder for each module', async function() {
            let nodeModulesFolderExist;
            await installModuleMultiple({ installPathArray: moduleFolder })
            nodeModulesFolderExist = filesystem.existsSync(path.join(moduleFolder[0], 'node_modules'))
            assert.isOk(nodeModulesFolderExist)
            nodeModulesFolderExist = filesystem.existsSync(path.join(moduleFolder[1], 'node_modules'))
            assert.isOk(nodeModulesFolderExist)
        })
    })
})
