# Slider

## Praktische informatie

* Repository: `jQuery-slider`
* Deadline: 1.5 days
* Delivery: Github page (published)

## Leerdoelstellingen

* Gebruik maken van de aangeleerde JavaScript & jQuery;
* Het herhaaldelijk aanroepen van functies;
* Een "probleem" leren opsplitsen in "deelproblemen".

## Opdracht

Je moet zelf een slider maken. Deze slider, die ook wel _carousel_ wordt genoemd, zou een aantal basisfuncties _moeten_ bevatten:

* Het zal twee knoppen moeten hebben, één om het vorige beeld weer te geven, de andere om het volgende beeld weer te geven;
* Hij zal in staat zijn om alleen te scrollen, d.w.z. de beelden zullen vanzelf scrollen zonder dat wij moeten ingrijpen;
* Het kan zeer flexibel zijn aangezien het mogelijk zal zijn om zoveel beelden te plaatsen als je wilt.

_Tip:
Begin eenvoudig! Je kan later nog altijd verbeteringen toevoegen.  
Het moet geen kunstwerk zijn. In dit geval staat de functionaliteit op de eerste plaats._

## Een functie herhaaldelijk aanroepen

Een native methode van **JavaScript** helpt je om automatisch door de afbeeldingen te bladeren. Dit is `setTimeout()`, waarvoor twee argumenten nodig zijn: de naam van de uit te voeren functie en het tijdsinterval (in milliseconden) om te wachten. De truc is om de functie in zichzelf te herstarten om een oneindige lus te creëren:

```javascript
var myLoop = function () {
    setTimeout(function () {
        alert('Hello !'); // will display "Hello!" every second
        myLoop(); // restarts the function
    }, 1000);
};

myLoop(); // don't forget to launch the function for the first time
```

De hier gebruikte beelden komen van [lorempixel.com](http://lorempixel.com/) en niet alle afbeeldingen zijn vrij van rechten.

Je hebt nu alle sleutels om deze slider te maken!

Vergeet niet om de **jQuery** documentatie te gebruiken als je deze nodig heeft, en gebruik de "debugger" om een probleem in jouw code te lokaliseren.

## Verbeteringen

We hebben zojuist een zeer eenvoudige slider gepresenteerd. De meeste die je op het web tegenkomt zijn veel geavanceerder, maar vergeet niet dat ze allemaal op bijna dezelfde manier werken! Dus hoe zit het met het verbeteren van de jouwe? Hier zijn enkele tips:

* Het scrollen van beelden is niet erg esthetisch: in plaats van het displaysysteem, probeer in plaats daarvan leuke animatie-effecten op te zetten!
Op dit moment zijn de controles zeer eenvoudig: het is niet mogelijk om naar een specifieke afbeelding te gaan door slechts één keer te klikken. Hoe zit het met het maken van een lijst van knoppen die elk een dia voorstellen?
* Op dezelfde manier is het mogelijk om thumbnails van de beelden te maken en deze onder de slider weer te geven voor een veel betere navigatie!

De mogelijkheden zijn eindeloos, je kan altijd nieuwe ideeën vinden, of ze nu goed zijn of niet.
