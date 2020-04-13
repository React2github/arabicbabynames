
const button2 = document.getElementById("button2");
const random = Math.floor(Math.random() * 14) + 1;


button2.addEventListener('click', function () {
    axios.get('/girlNames')
        .then(function (response) {
    document.getElementById("girlNames").innerHTML =  "Name: " + response.data[random].name + "<br></br>" + "Meaning: " + response.data[random].meaning + "<br></br>" + "Famous Figure: " + response.data[random].famousFig;
        })

    });

    const reset = document.getElementById('reset');

    reset.addEventListener('click', function () {
        location.reload()
    });