const router = require('express').Router();

const apiRoutes = require('./api');
const exerciseRoutes = require('./exerciseRoutes');

router.use('/exercise', exerciseRoutes);
router.use('/api', apiRoutes);

module.exports = router;