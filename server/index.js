const express = require('express')
const app = express();
const port = 3000;
const Controller = require('./Controller.js');
const cors = require('cors');
const bodyParser = require('body-parser')

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept',)
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/spending/:user_id', Controller.getSpendingByMonth);
app.get('/spending/categories', Controller.getCategories);
app.get('/spending/transactions/:category_name', Controller.getTransactions);
app.post('/spending/transactions', Controller.addTransaction);
app.post('/spending/categories', Controller.addCategory);
app.patch('/spending/profile', Controller.updateProfile);
app.patch('/spending/categories', Controller.updateCategory);
app.delete('/spending/transactions/', Controller.deleteTransaction);
app.delete('/spending/categories', Controller.deleteCategory);

app.listen(port, console.log(`app listening on port ${port}`));