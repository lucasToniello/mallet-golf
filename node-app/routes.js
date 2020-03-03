// routes
const path = "/home/lucas/Documents/hentai/nodejs/mallet-golf/";
const express = require('express');
const routes = express.Router();

const CampoController = require('./controllers/CampoController');
const JogadorController = require('./controllers/JogadorController');

routes.get("/", (req, res) => { 
	res.render("paginas/index");
});

routes.get("/sobre", (req, res) => {
	res.render("paginas/sobre");
});

routes.get("/sucesso", (req, res) => {
	res.render("paginas/sucesso");
});

routes.get("/campos", CampoController.index);
routes.get("/campos/cadastro", CampoController.cadastroGet);
routes.get("/campos/:id", CampoController.exibirGet);
routes.get("/jogadores", JogadorController.index);
routes.get("/jogadores/cadastro", JogadorController.cadastroGet);
routes.post("/campos/cadastro", CampoController.cadastroPost);
routes.post("/campos/:id", CampoController.exibirPost);
routes.post("/jogadores/cadastro", JogadorController.cadastroPost);

module.exports = routes;
