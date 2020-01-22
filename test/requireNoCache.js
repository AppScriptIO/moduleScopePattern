// import assert from 'assert'
import path from 'path'
import { assert } from 'chai'
import { requireNoCache } from '../source/requireNoCache.js'
const testAssetPath = path.join(__dirname, 'asset')
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
