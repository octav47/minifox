class DOM {
  findWrapper (moduleName) {
    return document.querySelector(`[minifox-module-wrapper="${moduleName}"]`)
  }
}

export default DOM
