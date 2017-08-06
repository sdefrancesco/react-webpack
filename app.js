var express = require('express');


// Initialize App
var app = express();
// Express Static Assets For Front End
app.use(express.static('public'))

app.listen(3000, function() {
    console.log('server started on port 3000')
})