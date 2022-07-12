const express = require('express');

const app = express() // inicializando o express

app.listen('3000'); // ouvindo a porta 3000

// app.route('/').get((req, res) => res.send('Olá express!'))
// app.route('/sobre').get((req, res) => res.send('Olá sobre!'))

// middleware: nessa etapa vou transformar tudo em json
app.use(express.json())

app.route('/').get((req, res) => res.send(author))

let author = "Morgana Ribeiro"

/* app.route('/').post((req, res) => res.send(req.body))  AULA POST */

app.route('/').put( (req, res) => {
    author = req.body.author
    res.send(author)
})

