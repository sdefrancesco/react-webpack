var express = require('express');
var hbs = require('hbs')


// Initialize App
var app = express();


app.set('./views', 'views')
app.set('view engine', 'hbs')
// Express Static Assets For Front End
app.use(express.static('public'))


app.get('/', function(req, res) {
    res.render('index')
})

app.listen(3000, function() {
    console.log('server started on port 3000')
})