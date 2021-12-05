const mealModel = require("../models/meal.modle").meal;


const getAllMeals = async (req, res) => {
  const data = await mealModel.find({});
  return res.status(200).send(data);
};


const addNewMeal = (req, res) => {
  const {
    name,
    image,
    caloriot,
    time,
    info
  } = req.body;

  const meal = new mealModel({
    name: name,
    image:image,
    caloriot: caloriot,
     time:time,
    info: info,
  });

  meal.save((err, data) => {
    if (err) return res.status(404).send(err);
    return res.status(200).send(data);
  });
};

const deleteMeal = (req, res) => {
  const { id } = req.params;
  mealModel.findByIdAndDelete(id, (err, data) => {
    if (err) return res.status(404).send(err);
    return res.status(200).send(data);
  });
};

module.exports = {
  getAllMeals,
  addNewMeal,
  deleteMeal
};
