// Desafio de código do Feelipão 

//Classificador de Nível de heroi



/*
    Se xp for menor 1000 = Ferro
    Se xp for entre 1001 e 2000 = Bronze
    Se xp for entre 2001 e 5000 = Prata
    Se xp for entre 6001 e 7000 = Ouro
    Se xp for entre 7001 e 8000 = Platina
    Se xp for entre 8001 e 9000 = Ascendente
    Se xp for entre 9001 e 10.000 = imortal
    Se xp for maior ou igual a 10.001  = Radiante
    */ 

    
    let nivelXP = 10001;
    let classificacao = ""
    let nomeDoHeroi = "Marlon"



  if(nivelXP <1000){
    classificacao = "Ferro",
    console.log(`o Heroi de nome ${nomeDoHeroi}, Tem ${nivelXP} em XP e está classificado como ${classificacao}`)

  }else if(nivelXP >1000 && nivelXP<=2000){
    classificacao = "Bronze",
    console.log(`o Heroi de nome ${nomeDoHeroi}, Tem ${nivelXP} em XP e está classificado como ${classificacao}`)
  }else if(nivelXP >2000 && nivelXP<=6000){
    classificacao = "Prata",
    console.log(`o Heroi de nome ${nomeDoHeroi}, Tem ${nivelXP} em XP e está classificado como ${classificacao}`)
  }else if(nivelXP >6000 && nivelXP<=7000){
    classificacao = "Ouro",
    console.log(`o Heroi de nome ${nomeDoHeroi}, Tem ${nivelXP} em XP e está classificado como ${classificacao}`)
  }else if(nivelXP >7000 && nivelXP<=8000){
    classificacao = "Platina",
    console.log(`o Heroi de nome ${nomeDoHeroi}, Tem ${nivelXP} em XP e está classificado como ${classificacao}`)
  }else if(nivelXP >8000 && nivelXP<=9000){
    classificacao = "Ascendente",
    console.log(`o Heroi de nome ${nomeDoHeroi}, Tem ${nivelXP} em XP e está classificado como ${classificacao}`)
  }else if(nivelXP >9000 && nivelXP<=10000){
    classificacao = "Imortal",
    console.log(`o Heroi de nome ${nomeDoHeroi}, Tem ${nivelXP} em XP e está classificado como ${classificacao}`)
  }else if(nivelXP >=10001){
    classificacao = "Radiante",
    console.log(`o Heroi de nome ${nomeDoHeroi}, recebeu ${nivelXP} em XP e está classificado como ${classificacao}`)
  }else{
    console.log("Algo deu errado!")
    console.log("Por favor retorne preencha os campos corretamente")
  };
