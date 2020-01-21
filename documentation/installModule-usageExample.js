const { installModuleMultiple } = require(`@dependency/installNodeJSModule`)
await installModuleMultiple({
    installPathArray: [
        rootPath,  // Install main/root node_modules (package.json located on the root directory)
        babelJSTranspilerPath // install babel modules
    ]
})
