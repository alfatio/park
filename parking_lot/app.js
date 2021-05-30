const path = require('path')
const fs = require('fs')

const jsonPath = path.join(__dirname,'data.json')

function execute(command = ["",1,2]){
    try {
        switch (command[0]) {
            case "create_parking_lot":
                return createParkingLot(Number(command[1]))
            default:
                return "unknown command"
        }
    } catch (err) {
        throw err
    }
}


function writeJSON(payload){
    fs.writeFileSync(jsonPath,JSON.stringify(payload,null,2))
}


function createParkingLot(slotsNum = 0){
    if(slotsNum == null || slotsNum === 0) {
        throw new Error("parking slot cannot be 0")
    }else {
        let newParking = {}
        for(let i = 1; i <= slotsNum; i++){
            newParking[i] = ""
        }
        writeJSON(newParking)
        return `Created parking lot with ${slotsNum} slots`
    }
}



module.exports = execute