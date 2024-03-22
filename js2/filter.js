function filter(a,f){
    let c = [], t = 0
    for (var i in a){
        if (f(a[i]) == true) {
            c[t] = a[i]
            t++
        }
    }
    return c
}
console.log(filter([1,2,3,4], function (x) { return x%2 == 1; }))