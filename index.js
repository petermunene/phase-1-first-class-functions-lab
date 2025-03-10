function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2)
}
function returnLastTwoDrivers(drivers){
    return drivers.slice(2)
}
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]
function createFareMultiplier(multiplier){
    return function fairMultiplier(fair){
        return fair*multiplier
    
    }
}
function fareDoubler(fare){
    return fare*2
}
function fareTripler(fare){
    return fare*3
}
function selectDifferentDrivers(arrayOfDrivers, driverSelectorFunction) {
    return driverSelectorFunction(arrayOfDrivers);
  }
    
