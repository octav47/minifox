import Connection from './Connection'

class Connector {
  constructor (config) {
    this.moduleMap = {}
    this.__dom = config.dom
  }

  use (moduleName, config) {
    this.moduleMap[moduleName] = config

    this.init(moduleName)

    this.log('moduleMap')

    return new Connection()
  }

  init (moduleName) {
    const wrapper = this.__dom.findWrapper(moduleName)
    const root = document.createElement('div')
    const script = document.createElement('script')

    root.id = this.moduleMap[moduleName].root
    script.src = this.moduleMap[moduleName].publicPath + '/' + this.moduleMap[moduleName].entryPoint

    wrapper.appendChild(root)
    wrapper.appendChild(script)
  }

  log (what) {
    console.log('log Connector', this[what])
  }
}

export default Connector
