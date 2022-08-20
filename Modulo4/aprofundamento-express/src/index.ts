import express, {request, Request, Response} from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { AddressInfo } from "net";

const app = express(); 
app.use(cors()); 

/*Exercicio 1
Faça novamente a instalação e configuração do Express na pasta do exercício. Para testar, crie um endpoint que aponte para o path “/ping”. Esse endpoint pode responder apenas com uma mensagem “pong”.*/

app.get("/ping", (req:Request, res:Response) => {
    res.send("Pong")
})

/* Exercício 02 
Acesse a API do JSONPlaceholder e observe os endpoints que buscam afazeres (”to dos”). Crie uma variável de tipo para representar cada afazer.
*/ 

let jsonParser = bodyParser.json();
type Afazeres = {
    userId: number, 
    id: number, 
    title: string, 
    completed: boolean
}

/*- Exercício 3
    
    Crie um array de afazeres para servir como base de dados da nossa API e utilize a tipagem desenvolvida no exercício anterior.*/

    let meusAfazeres:Afazeres[] = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      },
      {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
      },
      {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
      }
    ]
/*Exercício 4
    
    Construa um endpoint que retorne todos os afazeres do exercício anterior de acordo com um único status, ou seja, retorne ou afazeres concluídos ou somente os que ainda estão em andamento.*/

app.get("/todos", (req:Request, res:Response) => {

    if (req.query.completed === undefined || (req.query.completed !== "true" && req.query.completed !== "false")) 
    {
        res.status(200).send(meusAfazeres)
    }

    else {
        let sortCompleted = req.query.completed === "true"  

        let afazeresFiltrados:(Afazeres|undefined)[] = meusAfazeres.map( (todo) => {
            return todo
        }).filter( (todo) => {
            return todo.completed === sortCompleted 
        })
    
        res.status(200).send(afazeresFiltrados)
    }

    
})
/*exercicio 5
Construa um endpoint de criação de afazer. A resposta deve retornar o array de afazeres atualizado.*/
app.post('/criarAfazer', (req, res) => {
    const { userId, id, title, completed }: Afazeres = req.body;
    meusAfazeres.push({ userId, id, title, completed })
    res.send(meusAfazeres)
})

/*exercicio 6 
Construa um endpoint de edição do status de um afazer, ou seja, de completo para incompleto e vice-versa.*/

app.put('/editAfazer/:id', (req, res) => {
    const idAfazer = Number(req.params.id)
    const { completed } = req.body
    const tarefas: any = meusAfazeres.find((item) => item.id == idAfazer)
    tarefas.completed = completed
    res.send(tarefas)
})
/*exercicio 7 
Construa um endpoint que deleta um determinado afazer de acordo com sua id.*/

app.delete('/deleteAfazer/:id', (req, res) => {
    const idAfazer = Number(req.params.id)

    const indexArray = meusAfazeres.findIndex((afazer) => {
        afazer.id == idAfazer
    })
    if (indexArray === -1)
    return res.status(404).json({ error: "não enconstrado" })
    meusAfazeres.splice(indexArray, 1)
    return res.status(200).json({ sucess: "Excluido!" })
})

/*/exercicio 8 
Construa um endpoint que retorne todos os afazeres de uma determinada id de usuário.*/
app.get('/pegartarefas/:id',(req,res)=>{
const idAfazer = Number(req.params.id)
const findTarefas = meusAfazeres.filter((arr)=>{
    return arr.userId == idAfazer
});
res.status(200).send(findTarefas)
})
/*----------------------------------------------------------------------*/
app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;
