var se = { Sunday : '0' , Monday : '1',Tuesday : '2' ,Wednesday : '3',Thursday : '4' ,Friday : '5',Saturday : '6'}
function weekday(a){
    let num = se[a]
    return num
}
console.log("weekday(Tuesday)",weekday("Tuesday"))