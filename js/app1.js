const balu = {
<<<<<<< HEAD
    nome: 'balu',
    cor: "amarelo",
    altura : 0.40,
    peso : 11.0, 
    raca : "pudom",
    latir(){
        alert("au!");
    },
    comer(kg){
        this.peso += kg;
        alert("comi, meu peso é " + this.peso.toFixed(2));
    },
    cagar(kg){
        this.peso -= kg;
        alert("caguei, meu peso é " + this.peso.toFixed(2));
    },
    saudar(){
        msg = `ola, meu nome é ${this.nome}\n`;
        msg += `altura: ${this.altura} | peso: ${this.peso}\n`;
        msg += `sou da raca ${this.raca} \n`
=======
    nome:"Balu Brasil",
    cor:"preto",
    altura:0.58,
    peso:11.5,
    raca:"vira-lata",
    latir(){
        alert("au au");
    },
    comer(kg){
        this.peso = this.peso + kg;
        alert("Comi");
    },
    cagar(kg){
        this.peso = this.peso - kg;
        alert("Caguei");
    },
    saudar(){
        let msg = `Olá meu nome é ${this.nome}\n`;
        msg = msg+`Cor: ${this.cor} Raça:${this.raca}\n`
        msg = msg+`Peso: ${this.peso}\n`
        msg = msg+`Altura: ${this.altura}\n`
>>>>>>> 02920f788842b5d93b5ede9f2b73d0fd78ded53a
        alert(msg)
    }
}