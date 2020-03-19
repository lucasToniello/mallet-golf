const mongoose = require('mongoose');

const CampoSchema = new mongoose.Schema({

	name : {
		type : String,
		required : true,
	},

	par : {
		type : Array,
		required : true,
	},

	createdAt : {
		type : Date,
		default : Date.now,
	},
});

mongoose.model('Campo', CampoSchema);