// Controller do model de Campo

const mongoose = require('mongoose');
const Campo = mongoose.model('Campo');

module.exports = {
	async index(req, res){
		var campos = await Campo.find();

		return res.render("paginas/campos/show", {
			campos : campos,
		});
	},

	async exibirGet(req, res){
		var id = req.params.id;
		var campo = await Campo.findById(id);

		return res.render("paginas/campos/exibir", {
			id : id,
			campo : campo,
		});
	},

	async exibirPost(req, res){
		var body = [];

		for (var key in req.body){
			body.push(req.body[key]);
		}

		return res.redirect("/sucesso");
	},

	async cadastroGet(req, res){
		return res.render("paginas/campos/cadastro", {});
	},

	async cadastroPost(req, res){
		var body = [];

		for (var key in req.body){
			body.push(req.body[key]);
		}

		var novoCampo = await Campo.create({
			name : body.shift(),
			par : body,
		});

		console.log("Novo campo:\n" + novoCampo);
		return res.redirect("/sucesso");
	}
};