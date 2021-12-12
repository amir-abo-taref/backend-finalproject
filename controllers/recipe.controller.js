const recipeModel = require("../models/recipe.modle").recipe;


const getAllrecipes = async (req, res) => {
  const data = await recipeModel.find({});
  return res.status(200).send(data);
};


const addNewrecipes = (req, res) => {
  const {
    username,
    name,
    image,
    caloriot,
    time,
    info
  } = req.body;
  console.log(req.body)

  const recipe = new recipeModel({
    username:username,
    name: name,
    image:image,
    caloriot: caloriot,
     time:time,
    info: info,
  });
  recipe.save((err, data) => {
    if (err) return res.status(404).send(err);
    return res.status(200).send(data);
  });
};


const updaterecipes = (req, res) => {
    const { id } = req.params;
    const {
      name,
      image,
      caloriot,
      time,
      info
    
    } = req.body;
    recipeModel.findByIdAndUpdate(
      id,
      {
        name: name,
        image: image,
        caloriot: caloriot,
        time: time,
        info: info
      },
      { new: true },
      (err, data) => {
        if (err) return res.status(404).send(err);
        return res.status(200).send(data);
      }
    );
  };
  

const deleterecipes = (req, res) => {
  const { id } = req.params;
  recipeModel.findByIdAndDelete(id, (err, data) => {
    if (err) return res.status(404).send(err);
    return res.status(200).send(data);
  });
};

module.exports = {
  getAllrecipes,
  addNewrecipes,
  updaterecipes,
  deleterecipes
};
