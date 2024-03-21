function printodd(n){
    for (let i = 1 ; i < n ; i++){
        if ( i % 2 != 0) console.log(i," is odd")
    }
}
console.log("2.")
console.log(printodd(10))