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
function lcm(a,b){
    let l = (a * b) / gcd(a,b);
    return l;
}
console.log("lcm(54,24)",lcm(54,24))