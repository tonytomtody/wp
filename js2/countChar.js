function countChar(a){
    let c = [] ,t = 0 , e = []
    let b = Array.from(a)
    for (let i in b){
        if (c.includes(b[i]) == false) {
            c[t] = b[i]
            e[t] = 1
            t++
        }
        else {
            let p = c.indexOf(b[i])
            e[p]++
        }
    }
    for (let i in c){
        console.log("[")
    }
}
console.log (countChar("aacc"))