const path = require('path')
const express = require('express')
const app = express()
const publicPath = path.resolve(__dirname, '../public')
const reactPublicPath = path.resolve(__dirname, '../react/dist')

app.use('/public', express.static(publicPath))
app.use('/react', express.static(reactPublicPath))

app.get('/', (res, req) => req.sendFile(path.resolve(publicPath, 'index.html')))

app.get('/react', (res, req) => req.sendFile(path.resolve(reactPublicPath, 'index.html')))

app.listen(3000, () => console.log('started at 3000 port'))
