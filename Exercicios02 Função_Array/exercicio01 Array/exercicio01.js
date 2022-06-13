let idade = [10,20,30,40]

console.log(idade)

//Você define pelo indice onde o valor vai ser colocado dentro do Array, nesse caso será colocado na posição 4
//sendo que os vetores são contados a partir de ''0'' não de ''1''
idade[4] = 6

//Insere dentro do Array um elemento, nesse caso o número 9  
idade.push(9)

//Length é um atributo que mostra quantos elementos á na váriavel indicada 
idade.length

//Arruma os elementos em ordem crescente
idade.sort()

/*idade.sort()
console.log(idade)
console.log(`O vetor possuí ${idade.length} posições.`)
console.log(`O primeiro valor do vetor é ${idade[0]}`)*/

/*Formas de exibir os valores dentro do vetor sem repetir vários códigos
let n = 0

while( n < idade.length){
    console.log(idade[n])
    n++
}

for(n = 0; n < idade.length;n++){
    console.log(idade[n])
}

for(n in idade){
    console.log(idade[n])
}*/


//O indexOf pesquisa um valor dentro do vetor e retorna se existe e sua posição, sendo o valor entre () o valor em si e não sua posição em ordem de vetor
//Caso o valor não exista ele retorna o valor de -1

//Tem
console.log(idade.indexOf(10))
//Não tem
console.log(idade.indexOf(25))

