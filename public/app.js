var axios = require('axios');

const addButton = document.getElementById("male");


addButton.addEventListener('click', function () {
    axios.get('/api/ping')
        .then(function (response) {
            document.getElementById("boyNames").innerHTML = response.data;
        });
})