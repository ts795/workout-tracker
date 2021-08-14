const router = require('express').Router();
const path = require("path");

// Show the exercise page
router.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
