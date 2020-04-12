var express = require('express');
const bodyParser = require('body-parser')
let counter = {name:"abdella",age:26};

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/names', function(req,res,) {
    res.json(counter.name)
})  


app.listen(5500, function(){
    console.log('Server is listening...')
})