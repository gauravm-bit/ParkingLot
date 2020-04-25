const assert = require('chai').assert
const parkingLot = require('../app/ParkingLot.js')

let car = { } 

describe( `Testing for Parking Lot service`, () => {

//TC 1.1 let the driver park so that he can board his flight
it(`allow parking so the driver can board flight`, () => {
    let result = parkingLot.doParking(car)
    assert.isTrue(result)
})
//TC2.1 let the driver unpark so he can go home
it(`allow unparking so the driver can home`, () => {
    let result = parkingLot.doUnpark(car)
    assert.isTrue(result)
})

})