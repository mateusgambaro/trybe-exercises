let nota = "50";

if (nota >= 80) {
    console.log("Parabéns, você foi aprovado");
}

else if (nota < 80 && nota >= 60) {
    console.log("Você está na lista de espera");
}


else (nota < 60) {
    console.log("Você foi reprovado");
}


switch (nota){
    case "Parabéns, você foi aprovado";
     console.log("Aprovada");
     break;

     case "Você está na lista de espera";
      console.log("Lista");
      break;

    case "Você foi reprovado";
     console.log("Reprovado");
     break;

     default;
      console.log("não se aplica");
}

