const mongoose = require("mongoose");
const MealSchema = new mongoose.Schema({
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
});

const meal = mongoose.model("meal", MealSchema);

module.exports = {
  meal,
};