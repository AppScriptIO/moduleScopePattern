// import assert from 'assert'
import path from 'path'
import { assert } from 'chai'
import configuration from '../setup/configuration'
import { requireNoCache } from './entrypoint.js'
const testAssetPath = path.join(configuration.directory.application.containerAbsolutePath, 'test/asset')
const memoizationModule = path.join(testAssetPath, 'memoizationModule')

describe('function requireNoCache: prevent memoization of required module', function() {
    afterEach(function() { 
        console.log('Reset required modules.')
        delete require.cache
    })
    it('Should not cache required module - should reset cache after calling multiple times', async function() {
        let nonCachedModule = requireNoCache(memoizationModule).default
        assert.equal(nonCachedModule(), 1)
        assert.equal(nonCachedModule(), 2)
        nonCachedModule = requireNoCache(memoizationModule).default
        assert.equal(nonCachedModule(), 1)
        assert.equal(nonCachedModule(), 2)
    })
})
