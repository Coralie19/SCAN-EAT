const router = require('express').Router();
const controller = require('./controller');

router
  .get('/products', controller.getAll)
  .post('/scan', controller.postOne)
  .delete('/products/:id', controller.deleteOne);
// .put('/scan', controller.updateOne) //post date related to id

module.exports = router;