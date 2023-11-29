var x = 25;
var y = 1000 ;
var z = x/y;
var a = 7000000

let inputText = document.getElementById("penghasilan");
let inputButton = document.getElementById("button");
let reset = document.getElementById('reset');

// untuk perhitungan
function getHitung(){
    var hasil = inputText.value * z
    return hasil
};

// untuk menampilkan value
inputButton.addEventListener('click', function(){
    document.getElementById("hasil").innerText = getHitung()
});

// untuk mereset value
reset.addEventListener('click', function(){
    document.getElementById('hasil').innerText = 0
});

if (inputText.value < a){
    document.getElementById('hasil').innerText = 0
};