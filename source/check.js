import filesystem from 'fs'

// check if executed directly from cli or should be invoked as module.
export function isExecutedDirectly() {
  return (require.main === module) ? true : false
}

/**
JSModuleTypeCheck - Check the type of a JS module - e.g. file or directory
 *  Check if javascript module is a module file or directory module.
 * @return String || Boolean
 */
export function isFileOrFolderJSModule({
  modulePath, // path to js module
  isType = false, // 'file' || 'directory' - allows to return boolean in case set, respective to the type set.
}) {
  let moduleType
  if (filesystem.existsSync(modulePath) && filesystem.lstatSync(modulePath).isDirectory()) moduleType = 'directory'
  else if (filesystem.existsSync(`${modulePath}.js`) || (filesystem.existsSync(modulePath) && filesystem.lstatSync(modulePath).isFile())) moduleType = 'file'
  else throw new Error(`Module ${modulePath} does not exist`)

  // return boolean respective to the type in question.
  if (isType) return isType === moduleType

  return moduleType
}
