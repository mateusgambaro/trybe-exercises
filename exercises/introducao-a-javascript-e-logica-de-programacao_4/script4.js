let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: "Sim"
  };

  // 1. Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.

  console.log("Bem-binda,", info.personagem);

  // 2. Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

  console.log (info["recorrente"]);

  // 3. Faça um for/in que mostre todas as chaves do objeto.

  for(let key in info){
      console.log(key);
  }