let h1 = document.querySelector('h1');

h1.innerHTML = 'Hora do Desafio'

function criaButon(){
    console.log('Botão clicado');
    alert('Botão clicado');
}

function exibirAlerta(){
    alert('Eu amo JS');
}

function mostraNome(){
    let nome = prompt('Qual o nome da sua cidade?');
    console.log(`O nome da sua cidade é ${nome}`);
    alert(`O nome sua cidade é ${nome}`);
}

function somaNum(n1, n2){
    n1 = parseInt(prompt('Digite um número'));
    n2 = parseInt(prompt('Digite outro número'));
    alert(`O resultado da soma é ${n1 + n2}`);

}


