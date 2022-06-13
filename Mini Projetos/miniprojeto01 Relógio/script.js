

function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //data.getHours()
    var hora = data.getHours()
    
    if (hora >= 6 && hora < 12 ){
        // Bom dia
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#d4bda6'

    } 
    else if (hora >= 12 && hora < 18){
        // Boa tarde
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#986461'
    }
    else{
        // Boa noite
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#15617e'
    }
    var minuto = data.getMinutes()
    
    if(minuto <= 9){
        msg.innerHTML = `Agora são ${hora}:0${minuto}`

    }else{
        msg.innerHTML = `Agora são ${hora}:${minuto}`
    }
}