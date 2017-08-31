'use strict';

function clickja(key) {
    var gameclick = document.getElementById('output').textContent;
    console.log(gameclick);
    gameclick += key;
    console.log(gameclick);
    document.getElementById('output').textContent = gameclick;
    console.log(gameclick);
}
function backspace() {
    var output = document.getElementById("output").textContent;
    output = output.substring(0, output.length - 1);
    document.getElementById("output").textContent = output;
}
function entergame() {
    var output = document.getElementById("output").textContent;
    output += '\n';
    document.getElementById("output").textContent = output;
}
