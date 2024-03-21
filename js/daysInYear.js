function daysInYear(y){
    if (y % 4 == 0) return 366
    else return 365
}
console.log("8.daysInYear(2004)",daysInYear(2004))