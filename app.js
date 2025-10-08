function imc(alt, peso){
    return peso / (alt * alt);
}

console.log(imc(1.60, 70).toFixed(2));