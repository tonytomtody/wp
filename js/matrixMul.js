function matrixMul(a1,a2,b1,b2){
    let c1 = (a1 * b1) + (a2 * b1)
    let c2 = (a1 * b2) + (a2 * b2)
    return [c1,c2]
}
console.log("7.matrixMul(2,3,6,2) = ",matrixMul(2,3,6,2))