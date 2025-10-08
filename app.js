function fatorial(n){
    let fatorial = 1;
    for(let i = 2; i <= n;i++){
        fatorial *= i;
    }
    return fatorial;
}

console.log(fatorial(5));
