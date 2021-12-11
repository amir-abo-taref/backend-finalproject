const express = require("express");
const recipeController = require("../controllers/recipe.controller");
const router = express.Router();


router.get("/recipe", (req, res) => {
  recipeController.getAllrecipes(req, res);
})
router.post("/recipe", (req, res) => {
    recipeController.addNewrecipes(req, res);
  })
  router.put("/:id", (req, res) => {
    recipeController.getAllrecipes(req, res);
  })
   router.delete("/:id", (req, res) => {
    recipeController.deleterecipes(req, res);
  })

module.exports = router;



