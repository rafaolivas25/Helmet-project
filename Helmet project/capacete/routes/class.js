







class Dispositivo {

    //string id;
    //var pos;
    constructor(id, pos) {
        this.id = id;
        this.pos = pos;
    }

    increaseSalary() {
        this.pos += 100;
    }

}

class Jogador {
    //string nome;
    //dispositivo;
    constructor(nome,id) {
        this.nome = nome;
        this.dispositivo = new Dispositivo(id, 100);
    }

    increaseSalary() {
        this.dispositivo.increaseSalary();
    }
}


const testeclass = (request, response) => {

    joga = new Jogador('Alice', 100);

    console.log(joga.nome); // 👉️ 'Alice'
    console.log(joga.dispositivo.pos); // 👉️ 100

    joga.increaseSalary();

    console.log(joga.dispositivo.pos);  // 👉️ 200
    response.status(200).json(true)
}



module.exports = {
    testeclass,



}