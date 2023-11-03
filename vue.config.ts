const { defineConfig } = require('@vue/cli-service')

module.exports = {
    content: ["./src/**/*.{html,js}"],
    publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/'
}