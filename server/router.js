
const router = require('express').Router();
const controller = require('./controller');

router
  .get('/products', controller.getAll)
  .post('/scan', controller.postOne)
  .delete('/products/:id', controller.deleteOne);

module.exports = router;