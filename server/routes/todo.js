var express = require('express');
const { getTodos,addTodos,updateTodo, deleteTodo } = require('../service/todo');

var router = express.Router();

/* GET home page. */
router.get('/list', async function(req, res, next) {
  let resolver= await getTodos();
  if(resolver)
    res.status(200).send(resolver);
});

router.post('/add', async function(req, res, next) {;
   let resolver= await addTodos(req.body);
   if(resolver)
   res.status(200).send(resolver);
  });

  router.put('/update', async function(req, res, next) {

    let resolver= await updateTodo(req.body);
    if(resolver)
      res.status(200).send(resolver);
  });


  router.delete('/delete',async function(req, res, next) {
    console.log(req.query.id);
    let resolver= await deleteTodo(req.query?.id);
    if(resolver)
      res.status(200).send(resolver);
  });

module.exports = router;