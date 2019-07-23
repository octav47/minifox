const { connector } = minifox()

const reactConnection = connector.use('react', {
  publicPath: '//localhost:3001',
  root: 'react-app',
  entryPoint: 'bundle.js'
})

connector.use('vue', {
  publicPath: '//localhost:8081',
  root: 'vue-app',
  entryPoint: 'app.js'
})
