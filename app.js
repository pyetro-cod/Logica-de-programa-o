function areaP (alt, larg){
    let perimetroRent =  2*(alt + larg);
    let areaRent = alt * larg;
    return `Área: ${areaRent} - Perímetro: ${perimetroRent}`
}
let altura = 3;
let largura = 5;
console.log(areaP(altura, largura));

