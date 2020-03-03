// Controller do model de Jogador

const mongoose = require('mongoose');
const Jogador = mongoose.model('Jogador');

module.exports = {
	async index(req, res){
		var jogadores = await Jogador.find();

		jogadores.sort(function(a, b){
			return b['elo'] - a['elo'];
		});

		return res.render("paginas/jogadores/show", {
			jogadores : jogadores,
		});
	},

	async cadastroGet(req, res){
		return res.render("paginas/jogadores/cadastro", {});
	},

	async cadastroPost(req, res){

    	var diff_ms = Date.now() - Date.parse(req.body.nascimento);
    	var age_dt = new Date(diff_ms); 
    	var idade = Math.abs(age_dt.getUTCFullYear() - 1970);

		var novoJogador = await Jogador.create({
			email : req.body.email,
			senha : req.body.senha,
			name : req.body.name,
			nascimento : req.body.nascimento,
			idade : idade,
			elo : 1000,
		});

		console.log("Novo Jogador:\n" + novoJogador);
		return res.redirect("/sucesso");
	}
};