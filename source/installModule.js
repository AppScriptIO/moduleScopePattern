import { execSync, spawn, spawnSync } from 'child_process'
import { constants as filesystemConstants, promises as filesystem } from 'fs'
import path from 'path'

// 📦 Install NodeJS package.json modules, for initializing a project missing node_modules folder.
// This is not required anymore, as Yarn workspaces fixes the issue of dependency installation for submodules (non-npm packages).
export async function installModule({
  installPath, // path of package.json.
  options = { checkIfInstalled: true },
}) {
  // Install nodejs packages before
  let nodeModulesPath = path.join(installPath, 'node_modules')
  let nodeModulesExist
  if (options.checkIfInstalled)
    nodeModulesExist = await filesystem
      .access(nodeModulesPath, filesystemConstants.F_OK) // check if directory exist
      .then(() => true)
      .catch(error => false)
  if (!nodeModulesExist || !options.checkIfInstalled) {
    console.log(`\x1b[2m%s\x1b[0m'`, `• yarn install for folder: ${installPath}`)
    spawnSync('yarn', ['install --pure-lockfile --production=false'], { cwd: installPath, shell: true, stdio: [0, 1, 2] })
  } else {
    // skip installation
  }
}

// Interface for multiple install locations.
export async function installModuleMultiple({ installPathArray, options = {} }) {
  for (let installPath of installPathArray) {
    await installModule({ installPath })
  }
}
