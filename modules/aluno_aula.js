const prompt = require("prompt-sync")();

const aula = require("./aula.js");
const aluno = require("./aluno.js");

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

  let id_aula = 0;
  if (aula.listar()) {
    id_aula = parseInt(prompt("Digite o ID da Aula: "));
  }

  let id_aluno = 0;
  if (aluno.listar()) {
    id_aluno = parseInt(prompt("Digite o ID do Aluno: "));
  }
  

  if (
    aula.mostrar(id_aula) &&
    aluno.mostrar(id_aluno)) {
    return {
      id,
      id_aula,
      id_aluno
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