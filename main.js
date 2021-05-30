const process = require('process')
const path  = require('path')
const fs = require('fs')
const execute = require('./app.js')


const filePath = process.argv[2]
const data = fs.readFileSync(path.join(__dirname,filePath),'utf-8').split('\n')
let allOutput = ""

data.every(commandLine => {
    try {
        allOutput += execute(commandLine)
        allOutput += "\n"
        return true
    } catch (err) {
        console.error(err)
        return false
    }
})


process.stdout.write(allOutput,(err) => {
    if(err){
        console.log(err);
    }
})