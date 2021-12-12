const mongoose = require("mongoose");
const recipeSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
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
	likes: {
		type: Number,
		required: true,
	},

	created_at: {
	    type: Date,
		default:(Date.now),	
	},
});

const recipe = mongoose.model("recipe", recipeSchema);

module.exports = {
  recipe,
};