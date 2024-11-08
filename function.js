const args = process.argv.slice(2);
const input = args.map(Number);
let vitorias = input[0];
let derrotas = input[1];


/**Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)
**/

let saldoVitorias = calculo(vitorias, derrotas);
let nivel;


if (saldoVitorias < 10){ //Se vitórias for menor do que 10 = Ferro
    nivel = "Ferro"
} else if (saldoVitorias >= 11 && saldoVitorias <= 20){ //Se vitórias for entre 11 e 20 = Bronze
    nivel = "Bronze"
} else if (saldoVitorias >= 21 && saldoVitorias <= 50){ //Se vitórias for entre 21 e 50 = Prata
    nivel = "Prata"
}else if (saldoVitorias >= 51 && saldoVitorias <= 80){ //Se vitórias for entre 51 e 80 = Ouro
    nivel = "Ouro"
}else if (saldoVitorias >= 81 && saldoVitorias <= 90){ //Se vitórias for entre 81 e 90 = Diamante
    nivel = "Diamante"
}else if (saldoVitorias >= 91 && saldoVitorias <= 100){ //Se vitórias for entre 91 e 100= Lendário
    nivel = "Lendário"
}else if (saldoVitorias >= 101 ){ //Se vitórias for maior ou igual a 101 = Imortal
    nivel = "Imortal"
}



console.log("O Herói tem de saldo de **{" + saldoVitorias + "}** está no nível de **{" + nivel + "}**");


function calculo (vitorias , derrotas){ return valor = vitorias - derrotas}

const {nms} = () =>{ 
    console.log("asdss");
}

