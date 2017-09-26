var express = require('express')
var app = express()
var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.render('home', {msg: 'Hello World!'});
})

app.listen(3000, function () {
  console.log('Portfolio App listening on port 3000!')
})
