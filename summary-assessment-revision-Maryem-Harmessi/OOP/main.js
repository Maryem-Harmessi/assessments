// Write your code here .....
function MakeCar(maximumNumberPassangers){
    return {
        numberOfPasengers:0,
        maximumNumberPassangers:maximumNumberPassangers,
        fuel:0,
        counter:0,
        mount,
        dismount,
        run,
        addFuel
    }
}

/*increase the number of passengers*/
function mount(){
    if(this.numberOfPasengers < this.maximumNumberPassangers){
        this.numberOfPasengers++
        return "One more passenger"
    }
    return "No more space"
    
}

/*decrease the number of passengers*/
function dismount(){
    if(this.numberOfPasengers > 0){
        this.numberOfPasengers--
        return "One less passenger"
    }
    return "No one left"
}

/*run the car*/
function run(milesToGo){
    if (this.numberOfPasengers*milesToGo <= this.fuel && this.numberOfPasengers > 0){
        this.counter=this.counter+milesToGo
        this.fuel=this.fuel-(this.numberOfPasengers*milesToGo)
        return "You arrived to your destination"
    }
    else if(this.numberOfPasengers === 0){
        return 'No driver'
    }
    return 'not enough fuel'
    
    
}


/*add fuel*/
function addFuel(fuelQuantity){
    this.fuel=fuelQuantity
    return 'fuel added'
}
