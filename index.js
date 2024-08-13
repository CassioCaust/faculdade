const prompt = require("prompt-sync")();

const turno = require("./modules/turno.js");
const curso = require("./modules/curso.js");
const materia = require("./modules/materia.js");
const aluno = require("./modules/aluno.js");
const professor = require("./modules/professor.js");
const sala = require("./modules/sala.js");
const aula = require("./modules/aula.js");
const aluno_aula = require("./modules/aluno_aula.js")

console.log("GERENCIAMENTO DE UMA FACULDADE");

while (true) {
  console.log(`
        O que deseja gerenciar?
        1 - Curso
        2 - Materia
        3 - Turnos de Aula
        4 - Alunos
        5 - Professor
        6 - Sala
        7 - Aula
        8 - Aluno para Aula
        0 - Sair
        `);

  const opcaoEntidade = prompt();

  let continuar;
  switch (opcaoEntidade) {
    case "1":
      continuar = true;
      while (continuar) {
        console.log(`
                    GERENCIAMENTO DE CURSO
    
                    1 - Criar
                    2 - Listar
                    3 - Atualizar
                    4 - Remover
                    5 - Sair
                    
                    `);

        const opcaoServico = prompt();

        switch (opcaoServico) {
          case "1":
            curso.criar();
            break;
          case "2":
            curso.listar();
            break;
          case "3":
            curso.atualizar();
            break;
          case "4":
            curso.remover();
            break;
          case "5":
            continuar = false;
            break;
          default:
            console.log("Opcão inválida");
            break;
        }
      }
      break;
    case "2":
      continuar = true;
      while (continuar) {
        console.log(`
                    GERENCIAMENTO DE MATERIA
    
                    1 - Criar
                    2 - Listar
                    3 - Atualizar
                    4 - Remover
                    5 - Sair
                    
                    `);

        const opcaoServico = prompt();

        switch (opcaoServico) {
          case "1":
            materia.criar();
            break;
          case "2":
            materia.listar();
            break;
          case "3":
            materia.atualizar();
            break;
          case "4":
            materia.remover();
            break;
          case "5":
            continuar = false;
            break;
          default:
            console.log("Opcão inválida");
            break;
        }
      }
      break;
    case "3":
      continuar = true;
      while (continuar) {
        console.log(`
                      GERENCIAMENTO DE TURNOS DE AULA
      
                      1 - Criar
                      2 - Listar
                      3 - Atualizar
                      4 - Remover
                      5 - Sair
                      
                      `);

        const opcaoServico = prompt();

        switch (opcaoServico) {
          case "1":
            turno.criar();
            break;
          case "2":
            turno.listar();
            break;
          case "3":
            turno.atualizar();
            break;
          case "4":
            turno.remover();
            break;
          case "5":
            continuar = false;
            break;
          default:
            console.log("Opcão inválida");
            break;
        }
      }
      break;
    case "4":
      continuar = true;
      while (continuar) {
        console.log(`
                      GERENCIAMENTO DE ALUNOS
      
                      1 - Criar
                      2 - Listar
                      3 - Atualizar
                      4 - Remover
                      5 - Sair
                      
                      `);

        const opcaoServico = prompt();

        switch (opcaoServico) {
          case "1":
            aluno.criar();
            break;
          case "2":
            aluno.listar();
            break;
          case "3":
            aluno.atualizar();
            break;
          case "4":
            aluno.remover();
            break;
          case "5":
            continuar = false;
            break;
          default:
            console.log("Opcão inválida");
            break;
        }
      }
      break;
      case "5":
        continuar = true;
        while (continuar) {
          console.log(`
                        GERENCIAMENTO DE PROFESSORES
        
                        1 - Criar
                        2 - Listar
                        3 - Atualizar
                        4 - Remover
                        5 - Sair
                        
                        `);
  
          const opcaoServico = prompt();
  
          switch (opcaoServico) {
            case "1":
              professor.criar();
              break;
            case "2":
              professor.listar();
              break;
            case "3":
              professor.atualizar();
              break;
            case "4":
              professor.remover();
              break;
            case "5":
              continuar = false;
              break;
            default:
              console.log("Opcão inválida");
              break;
          }
        }
        break;
        case "6":
        continuar = true;
        while (continuar) {
          console.log(`
                        GERENCIAMENTO DE SALAS
        
                        1 - Criar
                        2 - Listar
                        3 - Atualizar
                        4 - Remover
                        5 - Sair
                        
                        `);
  
          const opcaoServico = prompt();
  
          switch (opcaoServico) {
            case "1":
              sala.criar();
              break;
            case "2":
              sala.listar();
              break;
            case "3":
              sala.atualizar();
              break;
            case "4":
              sala.remover();
              break;
            case "5":
              continuar = false;
              break;
            default:
              console.log("Opcão inválida");
              break;
          }
        }
        break;
        case "7":
        continuar = true;
        while (continuar) {
          console.log(`
                        GERENCIAMENTO DE AULAS
        
                        1 - Criar
                        2 - Listar
                        3 - Atualizar
                        4 - Remover
                        5 - Sair
                        
                        `);
  
          const opcaoServico = prompt();
  
          switch (opcaoServico) {
            case "1":
              aula.criar();
              break;
            case "2":
              aula.listar();
              break;
            case "3":
              aula.atualizar();
              break;
            case "4":
              aula.remover();
              break;
            case "5":
              continuar = false;
              break;
            default:
              console.log("Opcão inválida");
              break;
          }
        }
        break;
        case "8":
        continuar = true;
        while (continuar) {
          console.log(`
                        GERENCIAMENTO DE ALUNOS PARA AULAS
        
                        1 - Criar
                        2 - Listar
                        3 - Atualizar
                        4 - Remover
                        5 - Sair
                        
                        `);
  
          const opcaoServico = prompt();
  
          switch (opcaoServico) {
            case "1":
              aluno_aula.criar();
              break;
            case "2":
              aluno_aula.listar();
              break;
            case "3":
              aluno_aula.atualizar();
              break;
            case "4":
              aluno_aula.remover();
              break;
            case "5":
              continuar = false;
              break;
            default:
              console.log("Opcão inválida");
              break;
          }
        }
        break;
    case "0":
      process.exit(0);
      break;
    default:
      console.log("Opcão inválida");
      break;
  }
}