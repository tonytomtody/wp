console.log("1.Hello 你好!")
function isPrime(n){
    for (let i = 2 ; i < n ; i ++){
        if (n % i == 0) return false
    }
    return true
}
function printodd(n){
    for (let i = 1 ; i < n ; i++){
        if ( i % 2 != 0) console.log(i," is odd")
    }
}
function sumPrime(n){
    let sum = 3
    for (let i = 3 ; i <= n ; i ++){
        for (let t = 2 ; i < n ; i ++){
            if (i % t != 0) sum = sum + n
        }
    }
    return sum
}
function vectorAdd(a1,a2,b1,b2){
    let c1 = a1 + b1
    let c2 = a2 + b2
    return [c1,c2]
}
function matrixAdd(a1,a2,b1,b2){
    let c1 = a1 + b1
    let c2 = a2 + b2
    return [c1,c2]
}
function matrixMul(a1,a2,b1,b2){
    let c1 = (a1 * b1) + (a2 * b1)
    let c2 = (a1 * b2) + (a2 * b2)
    return [c1,c2]
}
function daysInYear(y){
    if (y % 4 == 0) return 366
    else return 365
}
console.log("2.")
console.log(printodd(10))
console.log("3.isPrime(5) = ",isPrime(5))
console.log("4.sumPrime(5) = ",sumPrime(5))
console.log("5.vectorAdd(2,3,6,2) = ",vectorAdd(2,3,6,2))
console.log("6.matrixAdd(2,3,6,2) = ",matrixAdd(2,3,6,2))
console.log("7.matrixMul(2,3,6,2) = ",matrixMul(2,3,6,2))
console.log("8.daysInYear(2004)",daysInYear(2004))
