//concluir tarefas.
 
const BotaoConclui = () => {   //criando o botao concluir.
    const botaoConclui =  document.createElement('button');

    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = "Concluir";
    botaoConclui.addEventListener('click', concluirTarefa)

    return botaoConclui;
}

const concluirTarefa = (evento) => {   //criando o evento concluir.

    const botaoConclui = evento.target;//botaoConclui capturamos qual elemento foi clicado.

    const tarefaCompleta = botaoConclui.parentElement; //utilizamos a propriedade parentElement para subir um nó na árvore- capturar a LI, pai do botao.

    tarefaCompleta.classList.toggle('done'); //colocamos o método toggle que vai adicionar a classe done quando clicarmos no botão.
}

export default BotaoConclui