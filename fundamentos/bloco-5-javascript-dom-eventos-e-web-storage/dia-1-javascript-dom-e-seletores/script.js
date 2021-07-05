console.log (document.getElementById("title"));
console.log (document.getElementsByClassName(".main-content"));
console.log (document.getElementsByTagName(".center-content p"));

document.querySelector(".center-content p").innerText = "Pretendo estar trabalhando com tecnologia e sustentabilidade, em prol de um mundo melhor";

function changeColor (elements, color){
    document.querySelectorAll(elements)[0].style.backgroundColor = color;
}

changeColor (".main-content", "rgb(76,164,109)");

function changeColor2(elements, color){
    document.querySelectorAll(elements)[0].style.backgroundColor = color;
}

changeColor2 (".center-content", "white");