const { installModuleMultiple } = require(`@dependency/handleModuleSystem`)
await installModuleMultiple({
    installPathArray: [
        rootPath,  // Install main/root node_modules (package.json located on the root directory)
        babelJSTranspilerPath // install babel modules
    ]
})
