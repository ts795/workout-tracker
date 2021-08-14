const router = require('express').Router();
const mongojs = require("mongojs");

const databaseUrl = "workout";
const collections = ["workouts"];

const db = mongojs(databaseUrl, collections);
// Get all workouts in ascending order
router.get('/', async (req, res) => {
    db.workouts.find().sort({day: 1}, (err, data) => {
        if (err) {
          console.log(err);
        } else {
            console.log(data);
          res.json(data);
        }
      });
});

module.exports = router;