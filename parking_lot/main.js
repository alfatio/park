const process = require('process')
const path  = require('path')
const fs = require('fs')
const execute = require('./app.js')

// clear data.json on app start
// fs.writeFileSync(path.join(__dirname,'data.json'),JSON.stringify({}),'utf8')

const filePath = process.argv[2]
const data = fs.readFileSync(path.join(__dirname,"..",filePath),'utf-8').split('\n')

data.every(commandLine => {
    try {
        console.log(execute(commandLine))
        return true
    } catch (err) {
        console.error(err)
        return false
    }
})