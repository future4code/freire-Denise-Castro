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

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;
