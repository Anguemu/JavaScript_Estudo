function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    //length = conta os caracteres
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Essa data de nascimento não existe tente outra')
    }else{
        var fsex = document.getElementsByName('rsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        //creatElement = cria o elemento pelo javascript como se estivesse sendo feito pelo HTML
        var img = document.createElement('img')
        //setAttribute coloca se é class ou id depois o nome
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Masculino'
            if(idade <= 4){
                img.setAttribute('src', 'fotos/bebe.png')
            }
            else if (idade >= 5 && idade <=15 ){
                img.setAttribute('src', 'fotos/menino.png')
            }
            else if (idade >= 16 && idade <=45 ){
                img.setAttribute('src', 'fotos/homem.png')
            }else{
                img.setAttribute('src', 'fotos/senhor.png')
            }

        }else if (fsex[1].checked){
            genero = 'Feminino'
            if(idade <= 4){
                img.setAttribute('src', 'fotos/bebe.png')
            
            }else if (idade >= 5 && idade <=10 ){
                img.setAttribute('src', 'fotos/menina.png')
            }
            else if (idade >= 16 && idade <= 45){
                img.setAttribute('src', 'fotos/mulher.png')
            }else{
                img.setAttribute('src', 'fotos/senhora.png')
            }
        }else{
            genero = 'Indeterminado'
            if (idade <=4){
                img.setAttribute('src', 'fotos/bebe.png')
            }
            else{
                img.setAttribute('src', 'fotos/indeterminado.png')
            }
            
        }

        res.style.textAlign = 'Center'
        res.innerHTML = `Detectamos o gênero ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}