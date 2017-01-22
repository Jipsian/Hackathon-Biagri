function CalculTrajet() {
    var originCity = document.getElementById("origin");
    originCity = originCity.value;
    var destCity = document.getElementById("dest");
    destCity = destCity.value;

    var req = new XMLHttpRequest();

    req.open('GET', 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=' + originCity + '&destinations=' + destCity + '&mode=driving&language=fr-FR&key=AIzaSyCg8hp0oKJpTIO1b8fSOdxHG-FOYkfsAqo');

    req.addEventListener('readystatechange', function() {

        if (req.readyState === XMLHttpRequest.DONE && req.status === 200) {
            response = JSON.parse(req.responseText);
            document.getElementById('distance').innerHTML = "<span>La distance entre " + origincity + " et " + destCity + " est de :</span>";
            document.getElementById('time').innerHTML = "<span>'Le temps de trajet est de : " + origincity + "</span>";
            console.log(response);
        }

    });

    req.send(null); // La requête est prête, on envoie tout !

}
