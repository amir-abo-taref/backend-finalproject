const dietModel = require("../models/diet.modle").diet;


const getAlldiet = async (req, res) => {
  const data = await dietModel.find({});
  return res.status(200).send(data);
};


const addNewdiet = (req, res) => {
  const {
    name,
    image,
    caloriot,
    time,
    ingredients1,
    ingredients2,
    ingredients3,
    ingredients4,
    ingredients5
  } = req.body;

  const diet = new dietModel({
    name: name,
    image:image,
    caloriot: caloriot,
     time:time,
    ingredients1:ingredients1,
    ingredients2:ingredients2,
    ingredients3,ingredients3,
    ingredients4,ingredients4,
    ingredients5,ingredients5

  });

  diet.save((err, data) => {
    if (err) return res.status(404).send(err);
    return res.status(200).send(data);
  });
};

const deletediet = (req, res) => {
  const { id } = req.params;
  dietModel.findByIdAndDelete(id, (err, data) => {
    if (err) return res.status(404).send(err);
    return res.status(200).send(data);
  });
};

module.exports = {
  getAlldiet,
  addNewdiet,
  deletediet
};
