const express = require("express");
const mealController = require("../controllers/meal.controller");
const router = express.Router();


router.get("/", (req, res) => {
  mealController.getAllMeals(req, res);
})
router.post("/", (req, res) => {
    mealController.addNewMeal(req, res);
  })
   router.delete("/:id", (req, res) => {
    mealController.deleteMeal(req, res);
  })

module.exports = router;



