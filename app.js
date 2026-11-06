const lista = []
const favoritos = []

class Cachorro{
    constructor(id, img, nome, desc, port, idad, pers, conv, vac){
        this.id = id;
        this.imagem = img;
        this.nome = nome;
        this.descricao = desc;
        this.porte = port;
        this.idade = idad;
        this.personalidade = pers;
        this.convivencia = conv;
        this.vacinas = vac;
    }
    comoCard(){
        const card = document.createElement("article");
        card.setAttribute("class", "dog-card");
        // card.classList.add("dog-card");
        card.innerHTML = `
        <img src"${this.imagem}" src="${this.nome}"/>
        <div class="dog-card-body">
            <h3>${this.nome}</h3>
            <div class="dog-meta">${this.porte}</div>
            <div class="dog-meta">${this.personalidade}</div>
        </div>
        `
        return card;
    }
}

window.addEventListener("load", function(e){
    const c1 = new Cachorro(1, "./img/1.jpg", "Balu", "É um viralata bem travesso", "Pequeno", 6, "Alegre e companheiro", "Boa", 3
    )
    const c2 = new Cachorro(2, "./img/2.jpg", "Mel", "Anjo de prata", "Medio", 12, "Calma e generosa", "Boa", 9
    )
    const c3 = new Cachorro(3, "./img/3.jpg", "Aia", "Dona da porra toda", "Pequeno", 4, "Braba e protetora", "Boa", 3
    )
    lista.push(c1, c2, c3);
    exibirLista();

});

function exibirLista(qta = null, nome=null){
    if (qtd == null){
        tam = qtd;
    }else{
        tam = lista.length;
    }
    const dog_list = document.getElementById("dog-list");
    for (let i = 0; i < tam; i ++){
        let item = lista[i];
        

    }


};