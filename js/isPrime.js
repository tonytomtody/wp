function isPrime(n){
    for (let i = 2 ; i < n ; i ++){
        if (n % i == 0) return false
    }
    return true
}
console.log("3.isPrime(5) = ",isPrime(5))