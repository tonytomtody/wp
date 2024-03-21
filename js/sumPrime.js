function sumPrime(n){
    let sum = 3
    for (let i = 3 ; i <= n ; i ++){
        for (let t = 2 ; i < n ; i ++){
            if (i % t != 0) sum = sum + n
        }
    }
    return sum
}
console.log("4.sumPrime(5) = ",sumPrime(5))