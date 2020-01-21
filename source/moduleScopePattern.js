import path, { join } from 'path'
import { constants as filesystemConstants, promises as filesystem } from 'fs'
import { recursiveCreateDirectory } from '@dependency/recursiveCreateDirectory'

// Create symlinks to node_modules module scope. Allowing to load folders through @scope syntax.
export async function moduleScopePattern({
  rootScopeModulePath, // destination path - full path of the root scope module i.e. <path to node_modules>/<folders to scope module>
  rootFolderArray, // folders to be symlinked to the module scope folder (paths relative to rootPath).
  rootPath, // path to the project root folder where files should be symlinked from.
} = {}) {
  console.group(`\x1b[2m\x1b[3m%s`, '• Setup container environment - root scope pattern:')

  rootScopeModulePath = rootScopeModulePath // scope module for top-level directory symlinks

  // if directory doesn't exist
  await filesystem.access(rootScopeModulePath, filesystemConstants.F_OK).catch(error => recursiveCreateDirectory({ directoryPath: rootScopeModulePath }))

  // symlink each folder from root path to module scope path.
  for (let folderName of rootFolderArray) {
    let folderSourcePath = path.join(rootPath, folderName)
    let folderDestinationPath = path.join(rootScopeModulePath, folderName)
    await filesystem.symlink(folderSourcePath, folderDestinationPath).catch(error => console.log(`Symlink created for ${folderName}`))
  }

  console.groupEnd()
}

