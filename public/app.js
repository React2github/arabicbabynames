

const button1 = document.getElementById("button1");
const random = Math.floor(Math.random() * 4) + 1;

button1.addEventListener('click', function () {
    axios.get('/names')
        .then(function (response) {
    document.getElementById("boyNames").innerHTML = response.data[random];
        })

    });

    const reset = document.getElementById('reset');

    reset.addEventListener('click', function () {
        location.reload()
    });


    