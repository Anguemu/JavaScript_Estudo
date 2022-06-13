let numberOfDrum = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrum; i ++ ){
    //o for está sendo usado para que possamos selecionar todos os elementos dentro da nossa classe Drum
    //Sem ter de declarar o vetor de cada elemento separadamente, assim então o i carrega todos os elementos 
    //e deixa salvo dentro dessa variável.
    //Poderia ser usado o While também, mas nesse caso sabemos o valor então o mais interessante é o for.
     document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        //AddEventListener serve para adicionar eventos, é separado pro dois parametros, o primeiro sendo um texto
        //com o tipo de evento, nesse caso foi o ''click'' e o outro é indicando o objeto que ira receber essa notificação

        

        /*O 'this' nesse contexto está indicando nosso '.drum' pois está inserido dentro dele, então quando pedimos para ser mostrado no console, conseguimos ver os elementos sendo clicados, nesse caso especificamos mais e pedimos apenas o conteúdo dentro do objeto, no caso as letras as quais estão vinculados.
        O this 'aponta' para o objeto.*/ 

        let buttonHTML = this.innerHTML;

        switch(buttonHTML){
            case 'w':
                let tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
            case 'a':
                let tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case 's':
                let tom3 = new Audio ('sounds/tom-3.mp3');
                tom3.play();
                break;
            case 'd':
                let tom4 = new Audio ('sounds/tom-4.mp3');
                tom4.play();
                break;
            case 'j':
                let snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;
            case 'k':
                let crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;
            case 'l':
                let kick_bass = new Audio('sounds/kick-bass.mp3');
                kick_bass.play();
                break;
            default: (buttonHTML)
            

                

        }
        
    });

   

    
}



/*document.querySelector("button").addEventListener("click", handlleClick)

function handleClick(){
    alert("I got clicked")
}*/
