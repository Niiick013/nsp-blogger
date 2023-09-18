function veriricarResolucao() {
    // a variável recebe o valor da largura da tela
    var larguraDaTela = window.innerWidth;

    // configuração para tablets
    if(larguraDaTela >= 768 && larguraDaTela < 992) {
        // desativa evendo de ocultar conteúdo do aside lateral
        document.getElementById("linkAddOrigin").onclick = null;
        document.getElementById("psItensOrigin").onclick = null;
        document.getElementById("ltContainerOrigin").onclick = null;
        document.getElementById("participeOrigin").onclick = null;

        // desativa evendo de ocultar conteúdo do aside inferior
        document.getElementById("parceirosOrigin").onclick = null;
        document.getElementById("tagsOrigin").onclick = null;
        document.getElementById("viewsOrigin").onclick = null;

        // exibe o campo de tags
        document.getElementById("tagsMain").style.display = "block";

        // configuração para desktop e telas grandes
    } else if(larguraDaTela >= 992) {
        // desativa evendo de ocultar conteúdo do aside lateral
        document.getElementById("linkAddOrigin").onclick = null;
        document.getElementById("psItensOrigin").onclick = null;
        document.getElementById("ltContainerOrigin").onclick = null;
        document.getElementById("participeOrigin").onclick = null;

        // desativa evendo de ocultar conteúdo do aside inferior
        document.getElementById("parceirosOrigin").onclick = null;
        document.getElementById("tagsOrigin").onclick = null;
        document.getElementById("viewsOrigin").onclick = null;
    }
}

function clickMenu(nome) {
    if(nome.style.display == 'block') {
        nome.style.display = 'none';

    } else {
        nome.style.display = 'block';
    }
}