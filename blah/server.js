const express = require("express");
const { PrismaClient } = require("@prisma/client")
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());

//MIDDLEWARE COOKIE
app.use(cookieParser())

const prisma = new PrismaClient()

app.listen(8080, () => {
    console.log("O servidor está ativo.")
})

//REGISTER
app.post("/register", async (req, res) => {
    try {
        const { nome, senha } = req.body;

        await bcrypt.hash(senha, 10).then((hash) => {
            prisma.user.create({
                data: {
                    nome: nome,
                    senha: hash,
                }
            }).then(() => {
                res.json("Usuário criado.")
            }).catch((err) => {
                res.json({ error: "Usuário já exsite." })
            });
        });
    } catch (err) {
        res.json(error);
    }
});

//LOGIN
app.post("/login", async (req, res) => {
    try {
        const { nome, senha } = req.body;
        const usuario = await prisma.user.findUnique({ where: { nome } });

        if (!usuario) {
            res.json({ error: "Algo deu errado." });
        }

        const pSenha = usuario.senha;
        bcrypt.compare(senha, pSenha).then((match) => {
            if (!match) {
                res.status(400).json({ error: "Senha e usuário incorretos" })
            } else {
                res.json("Você está logado.");
            }
        });

    } catch (err) {
        console.log(err);
    }
})


//VALIDAÇÃO
app.get("/", async (req, res) => {
    const usuarios = await prisma.user.findMany()
    res.json(usuarios)
})