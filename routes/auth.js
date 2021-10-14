const { Router } = require('express');
const router = Router();

const { googleAuth } = require('../controllers/auth');

router.post('/google', googleAuth);


module.exports = router;