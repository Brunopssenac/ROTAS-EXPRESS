import express from "express"

const app = express();
const PORT = 3000;

app.get("/", (req,res) => {
res.send("Olá Mundo!"); 
});

app.get("/sobre", (req, res) => {
res.send("<h1> Sobre nós</h1>");
});

app.listen(PORT, () => {
console.log(`Servidor rodando na porta ${PORT}`);
});
