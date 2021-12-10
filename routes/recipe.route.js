const express = require("express");
const recipeController = require("../controllers/recipe.controller");
const router = express.Router();


router.get("/", (req, res) => {
  recipeController.getAllrecipes(req, res);
})
router.post("/", (req, res) => {
    recipeController.addNewrecipes(req, res);
  })
  router.put("/", (req, res) => {
    recipeController.getAllrecipes(req, res);
  })
   router.delete("/:id", (req, res) => {
    recipeController.deleterecipes(req, res);
  })

module.exports = router;



