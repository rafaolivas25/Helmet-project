server_jogo = [];

class Dispositivo {
    constructor(id) {
        this.id = id;
    }

    posicao_atual(pos) {
        this.pos = pos;
    }

}
class Jogador {

    constructor(nome,id) {
        this.nome = nome;
        this.dispositivo = new Dispositivo(id);
        this.pontuacao = 0;
    }
    pontuacao_atual(pos) {
        this.pontuacao = pos;
    }

}
class Equipa {

    constructor(nome) {
        this.nome = nome;
        this.jogadores = [];
    }

    add(nome,id) {
        this.jogadores.push(new Jogador(nome,id));
    }
}
class Jogo {

    constructor(id) {
        this.id = id;
        this.equipas = [];
        this.bandeiras = [];
    }
    add_equipas(equipa) {
        this.equipas.push(equipa);
    }
    add_bandeiras(id) {
        this.bandeiras.push(new Dispositivo(id));
    }
    final(nome,id) {
        this.bandeiras[0].pontuacao_atual=null;
    }
    procura_dispo_jogador(id){
        for (let equipa of this.equipas) {
            for (let value of equipa.jogadores) {
                if(value.dispositivo.id==id)
                {
                    return value;
                }
            }
        }
        return null;
    }
    up_pos(id,pos) {

        var value = this.procura_dispo_jogador(id)

        if(value!=null)
        {
            value.dispositivo.pos==pos;
        }
        else {
            for (let bandeira of this.bandeiras) {
                if (bandeira.dispositivo.id == id) {
                    bandeira.dispositivo.pos==pos;
                }
            }
        }
    }

}

function terminado(arg) {
    server_jogo.splice(arg, 1, );
    console.log(`jogo terminado => ${arg}`);
}
const criar_jogo = (request, response) => {
    //const fruits = ["Banana", "Orange", "Apple", "Mango"];
    //console.log(fruits);
    //fruits.splice(1, 1, );
    //console.log(fruits);

    val = server_jogo.length;
    server_jogo.push(new Jogo(val));
    //setTimeout(terminado, 5000, val);
    response.status(200).json(JSON.stringify(server_jogo.length))
}

const criar_jogo_t = (request, response) => {
    val = server_jogo.length;
    tempo_segundo=60*1;
    server_jogo.push(new Jogo(val));
    setTimeout(terminado, tempo_segundo*1000, val);
    response.status(200).json(JSON.stringify(server_jogo.length))
}

const remove = (request, response) => {
    server_jogo=[];
    response.status(200).json(JSON.stringify(server_jogo))
}
const mostar = (request, response) => {

    response.status(200).json(JSON.stringify(server_jogo))

}
function myFunc(arg) {
    console.log(`arg was => ${arg}`);
}

const add_bandeira = (request, response) => {
    val = 0;
    server_jogo[val].add_bandeiras(1,1);
    response.status(200).json(JSON.stringify(true))
}

const add_equipa = (request, response) => {
    val = 0;
    equipa2 = new Equipa("fifa");
    equipa.add("zidane",97)
    equipa.add("muller",91)
    equipa.add("kudus",88)
    server_jogo[val].add_equipas(equipa2);
    response.status(200).json(JSON.stringify(true))
}
const testecl = (request, response) => {

    setTimeout(myFunc, 5000, 'funky');

    joga = new Jogo(1);
    joga.add_bandeiras(1,1)
    joga.add_bandeiras(2,43)

    equipa = new Equipa("ola");
    equipa.add("jaquim",46)
    equipa.add("alberto",7)
    equipa.add("depay",85)
    joga.add_equipas(equipa)

    equipa2 = new Equipa("fifa");
    equipa.add("zidane",97)
    equipa.add("muller",91)
    equipa.add("kudus",88)
    joga.add_equipas(equipa2)
    console.log(joga.procura_dispo_jogador("88"));
    joga.up_pos("88")

    server_jogo.push(joga);

    response.status(200).json(JSON.stringify(joga))

}



module.exports = {
    testecl,
    criar_jogo,
    mostar,
    remove,
    criar_jogo_t,
    add_bandeira,
    add_equipa,




}