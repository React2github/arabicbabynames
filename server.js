var express = require('express');
const bodyParser = require('body-parser')
let name = [
        'Aalam', 'Abdalah','Abdulkareem', 'Abednego', 'Adnan', 'Akeem'
         ];

var girlNames = [
    'Aaliyah', 'Adila','Aizza', 'Alima', 'Aliyya', 'Altaf'
];

  

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/names', function(req,res,) {
        res.json(name)
})  
app.get('/girlNames', function(req,res,) {
    res.json(girlNames)
})  


app.listen(5500, function(){
    console.log('Server is listening...')
})