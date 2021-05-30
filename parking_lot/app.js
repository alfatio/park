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
            case "leave":
                return leavePark(command[1],command[2])
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

function determineCharge(duration){
    let output = 10

    /**
     * charge formula:
     *  - first 2 hours = 10
     *  - add 10 for each hour
     */

    if(duration > 2){
        for(let i = 3; i <= duration; i++){
            output += 10
        }
    }

    return output
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

function leavePark(plateNumber,duration){
    if(typeof(plateNumber) !== 'string' || plateNumber == null){
        throw new Error("invalid plate number input")
    }else if(Number(duration) == NaN || Number(duration) < 0){
        throw new Error("invalid duration input")
    }
    duration = Number(duration)

    let parkData = readJSON()

    for(let key in parkData){
        if(parkData[key] === plateNumber){
            parkData[key] = ""
            writeJSON(parkData)

            let charge = determineCharge(duration)
            return `Registration number ${plateNumber} with Slot Number ${key} is free with Charge ${charge}`
        }
    }
    return `Registration number ${plateNumber} not found`
}


module.exports = execute