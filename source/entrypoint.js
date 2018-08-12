import path from 'path'
import { constants as filesystemConstants, promises as filesystem } from 'fs'
import { recursiveCreateDirectory } from '@dependency/recursiveCreateDirectory'

async function moduleScopePattern({
    rootScopeModulePath, // full path of the root scope module i.e. <path to node_modules>/<folders to scope module>
    rootPath, // path to the project root folder where files should be symlinked from.
    rootFolderArray // root folders to be symlinked to the module scope folder.
} = {}) {
    
    console.group(`\x1b[2m\x1b[3m%s`, '• Setup container environment - root scope pattern:')

    rootScopeModulePath = rootScopeModulePath; // scope module for top-level directory symlinks
    await filesystem.access(rootScopeModulePath, filesystemConstants.F_OK) // if directory doesn't exist
                    .catch(error => recursiveCreateDirectory({ directoryPath: rootScopeModulePath }))

    for (let folderName of rootFolderArray) { // symlink each folder from root path to module scope path.
        await filesystem.symlink(`${rootPath}/${folderName}`, `${rootScopeModulePath}/${folderName}`)
                        .catch( error => console.log(`Symlink created for ${folderName}`) )
    }    

    console.groupEnd()
}

module.exports = {
    moduleScopePattern
}