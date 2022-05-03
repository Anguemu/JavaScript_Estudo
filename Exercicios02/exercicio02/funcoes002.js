//Nesse caso colocando o ''=0'' estamos dizendo que se os parâmetros não forem colocados então o resultado será a partir desse que estão previamente definidos na váriavel.
function soma(n1=0, n2=0){
    return n1 + n2
}

console.log(soma(7, 8))