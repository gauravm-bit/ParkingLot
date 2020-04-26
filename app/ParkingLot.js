class ParkingLot {

    constructor(){
        this.Lot = [];
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
        return false;
    }

    statusCheckIfFull = () => {
        if(this.Lot.length == 100){
            return true;
        }
        return false;
    }

    
}
console.log(this.count)
 
module.exports = new ParkingLot;