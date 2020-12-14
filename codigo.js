var frases = [
    "La programación es una carrera entre los desarrolladores, intentando construir mayores y mejores programas a prueba de idiotas, y el universo, intentanto producir mayores y mejores idiotas. Por ahora va ganando el Universo",
    "La mayoría de ustedes están familiarizados con las virtudes del programador. Son tres, por supusto: pereza, impaciencia y orgullo desmedido",
    "El problema que hay con los programadores es que nunca puedes contar lo que un programador está haciendo hasta que es demasiado tarde",
    "Esto es lo que ocurre con la gente que piensa que odia los ordenadores. Lo que realmente odia es a los malditos programadores",
    "Durante mucho tiempo no entendía cómo algo tan caro y puntero podía ser tan inútil. Y entonces me vino a la mente que un ordenador es una máquina estúpida con la habilidad de hacer cosas increíblemente inteligentes, mientras que los programadores son inteligentes personas con la habilidad de hacer cosas estúpidas. Son, en resumen, una pareja perfecta",
    "La formación en informática no puede convertir a nadie en experto programador, de la misma forma que estudiar pinceles y pigmentos puede hacer a alguien un experto pintor"
];

$(document).ready(function() {
    var frase = generarFraseAlAzar();

    $('#frase').text(frase);
});

function generarFraseAlAzar()
{
    var indice = parseInt(Math.random() * frases.length);

    return frases[indice];
}