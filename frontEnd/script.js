// ------------------------ BOTÃO DE MENU -----------

document.addEventListener('DOMContentLoaded', function() {
    let menu = document.getElementById('menu-opcoes');
    let icon = document.querySelector('.bx-menu');

    icon.addEventListener('click', function() {
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });

    // Fecha o menu se clicar fora dele
    document.addEventListener('click', function(event) {
        if (!icon.contains(event.target) && !menu.contains(event.target)) {
            menu.style.display = 'none';
        }
    });
});





// ------------------------   BOTÃO PARA TRADUZIR -----------
   const traducao = ` O Dia de Ação de Graças, em inglês “Thanksgiving Day ”, é comemorado todos os anos na 4ª quinta-feira de novembro, servindo como lembrete do valor da gratidão. Assim, esse é um dia de agradecimento, em que as famílias se reúnem e recordam - com gratidão a Deus - as coisas boas que aconteceram ao longo do ano.

    Origem:
    No século XVI, em Plymouth Colony, Massachusetts, região chamada de Nova Inglaterra, os habitantes da vila realizaram uma festa para comemorar a colheita dos alimentos daquele ano. Isso porque eles passaram por invernos muito rigorosos.
    
    Foi a partir de 1620, depois de muitas intempéries, que os peregrinos fundadores da vila passaram a festejar a boa safra.
    Em 1621, a fim de repetir o agradecimento pelas colheitas, o governador da vila organizou a “Festa no Outono” entre os colonos ingleses e americanos nativos. Esse evento foi composto de pratos variados com milho, peixe, patos e perus.
    
    Desde então o Dia de Açãos de Graças tornou-se tradicional nos Estados Unidos e no Canadá. 
    
    Outros países que comemoram o Dia de Ação de Graças são: 
    Granada (Caribe), Libéria (África), Ilha Norfolk (Austrália) e Holanda (Europa).`

    let textoTraduzido = document.getElementById("traduzir")

    function mudarTexto() {
        textoTraduzido.innerHTML = traducao
    }
    
