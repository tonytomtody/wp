function gcd(a,b){
    let c = [],ac = 0,t;
    for (let i = 1 ; i <= a ; i++){
        if (a % i == 0){
            c[ac] = i;
            ac++;
        }
    }
    for (let i = 0;i < c.length;i++){
        if (b % c[i] == 0){
            t = c[i];
        }
    }
    return t;
}
console.log("gcd(54,24)",gcd(54,24))