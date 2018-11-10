#! /usr/bin/env node
const { app } = require('../app.js')
console.log('Running Markdown TOC Generator...')
try {
  app()
} catch (error) {
  console.error(`Error: ${error.message}`)
}