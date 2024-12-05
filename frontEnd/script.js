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
   const portugues = ` O Dia de Ação de Graças, em inglês “Thanksgiving Day ”, é comemorado todos os anos na 4ª quinta-feira de novembro, servindo como lembrete do valor da gratidão. Assim, esse é um dia de agradecimento, em que as famílias se reúnem e recordam - com gratidão a Deus - as coisas boas que aconteceram ao longo do ano.

    Origem:
    No século XVI, em Plymouth Colony, Massachusetts, região chamada de Nova Inglaterra, os habitantes da vila realizaram uma festa para comemorar a colheita dos alimentos daquele ano. Isso porque eles passaram por invernos muito rigorosos.
    
    Foi a partir de 1620, depois de muitas intempéries, que os peregrinos fundadores da vila passaram a festejar a boa safra.
    Em 1621, a fim de repetir o agradecimento pelas colheitas, o governador da vila organizou a “Festa no Outono” entre os colonos ingleses e americanos nativos. Esse evento foi composto de pratos variados com milho, peixe, patos e perus.
    
    Desde então o Dia de Açãos de Graças tornou-se tradicional nos Estados Unidos e no Canadá. 
    
    Outros países que comemoram o Dia de Ação de Graças são: 
    Granada (Caribe), Libéria (África), Ilha Norfolk (Austrália) e Holanda (Europa).`

    let textoPortugues = document.getElementById("traduzir")
    let texto = document.getElementById("texto") // recebe o texto que está em inglês (por padrão, 'texto' já é em inglês)

    function tesxtoPortugues() {
        textoPortugues.innerHTML = portugues
        texto.style.display = "none" // ao clicar no botão português, o texto em inglês vira display none (fica oculto)
    }


   const ingles = `Thanksgiving Day is celebrated every year on the fourth Thursday of November, serving as a reminder of the value of gratitude. It is a day of giving thanks, during which families gather and reflect—with gratitude to God—on the good things that happened throughout the year.

Origin:
In the 16th century, in Plymouth Colony, Massachusetts, a region called New England, the village inhabitants held a feast to celebrate the harvest of that year’s crops. This was because they had endured very harsh winters.

Starting in 1620, after many hardships, the founding pilgrims of the village began to celebrate the good harvest. In 1621, to give thanks again for the harvest, the village governor organized the "Autumn Festival" between the English settlers and Native Americans. This event included a variety of dishes such as corn, fish, ducks, and turkeys.

Since then, Thanksgiving Day has become a tradition in the United States and Canada.

Other countries that celebrate Thanksgiving are:
Grenada (Caribbean), Liberia (Africa), Norfolk Island (Australia), and the Netherlands (Europe).`

    let textoIngles = document.getElementById("traduzir")
    let text = document.getElementById("texto")

    function tesxtoIngles() {
        textoIngles.innerHTML = ingles
        text.style.display = "none"
    }










   const portuguese = ` Tradicionalmente, a data do dia de Ação de Graças
    é marcada por um jantar com peru assado, acompanhado de outros pratos
     típicos como purê de batatas, molho de cranberry e torta de abóbora, recheios e legumes.`

    let textoPortuguess = document.getElementById("traducao")
    let inicio = document.getElementById("text")

    function portugueseText() {
        textoPortuguess.innerHTML = portuguese
        inicio.style.display = "none"
    }


   const english = `Traditionally, Thanksgiving Day is marked by a 
   dinner featuring roasted turkey, accompanied by other traditional
    dishes such as mashed potatoes, cranberry sauce, pumpkin pie, stuffing, and vegetables.`

    let textoIngless = document.getElementById("traducao")
    let principal = document.getElementById("text")

    function englishText() {
        textoIngless.innerHTML = english
        principal.style.display = "none"
    }

