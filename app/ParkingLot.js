class ParkingLot {
    
    constructor(){
        this.Lot = new Array(100);
    }

    doParking = (car) => { 
        if(this.Lot.includes(car))
        {
            return false;
        }
        this.Lot.push(car)
        return true;
    }

    doUnpark = (car) => {
        if(this.Lot.includes(car)){
            this.Lot.pop(car)
            return true;
        }
        
    }
    

}
 
module.exports = new ParkingLot;