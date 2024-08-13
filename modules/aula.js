const prompt = require("prompt-sync")();

const professor = require("./professor.js");
const materia = require("./materia.js");
const sala = require("./sala.js");

const db = [];

let ultimoId = 0;

function getIndice(id) {
  const indice = db.findIndex((el) => el.id == id);

  if (indice == -1) {
    console.log("ID inexistente");
  }
  return indice;
}

function model(id = ++ultimoId) {
  let id_professor = 0;
  if (professor.listar()) {
    id_professor = parseInt(prompt("Digite o ID do professor: "));
  }

  let id_materia = 0;
  if (materia.listar()) {
    id_materia = parseInt(prompt("Digite o ID da Matéria: "));
  }

  let id_sala = 0;
  if (sala.listar()) {
    id_sala = parseInt(prompt("Digite o ID da5 Sala: "));
  }
  

  if (
    materia.mostrar(id_materia) &&
    sala.mostrar(id_sala) &&
    professor.mostrar(id_professor) &&
    professor.mostrar(id_professor).id_materia
  ) {
    return {
      id,
      id_professor,
      id_materia,
      id_sala
    };
  }

  console.log("Dados inválidos");
}

function criar() {
  const novo = model();

  if (novo) {
    db.push(novo);
    console.log("Registro criado com sucesso");
  }
}

function listar() {
  if (db.length == 0) {
    console.log("Nenhum registro encontrado");
    return false;
  }

  db.forEach((el) => console.log(el));
  return true;
}

function atualizar() {
  if (listar()) {
    const id = parseInt(prompt("Digite o ID: "));

    const indice = getIndice(id);

    if (indice != -1) {
      const novo = model(id);

      if (novo) {
        db[indice] = novo;
        console.log("Atualizado com sucesso");
      }
    }
  }
}

function remover() {
  if (listar()) {
    const id = parseInt(prompt("Digite o ID: "));

    const indice = getIndice(id);

    if (indice != -1) {
      db.splice(indice, 1);
      console.log("Removido com sucesso");
    }
  }
}

module.exports = {
  criar,
  listar,
  atualizar,
  remover,
};