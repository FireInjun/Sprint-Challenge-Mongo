const express = require("express");

const Budget = require("../models/budget");

const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    Budget.find()
      .then(budgets => {
        res.status(200).json(budgets);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: "I aint able to see nothin, you wanna try" });
      });
  })

  .post((req, res) => {
    const { title, budget_amount } = req.body;
    const newBud = new Budget({ title, budget_amount });
    newBud
      .save()
      .then(addedBud => {
        res.status(201).json(addedBud);
      })
      .catch(err => {
<<<<<<< HEAD
        res
          .status(422)
          .json({
            errorMessage:
              "Do what now? This aint workin, you sure you usin this right?"
          });
=======
        res.status(422).json({
          errorMessage:
            "Do what now? This aint workin, you sure you usin this right?"
        });
>>>>>>> d507e83f45d75658ee9006b84d04f22428ebe456
      });
  });

router
  .route("/:id")
  .get((req, res) => {
    const { id } = req.params;
    Budget.findById(id)
      .then(foundBudget => {
        res.status(200).json(foundBudget);
      })
      .catch(err => {
        res
          .status(500)
          .json({ errorMessage: "I aint got a budget called that...." });
      });
  })

  .put((req, res) => {
    const { id } = req.params;
    const { title, budget_amount } = req.body;
    Budget.findByIdAndUpdate(id, { title, budget_amount })
      .then(budget => {
        res.json(budget);
      })
      .catch(err => {
<<<<<<< HEAD
        res
          .status(500)
          .json({
            status: "I aint gonna be able to update what aint here buddy!"
          });
=======
        res.status(500).json({
          status: "I aint gonna be able to update what aint here buddy!"
        });
>>>>>>> d507e83f45d75658ee9006b84d04f22428ebe456
      });
  })

  .delete((req, res) => {
    const { id } = req.params;
    const { title, budget_amount } = req.body;
    Budget.findByIdAndRemove(id, ({ title, budget_amount } = req.body))
      .then(budgetRemoved => {
        res.json(budgetRemoved);
      })
      .catch(err => {
<<<<<<< HEAD
        res
          .status(500)
          .json({
            status:
              "That budget aint here buddy. Check your bank account to make sure you still have money!"
          });
=======
        res.status(500).json({
          status:
            "That budget aint here buddy. Check your bank account to make sure you still have money!"
        });
>>>>>>> d507e83f45d75658ee9006b84d04f22428ebe456
      });
  });
module.exports = router;
