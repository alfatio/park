const process = require('process')
const path  = require('path')
const fs = require('fs')


function main() {
    const filePath = process.argv[2]
    const data = fs.readFileSync(path.join(__dirname,"..",filePath),'utf-8')

}