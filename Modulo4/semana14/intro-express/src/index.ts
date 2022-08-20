import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

type User = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string,
    posts: Post[]
}

type Post = {
    id: number,
    title: string, 
    body: string,
    userId: number
}

let users: User[] = [
    {
        id: 1,
        name: "Meredith Grey",
        phone: "5 999-888-777",
        email: "meredith.sol@greysloan.com",
        website: "greysanatomy.com/Grey",
        posts: [
            {
                id: 1,
                title: "Ame mais", 
                body: "No final das contas, o fato de termos coragem para estarmos de pé é motivo suficiente para comemorar!",
                userId: 1
            },
        ]
    },
    {
        id: 2,
        name: "Cristina Yang",
        phone: "5 789-456-123",
        email: "deusa-da-cardio@greysloan.com",
        website: "greysanatomy.com.br/cristina",
        posts: [
            {
                id: 2,
                title: "Se ame mais",
                body: "Dane-se a beleza, eu sou brilhante! Se quiser me elogiar, elogie meu cérebro!",
                userId: 2
            }
        ]
    },
    {
        id: 3,
        name: "Miranda Bailey",
        phone: "5 333-555-333",
        email: "chefe-bailey-nazista@greysloan.com",
        website: "greysanatomy.com.br/Bailey",
        posts: [
            {
                id: 3,
                title: "Seja forte",
                body: "Meu nome é Miranda, sou chefe do Grey Sloan, acho que estou tendo um ataque cardíaco",
                userId: 3
            }
        ]
    },
    {
        id: 4,
        name: "Dereck Shepherd",
        phone: "5 333-555-333",
        email: "chefe-bailey-nazista@greysloan.com",
        website: "greysanatomy.com.br/Bailey",
        posts: [
            {
                id: 4,
                title: "PS: Meredht",
                body: "Você é como um abrisa de ar fresco, como se eu estivesse me afogando e você me salvasse",
                userId: 4
            }
        ]
    }
]

app.get("/", (req, res) => {
    res.send("Hello from Express")
})

app.get("/users", (req, res) => {
    res.send(users)
})

app.get("/posts", (req, res) => {

    const allPosts = users.map((user) => {
        return user.posts
    }).flat(1)

    res.send(allPosts)
})

app.get("/posts/:userId", (req, res) => {

    const userId = req.params.userId
    const indexUser = users.findIndex((usuario) => {
        return usuario.id === Number(userId)
    })

    indexUser >= 0 ? res.send(users[indexUser].posts) : res.send("ID não encontrado")
})

app.listen(3003, () => {
    console.log("Server rodando em localhost:3003")
});


