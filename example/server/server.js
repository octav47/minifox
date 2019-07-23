const path = require('path')
const express = require('express')
const app = express()
const publicPath = path.resolve(__dirname, '../public')
const reactPublicPath = path.resolve(__dirname, '../react/build')

app.use('/', express.static(publicPath))
app.use('/react', express.static(reactPublicPath))

app.get('/minifox.js', (req, res) => res.sendFile(path.resolve('../../dist/minifox.js')))

// app.get('/react', (req, res) => res.sendFile(path.resolve(reactPublicPath)))

app.listen(3000, () => console.log('started at 3000 port'))
