const express = require("express");
const dietController = require("../controllers/diet.controller");
const router = express.Router();


router.get("/", (req, res) => {
  dietController.getAlldiet(req, res);
})
router.post("/", (req, res) => {
    dietController.addNewdiet(req, res);
  })
   router.delete("/:id", (req, res) => {
    dietController.deletediet(req, res);
  })

module.exports = router;



