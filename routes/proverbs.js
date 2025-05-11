const express = require('express');
const router = express.Router();
const controller = require('../controllers/proverbsController');

router.get('/', controller.getAllProverbs);
router.get('/random', controller.getRandomProverb);
router.get('/:id', controller.getProverbById);
router.post('/', controller.createProverb);
router.put('/:id', controller.updateProverb);
router.delete('/:id', controller.deleteProverb);

module.exports = router;
