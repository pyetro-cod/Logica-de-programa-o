function area(r) {
    // ⚠️ Para maior precisão, o ideal é usar Math.PI
    const pi = 3.14; // Mantido 3.14 conforme seu código original
    
    // Calcula a Área e aplica .toFixed(2)
    const areaCalc = (pi * r**2).toFixed(2);
    
    // Calcula o Perímetro e aplica .toFixed(2)
    const perimetroCalc = (2 * pi * r).toFixed(2);
    
    // Retorna a string com os valores formatados
    return `Área: ${areaCalc} -- Perímetro: ${perimetroCalc}`;
}

let raio = 5;
console.log(area(raio));