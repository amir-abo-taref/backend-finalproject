const mongoose = require("mongoose");
const dietSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	caloriot: {
		type: Number,
		required: true,
	},
	time: {
		type: Number,
		required: true,
	},
	info: {
		type: String,
		required: true,
	},
	created_at: {
	    type: Date,
		default:(Date.now),	
	},
    ingredients1: {
		type: String,
		required: false,
	},
    ingredients2: {
		type: String,
		required: false,
	},
    ingredients3: {
		type: String,
		required: false,
	},
    ingredients4: {
		type: String,
		required: false,
	},
    ingredients5: {
		type: String,
		required: false,
	},

});

const diet = mongoose.model("diet", dietSchema);

module.exports = {
  diet,
};