var express = require('express');
const bodyParser = require('body-parser')
let array = [
        {name:'Aalam', meaning:'Universe'}, {name:'Abdalah', meaning:'Servant Of Allah'},{name:'Abdulkareem', meaning:'Servant Of The Most Generous'}, {name:'Abednego', meaning:'Servant Of Nego'}, 
        {name:'Adnan', meaning:'Settler'}, {name:'Akeem', meaning:'Wise'},{name:'Ala', meaning:'Excellence'},{name:'Alem', meaning:'World Leader'},
        {name:'Almas', meaning:'Diamond'}, {name:'Aman', meaning:'Trust'},{name:'Amin', meaning:'Truthful'},{name:'Amjad', meaning:'Glorious'}, 
        {name:'Anass', meaning:'Friendly'},{name:'Aqil', meaning:'Intelligent'},{name:'Asad', meaning:'Lion'},  ];

var girlNames = [
    'Aaliyah', 'Adila','Aizza', 'Alima', 'Aliyya', 'Altaf', 'Amaya', 'Aminah', 'Amna', 
    'Arifah', 'Asma', 'Atifa', 'Ayah', 'Ayishah', 'Aziza' ];




var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/names', function(req,res,) {
        res.json(array)
})  
app.get('/girlNames', function(req,res,) {
    res.json(girlNames)
})  


app.listen(5500, function(){
    console.log('Server is listening...')
})