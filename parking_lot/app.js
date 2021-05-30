const path = require('path')
const fs = require('fs')

const jsonPath = path.join(__dirname,'data.json')

function execute(commandLine){
    let command = commandLine.split(' ')
    try {
        switch (command[0]) {
            case "create_parking_lot":
                return createParkingLot(Number(command[1]))
            case "park":
                return registerPark(command[1])
            default:
                throw new Error("unknown command")
        }
    } catch (err) {
        throw err
    }
}


function writeJSON(payload){
    fs.writeFileSync(jsonPath,JSON.stringify(payload,null,2))
}

function readJSON(){
    return JSON.parse(fs.readFileSync(jsonPath,'utf-8'))
}


function createParkingLot(slotsNum){
    if(slotsNum == null || slotsNum === 0) {
        throw new Error("parking slot cannot be 0")
    }
    
    let newParking = {}
    for(let i = 1; i <= slotsNum; i++){
        newParking[i] = ""
    }
    writeJSON(newParking)
    return `Created parking lot with ${slotsNum} slots`
}

function registerPark(plateNumber){
    if(typeof(plateNumber) !== 'string' || plateNumber == null){
        throw new Error("invalid plate number input")
    }
    
    let parkData = readJSON()
    for(let key in parkData){
        if(parkData[key] === ""){
            parkData[key] = plateNumber
            writeJSON(parkData)
            return `Allocated slot number: ${key}`
        }
    }
    return "Sorry, parking lot is full"
}



module.exports = execute