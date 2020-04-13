

const button1 = document.getElementById("button1");
const random = Math.floor(Math.random() * 14) + 1;

button1.addEventListener('click', function () {
    axios.get('/names')
        .then(function (response) {
    document.getElementById("boyNames").innerHTML = "Name: " + response.data[random].name + "<br></br>" + "Meaning: " +response.data[random].meaning;

        })

    });

    const reset = document.getElementById('reset');

    reset.addEventListener('click', function () {
        location.reload()
    });


    