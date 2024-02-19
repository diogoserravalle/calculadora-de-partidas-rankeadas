let resultado = rankingJogador ( 200,3)

console.log("O Xp do jogador é  "+ resultado);

function rankingJogador(vitorias, derrotas, nivel) {
   let somatorio = vitorias - derrotas 
   
   


if(somatorio <10){
   nivel = "ferro"
   console.log("O jogador é nivel ferro")
	
   return somatorio
    }

else if (somatorio>=11 && somatorio <= 20){
   nivel = "bronze"
   console.log("O jogador é nivel broze")
   return somatorio
}

else if (somatorio >=21 && somatorio <= 50){
   nivel = "prata"
   console.log("O jogador é nivel prata")
   return somatorio
}

else if (somatorio>=51 && somatorio<= 80 ){
   nivel = "ouro"
   console.log("O jogador é nivel ouro")
   return somatorio
}

else if (somatorio>=81 && somatorio <=90 ){
   nivel = "diamante"
   console.log("O jogador é nivel diamante")
   return somatorio
}

else if (somatorio>=91 && somatorio <=100 ){
   nivel = "lendario"
   console.log("O jogador é nivel lendario")
   return somatorio
}

else if (somatorio>=101 ){
   nivel = "imortal"
   console.log("O heroi tem o saldo " + somatorio  + " e é do nivel "+ nivel)
   return somatorio
}

}

