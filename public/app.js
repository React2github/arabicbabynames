

const button1 = document.getElementById("button1");
const random = Math.floor(Math.random() * 14) + 1;

button1.addEventListener('click', function () {
    axios.get('/names')
        .then(function (response) {
    document.getElementById("boyNames").innerHTML = '<div class="info">' + "Name: " + response.data[random].name + "<br></br>" + "Meaning: " + response.data[random].meaning + "<br></br>" + "Famous Figure: " + response.data[random].famousFig + "</div>" + "<div class='extra'>" + `<img src="${response.data[random].images}"></img>`+ "</div>"
        })

    });

    const reset = document.getElementById('reset');

    reset.addEventListener('click', function () {
        location.reload()
    });


    