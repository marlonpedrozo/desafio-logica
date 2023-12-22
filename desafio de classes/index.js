/*
criar uma classe que represente um heroi 
com as propriedades nom idade tipo
(guerreiro mago monje ou ninja)
tenha o metodo ATACAR
return
o tipo ataacou usando 
magia espada artes marciais shuriken 

*/
const { type } = require("os");

 

class Hero{
    constructor(name ,age , type){
        this.name = name
        this.age =  age
        this.type = type

        if(type == "mago"){
            this.attack = "Magia"
        }else if(type == "guerreiro"){
            this.attack = "Espada"
        }else if(type == "monge"){
            this.attack = "Artes Marciais"
        }else if(type == "ninja"){
            this.attack = "Shuriken"
        }
    }

    atacou(){
        console.log(`o ${this.type} atacou usando ${this.attack}`);
    }
}

let newHero = new Hero("misashi","55","monge");
console.log(newHero);
newHero.atacou();



