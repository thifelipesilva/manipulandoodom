
//Deletar tarefas.
const BotaoDeleta = () => {   //criando o botao deletar.
    const botaoDeleta = document.createElement('button');

    botaoDeleta.innerHTML = 'deletar';
    botaoDeleta.addEventListener('click', deletarTarefa);

    return botaoDeleta;
}

const deletarTarefa = (evento) => {   //criando o evento deletar.
    const botaoDeleta = evento.target;
    const tarefaCompleta = botaoDeleta.parentElement;
    tarefaCompleta.remove();
    
    return botaoDeleta;
}

export default BotaoDeleta;