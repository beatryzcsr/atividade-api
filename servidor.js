 const server = require ("express");
 const app= server();

 app.use (server.json());

 app.get ("/" , (req, res) => {
    res.send ("API funcionando😮");
});

//DADOS
let ferramentas = [
    {
      "id": 1,
      "nome": "Martelo",
      "preco": 25,
      "disponivel": true
    }, 

    {
      "id": 2,
      "nome": "Chave de Fenda",
      "preco": 15,
      "disponivel": true
    },

    {
      "id": 3,
      "nome": "Alicate",
      "preco": 32,
      "disponivel": false
    },

    {
      "id": 4,
      "nome": "Serrote",
      "preco": 54,
      "disponivel": true
    }
  ]


//GET- listar 
app.get ("/ferramentas", (req,res) => {
    res.json (ferramentas);
});


//listar só 1
app.get("/ferramentas/:id", (req, res) => {
    const id = Number(req.params.id);
    const ferramenta = ferramentas.find(u => u.id === id);
    res.json(ferramenta)
})
 

//POST- criar mais
app.post("/ferramentas", (req, res) => {
    const novo = {
        id: ferramentas.length + 1,
        nome: req.body.nome
    }
    ferramentas.push(novo)
    res.status(201).json(novo)
})


//PUT- editar uma
app.put ("/ferramentas/:id", (req,res) => {
    const id= Number (req.params.id);
    const ferramenta= ferramentas.find (u=> u.id === id);

if (!ferramenta) {
    return res.status (404).json ({erro:"Ferramenta não encontrada"});
}

 ferramenta.nome = req.body.nome;
    res.json(ferramenta);

});

//DELETE- EXCLUIR UMA
app.delete ("/ferramentas/:id", (req,res) => {
    
    const id = Number (req.params.id);
    ferramentas= ferramentas.filter(u=> u.id !== id);
    res.json ({ mensagem: "Ferramenta removida"})
});



app.listen (3000, () => {
    console.log ("Servidor rodando: http://localhost:3000");
});