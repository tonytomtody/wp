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
    let sum = 0
    for (let i = 2 ; i < n ; i ++){
        if (n % i != 0) sum = sum + n
    }
}
console.log("2.")
console.log(printodd(10))
console.log("3.isPrime(5) = ",isPrime(5))