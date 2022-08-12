import {tarefas} from "./tarefas.js"

console.table(tarefas);

const novaTarefa = process.argv[2];
tarefas.push(novaTarefa)

console.table(tarefas)
