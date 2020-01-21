// 📦 Control caching of Nodejs modules.
// List of require without cache modules: 
// • https://github.com/nazomikan/require-without-cache/blob/master/index.js
// • https://www.npmjs.com/package/require-without-cache
// • https://gist.github.com/adam-lynch/11037907
// • https://www.npmjs.com/package/decache
// • http://stackoverflow.com/questions/9210542/node-js-require-cache-possible-to-invalidate
function invalidateRequireCacheForFile(filePath){
	delete require.cache[require.resolve(filePath)];
};
export function requireNoCache(filePath){
	invalidateRequireCacheForFile(filePath);
	return require(filePath);
};

