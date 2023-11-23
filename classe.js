class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(magia) {
        let ataque;
        if (this.tipo === "mago") {
            ataque = `magia (${magia})`;
        } else {
            ataque = "usou um ataque desconhecido";
        }

        console.log(`O ${this.tipo} ${this.nome} atacou usando a ${ataque}`);
    }
}

const heroi1 = new Heroi("PyroFogo", 700, "mago");
heroi1.atacar("Foguinho Forte");
