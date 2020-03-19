const mongoose = require('mongoose');

const JogadorSchema = new mongoose.Schema({

	email : {
		type : String,
		required : true,
	},

	senha : {
		type : String,
		required : true,
	},

	name : {
		type : String,
		required : true,
	},

	nascimento : {
		type : Date,
		required : true,
	},

	idade : {
		type : Number,
		required : true,
	},

	elo : {
		type : Number,
		required : true
	},

	createdAt : {
		type : Date,
		default : Date.now,
	},
});

mongoose.model('Jogador', JogadorSchema);