var idade = 66
var resposta = 'sim'
console.log(`Você tem ${idade} anos`)
if (idade < 16){
    console.log('Não vota')
} else if (idade < 18 || idade > 65){
    console.log('Voto não obrigatório')
    console.log('Deseja votar? ' + resposta)
    if(resposta == 'sim'){
        console.log('Seu voto foi confirmado!')
    }
    
} else {
    console.log('Voto obrigatório')
}
