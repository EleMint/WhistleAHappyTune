const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()

app.use('/', createProxyMiddleware({
    target: 'https://itunes.apple.com/search',
    headers: {
        accept: 'application/json',
        method: 'GET'
    },
    changeOrigin: true
}))

app.listen(4000)
