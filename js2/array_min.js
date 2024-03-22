function array_min(a){
    let m
    if (a[0] > a[1]) m = a [1]
    else if (a[1] > a[0]) m = a[0]
    else if (a[1] == a[0]) m = a[1]
    for (let i = 2;i < a.length;i++){
        if (m > a[i]) m = a[i]
    }
    return m
}
let i = [4,2,5,6,1]
console.log("array_min(4,2,5,6,1)",array_min(i))