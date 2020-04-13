
const button2 = document.getElementById("button2");
const random = Math.floor(Math.random() * 4) + 1;


button2.addEventListener('click', function () {
    axios.get('/girlNames')
        .then(function (response) {
    document.getElementById("girlNames").innerHTML = response.data[random];
        })

    });

    const reset = document.getElementById('reset');

    reset.addEventListener('click', function () {
        location.reload()
    });