function contar(){
    let ini = document.querySelector('#inicio')
    let fim = document.querySelector('#fim')
    let passo = document.getElementById('passo')
    let contagem = document.getElementById('contagem') 

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        window.alert('Contagem inválida!')

    }else if (passo.value == 0){
        window.alert('Estou parado')
    } 
    else{
        //Number(ini.value) = transforma de texto para número, declaro number e a variavel para se transformar.
        contagem.innerHTML = `Contando:`
        let ininumber = Number(ini.value)
        let fimnumber = Number(fim.value)
        let passonumber = Number(passo.value)
        
        if(ininumber <= fimnumber){

        for (let cont = ininumber; cont <= fimnumber; cont += passonumber)
        {
            contagem.innerHTML += ` ${cont} \u{1F449} `
        }
        contagem.innerHTML += `\u{1F3C1}`
        } else if (ininumber >= fimnumber){

            for(let cont = ininumber; cont >= fimnumber; cont -= passonumber){

                contagem.innerHTML += `${cont} \u{1F449}`
            }
            contagem.innerHTML += `\u{1F3C1}`
        }
        

    }
    
    

}

