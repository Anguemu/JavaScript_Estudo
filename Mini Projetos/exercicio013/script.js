function gerar(){
    let numerotab = document.querySelector('input#numeromult')
    let tab = document.getElementById('seltab')

    if (numerotab.value.length == 0){
        alert('Digite um número por-favor!')
    }else{
        let n = Number(numerotab.value)
        let c = 1
        tab.innerText = ''
        while ( c <= 10){
            let item = document.createElement('option')
            item.text = `${c} x ${n} = ${c*n}`
            //Criar o ''value'' serve para outras linguagens indentificarem os itens que foram criados.
            item.value = `tab${c}`
            tab.appendChild(item)
            c++

        }
    }
    

   
    
}