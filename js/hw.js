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
console.log("2.")
console.log(printodd(10))
console.log("3.isPrime(5) = ",isPrime(5))
console.log("4.sumPrime(5) = ",sumPrime(5))