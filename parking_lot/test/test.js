const assert = require('chai').assert
const path = require('path')
const execute = require(path.join(__dirname, '..', 'app.js'))


describe('required expected output', function () {
    describe(`command: create_parking_lot 6`, function () {
        it('return: Created parking lot with 6 slots', function () {
            let returned = execute("create_parking_lot 6")
            assert(returned === "Created parking lot with 6 slots", `wrong message output, returned: ${returned}`)
        })
    })
    describe(`command:  park KA-01-HH-1234`, function () {
        it('return: Allocated slot number: 1', function () {
            let returned = execute("park KA-01-HH-1234")
            assert(returned === "Allocated slot number: 1", `wrong message output, returned: ${returned}`)
        })
    })
    describe(`command: park KA-01-HH-9999`, function () {
        it('return: Allocated slot number: 2', function () {
            let returned = execute("park KA-01-HH-9999")
            assert(returned === "Allocated slot number: 2", `wrong message output, returned: ${returned}`)
        })
    })
    describe(`command: park KA-01-BB-0001`, function () {
        it('return: Allocated slot number: 3', function () {
            let returned = execute("park KA-01-BB-0001")
            assert(returned === "Allocated slot number: 3", `wrong message output, returned: ${returned}`)
        })
    })
    describe(`command: park KA-01-HH-7777`, function () {
        it('return: Allocated slot number: 4', function () {
            let returned = execute("park KA-01-HH-7777")
            assert(returned === "Allocated slot number: 4", `wrong message output, returned: ${returned}`)
        })
    })
    describe(`command: park KA-01-HH-2701`, function () {
        it('return: Allocated slot number: 5', function () {
            let returned = execute("park KA-01-HH-2701")
            assert(returned === "Allocated slot number: 5", `wrong message output, returned: ${returned}`)
        })
    })
    describe(`command: park KA-01-HH-3141`, function () {
        it('return: Allocated slot number: 6', function () {
            let returned = execute("park KA-01-HH-3141")
            assert(returned === "Allocated slot number: 6", `wrong message output, returned: ${returned}`)
        })
    })
    describe(`command: leave KA-01-HH-3141 4`, function () {
        it('return: Registration number KA-01-HH-3141 with Slot Number 6 is free with Charge 30', function () {
            let returned = execute("leave KA-01-HH-3141 4")
            assert(returned === "Registration number KA-01-HH-3141 with Slot Number 6 is free with Charge 30", `wrong message output, returned: ${returned}`)
        })
    })
    describe(`command: status`, function () {
        it(`return: Slot No. Registration No.
        1 KA-01-HH-1234
        2 KA-01-HH-9999
        3 KA-01-BB-0001
        4 KA-01-HH-7777
        5 KA-01-HH-2701`, 
        function () {
        let returned = execute("status")
        assert(returned === `
        Slot No. Registration No.
        1 KA-01-HH-1234
        2 KA-01-HH-9999
        3 KA-01-BB-0001
        4 KA-01-HH-7777
        5 KA-01-HH-2701`, `wrong message output, returned: ${returned}`)
        })
    })
    describe(`command: park KA-01-P-333`, function () {
        it('return: Allocated slot number: 6', function () {
            let returned = execute("park KA-01-P-333")
            assert(returned === "Allocated slot number: 6", `wrong message output, returned: ${returned}`)
        })
    })
    describe(`command: park DL-12-AA-9999`, function () {
        it('return: Sorry, parking lot is full', function () {
            let returned = execute("park DL-12-AA-9999")
            assert(returned === "Sorry, parking lot is full", `wrong message output, returned: ${returned}`)
        })
    })
    describe(`command: leave KA-01-HH-1234 4`, function () {
        it('return: Registration number KA-01-HH-1234 with Slot Number 1 is free with Charge 30', function () {
            let returned = execute("leave KA-01-HH-1234 4")
            assert(returned === "Registration number KA-01-HH-1234 with Slot Number 1 is free with Charge 30", `wrong message output, returned: ${returned}`)
        })
    })
    describe(`command: leave KA-01-BB-0001 6`, function () {
        it('return: Registration number KA-01-BB-0001 with Slot Number 3 is free with Charge 50', function () {
            let returned = execute("leave KA-01-BB-0001 6")
            assert(returned === "Registration number KA-01-BB-0001 with Slot Number 3 is free with Charge 50", `wrong message output, returned: ${returned}`)
        })
    })
    describe(`command: leave DL-12-AA-9999 2`, function () {
        it('return: Registration number DL-12-AA-9999 not found', function () {
            let returned = execute("leave DL-12-AA-9999 2")
            assert(returned === "Registration number DL-12-AA-9999 not found", `wrong message output, returned: ${returned}`)
        })
    })
    describe(`command: park KA-09-HH-0987`, function () {
        it('return: Allocated slot number: 1', function () {
            let returned = execute("park KA-09-HH-0987")
            assert(returned === "Allocated slot number: 1", `wrong message output, returned: ${returned}`)
        })
    })
    describe(`command: park CA-09-IO-1111`, function () {
        it('return: Allocated slot number: 3', function () {
            let returned = execute("park CA-09-IO-1111")
            assert(returned === "Allocated slot number: 3", `wrong message output, returned: ${returned}`)
        })
    })
    describe(`command: park KA-09-HH-0123`, function () {
        it('return: Sorry, parking lot is full', function () {
            let returned = execute("park KA-09-HH-0123")
            assert(returned === "Sorry, parking lot is full", `wrong message output, returned: ${returned}`)
        })
    })
    describe(`command: status`, function () {
        it(`return: 
        Slot No. Registration No.
        1 KA-09-HH-0987
        2 KA-01-HH-9999
        3 CA-09-IO-1111
        4 KA-01-HH-7777
        5 KA-01-HH-2701
        6 KA-01-P-333`, 
        function () {
        let returned = execute("status")
        assert(returned === `
        Slot No. Registration No.
        1 KA-09-HH-0987
        2 KA-01-HH-9999
        3 CA-09-IO-1111
        4 KA-01-HH-7777
        5 KA-01-HH-2701
        6 KA-01-P-333`, `wrong message output, returned: ${returned}`)
        })
    })
})