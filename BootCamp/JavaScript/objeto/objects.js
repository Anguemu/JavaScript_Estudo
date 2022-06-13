let housekeeper1 = {
    YersOfExperience: 12,
    nome: 'jane',
    cleanigRepertoire: ["bathroom", "lobby", "bedroom"]
}
//Criação de um objeto em javaScript.

console.log(housekeeper1.cleanigRepertoire);


//Função construtora ou Constructor Function
//Funções desse tipo devem ter desde a primeira letra maiúscula a todas as outras primeiras letras de outras palavras.
/*Pense como um banco de dados, primeiro criamos a tabela e declaramos seus campos, nesse caso
nome
idade
permissão de trabalho
linguas
Tendo isso criado iremos criar inputs(entradas) para esses campos */
function BellBoy (name, age, hasWorkPemit, Languages){
    this.name = name;
    this.age = age;
    this.hasWorkPemit = hasWorkPemit;
    this.Languages = Languages;
}
    
let bellboy1 = new BellBoy('Lucas', 24, true, ['portuguese','english']);

console.log(bellboy1.age);