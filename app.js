let listadeNumeroSorteado = [];
let numeroLimite = 10;
let numerSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1});
}
function exibirMensagemIncial(){
    exibirTextoNaTela('h1', 'Jogo do Numero Secreto por Brito')
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
};
exibirMensagemIncial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numerSecreto) {
        exibirTextoNaTela('h1', 'Acertou!' );
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabens, voce acertou o Numero Secreto ${numerSecreto} com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute ('disabled');
    } else {
        if(chute > numerSecreto) {
            exibirTextoNaTela('p', 'O numero e menor que o chute');
        } else {
            exibirTextoNaTela('p', 'O numero e maior que o chute');
        }
        tentativas++;
        limparCampo() ;
        }
    }


function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosDaLista = listadeNumeroSorteado.length;

    if (quantidadeDeElementosDaLista == numeroLimite) {
        listadeNumeroSorteado = [];
    }
    if (listadeNumeroSorteado.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
} else {
    listadeNumeroSorteado.push(numeroEscolhido);
    return numeroEscolhido;
}
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numerSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemIncial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
    }