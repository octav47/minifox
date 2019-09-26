import createStore from 'storeon'
import devtools from 'storeon/devtools'

const module = store => {
  store.on('@init', () => ({ moduleMap: {} }))

  store.on('use-module', ({ moduleMap }, { name, config }) => {
    console.log('use-module', name, config)

    moduleMap[name] = config

    return {
      moduleMap,
    }
  })
}

export const store = createStore([module, devtools])

window.$s2 = store

// store.on('@dispatch', (state, [event, data]) => {
//   console.log(`Storeon: ${event} with `, data)
// })
