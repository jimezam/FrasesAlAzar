var frases = [
    "La programación es una carrera entre los desarrolladores, intentando construir mayores y mejores programas a prueba de idiotas, y el universo, intentanto producir mayores y mejores idiotas. Por ahora va ganando el Universo",
    "La mayoría de ustedes están familiarizados con las virtudes del programador. Son tres, por supusto: pereza, impaciencia y orgullo desmedido",
    "El problema que hay con los programadores es que nunca puedes contar lo que un programador está haciendo hasta que es demasiado tarde",
    "Esto es lo que ocurre con la gente que piensa que odia los ordenadores. Lo que realmente odia es a los malditos programadores",
    "Durante mucho tiempo no entendía cómo algo tan caro y puntero podía ser tan inútil. Y entonces me vino a la mente que un ordenador es una máquina estúpida con la habilidad de hacer cosas increíblemente inteligentes, mientras que los programadores son inteligentes personas con la habilidad de hacer cosas estúpidas. Son, en resumen, una pareja perfecta",
    "La formación en informática no puede convertir a nadie en experto programador, de la misma forma que estudiar pinceles y pigmentos puede hacer a alguien un experto pintor",
    "Los ordenadores se hacen cada vez más inteligentes. Los científicos dicen que pronto ellos serán capaces de hablarnos (y con 'ellos' me refiero a los ordenadores, dudo mucho que los científicos sean capaces de hablarnos)",
    "He notado últimamente que el miedo paranoico hacia ordenadores inteligentes tomando el control del mundo ha desaparecido totalmente. Todo lo que puedo contar es que este hecho coincide con la aparición de MS-DOS",
    "Preguntarse cuándo los ordenadores podrán pensar es como preguntarse cuándo los submarinos podrán nadar",
    "Es ridículo vivir 100 años y sólo ser capaces de recordar 30 millones de bytes. O sea, menos que un compact disc. La condición humana se hace más obsoleta cada minuto",
    "¿Internet? ¿Todavía anda eso por ahí?",
    "La web es como una dominatriz. En todos los sitios que voy me encuentro pequeños botones ordenándome que me someta",
    "Ahora que lo pienso, ya hay un millón de monos con máquinas de escribir y Usenet no es en absoluto como la obra de Shakespeare"
];

$(document).ready(function() {

    $('#acerca_de').click(function() {
        alert("Desarrollado por Jorge y su banda de amiguitos desarrolladores.");
    });
    
    var frase = generarFraseAlAzar();

    $('#frase').text(frase);
});

function generarFraseAlAzar()
{
    var indice = parseInt(Math.random() * frases.length);

    return frases[indice];
}