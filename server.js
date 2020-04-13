var express = require('express');
const bodyParser = require('body-parser')
let array = [
        {name:'Aalam', meaning:'Universe', famousFig: "Mujeeb Aalam - Pakistani singer", images: 'images/Aalam.jpeg'}, {name:'Abdullah', meaning:'Servant Of Allah', famousFig: "Abdullah - former King of Saudi Arabia", images: 'images/abdullah.jpg'},{name:'Abdul-kareem', meaning:'Servant Of The Most Generous', famousFig: 'Abdul-Kareem Jabbar - American footballer', images: 'images/kareem.jpg'},
        {name:'Abednego', meaning:'Servant Of Nego', famousFig: 'Religious Figure', images: 'images/nego.jpg'}, {name:'Adnan', meaning:'Settler', famousFig: 'Adnan Khan - Indian actor', images: 'images/Adnan.jpg'}, {name:'Akeem', meaning:'Wise', famousFig: 'Akeem Davis - American football player', images: 'images/akeem.jpg'},{name:'Aladdin', meaning:'nobility of faith', famousFig: 'Muhammad Aladdin - Egyptian writer', images: 'images/Aladdin.jpg'},
        {name:'Alem', meaning:'World Leader', famousFig: 'Alem Marr - American politician', images: 'images/marr.jpg'}, {name:'Almas', meaning:'Diamond', famousFig: 'Almas iltäbär - first Emir of Bulgaria', images: 'images/almas.jpg'}, {name:'Aman', meaning:'Trust', famousFig: 'Aman Khanna - graphic artist', images: 'images/Aman.jpg'},{name:'Amin', meaning:'Truthful', famousFig: 'Amin Ahsan Islahi - Pakistani Muslim scholar', images: 'images/Amin.jpg'},
        {name:'Amjad', meaning:'Glorious', famousFig: 'Amjad Khan - Indian actor', images: 'images/amjad.jpg'}, {name:'Anass', meaning:'Friendly', famousFig: 'Anass Achahbar - Dutch footballer', images: 'images/anass.jpg'},{name:'Aqil', meaning:'Intelligent', famousFig: 'Aqil Mammadov - Azerbaijani footballer', images: 'images/aquil.jpg'},{name:'Asad', meaning:'Lion', famousFig: 'Muhammad Asad - influential writer and political theorist', images: 'images/asad.jpg'},  ];

var girlNames = [
    {name:'Aaliyah', meaning:'Sublime', famousFig: 'Aaliyah Dana Haughton - American Singer'}, {name:'Adila', meaning:'Just', famousFig: 'Adila Sedraïa - French singer'},{name:'Aizza', meaning:'Saffron', famousFig: 'Aziza - Pakistani Actress'}, {name:'Alima', meaning:'Learned', famousFig: 'Alima Mahama - Government official'},{ name:'Aliyya', meaning:'Royal', famousFig: 'Aliya - Chinese actress'}, 
    {name:'Altaf', meaning:'Kindness', famousFig: 'Altaf Hussain - Pakistani politician'}, {name:'Amaya', meaning:'Night Rain', famousFig: 'Amaya Alonso - Spanish swimmer'}, {name:'Aminah', meaning:'Feel Safe', famousFig: 'Aminah bint Wahb - the mother of the Islamic prophet Muhammad.'},{name:'Amna', meaning:'Safe', famousFig: 'Amna Al Qubaisi -  the first Emirati female racing driver.'}, 
    {name:'Arifah', meaning:'Educated', famousFig: 'Arifah Khan - UK Singer'}, {name:'Asma', meaning:'Exalted', famousFig: 'Asma al-Assad - First Lady of Syria'}, {name:'Atifa', meaning:'Affection', famousFig: 'Atifa A - Babysitter from Addison, TX'},{name:'Ayah', meaning:'Miracle', famousFig: 'Ayah Marar - Jordan Singer'}, {name:'Ayishah', meaning:'Alive', famousFig: 'Daughter of Talhah'}, {name:'Aziza', meaning:'Highly Esteemed', famousFig: 'Aziza Sleyum Ally - Member of Parliament in Tanzania'}, ];




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