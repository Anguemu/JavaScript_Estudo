                //Temos o PARÂMETRO ''n'' 
function parimpar(n){
    //Temos a AÇÃO que é o if completo dizendo o que irá acontecer
    if(n % 2 == 0){ 
        /*Esse é o RETORNO 
        No caso temos duas linhas com return, mas apenas uma será exutada. 
        Uma função em JavaScript só pode ter um retorno*/
        return 'Par!'

    }else{
        return 'Ímpar!'
    }
}
                        //Essa é a CHAMADA, ou seja, a linha que irá fazer o dispáro da ação.
console.log(`O número é ${parimpar(4)}`)


