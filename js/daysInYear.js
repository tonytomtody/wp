function daysInYear(y){
    if (y % 4 == 0) {
        if ( y % 100 != 0) return 366
        else if ( y % 400 == 0) return 366
        else return 365
    }
    
}
console.log("8.daysInYear(2004)",daysInYear(2004))