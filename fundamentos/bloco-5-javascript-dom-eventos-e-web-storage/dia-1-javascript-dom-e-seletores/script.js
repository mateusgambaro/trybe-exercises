console.log (document.getElementById("title"));
console.log (document.getElementsByClassName(".main-content"));
console.log (document.getElementsByTagName(".center-content p"));

// 1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
document.querySelector(".center-content p").innerText = "Pretendo estar trabalhando com tecnologia e sustentabilidade, em prol de um mundo melhor";

// 2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function changeColor (elements, color){
    document.querySelectorAll(elements)[0].style.backgroundColor = color;
}

changeColor (".main-content", "rgb(76,164,109)");

// 3. Crie uma função que mude a cor do quadrado vermelho para branco.
function changeColor2(elements, color){
    document.querySelectorAll(elements)[0].style.backgroundColor = color;
}

changeColor2 (".center-content", "white");

// 4. Crie uma função que corrija o texto da tag <h1>.

function corrigeH1 (h1){
    document.querySelector(h1).innerText = "Exercício 5.1 - JavaScript"
}
corrigeH1("#title");

// 5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

function paragraphUpperCase (){
    let paragraph = document.getElementsByTagName('p')[0];

    paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
}
   paragraphUpperCase();

// 6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function showParagraphs(){
    let paragraphs = document.getElementsByTagName('p');

    for(let index = 0; index < paragraphs.length; index += 1){
        console.log(paragraphs[index].innerHTML);
    }
}
showParagraphs();