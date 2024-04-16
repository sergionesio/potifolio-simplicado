/*
Objetivo 1 - quando o usuario clicar no botao de mostrar mais de abrir os projetos que estao escondidos no html

Passo 1 - pegar o botao mostrar mais no js para poder verificar quando o usuario clicar em cima dele

Passo 2 - indentificar o clique no botao

Passo 3 - adicionar a classe "ativo" nos projetos escondidos

Objetivo 2 - escoder o botao de mostrar mais

Passo 1 pegar o botao e escoder ele

*/

//Objetivo 1 - quando o usuario clicar no botao de mostrar mais de abrir os projetos que estao escondidos no html

//Passo 1 - pegar o botao mostrar mais no js para poder verificar quando o usuario clicar em cima dele

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo');

botaoMostrarProjetos.addEventListener('click', () => {
     //Passo 3 - adicionar a classe "ativo" nos projetos escondidos
        projetosInativos.forEach(projetosInativos => {
            projetosInativos.classList.add('ativo');
        });

//Objetivo 2 - escoder o botao de mostrar mais
//Passo 1 pegar o botao e escoder ele
botaoMostrarProjetos.classList.add('remover')

 })