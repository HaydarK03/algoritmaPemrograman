var x = 25;
var y = 1000 ;
var z = x/y;
var a = 7897619

let inputText = document.getElementById("penghasilan");
let inputButton = document.getElementById("button");
let reset = document.getElementById('reset');
let output = document.getElementById('hasil');

// untuk perhitungan
function getHitung(){
        var hasil = inputText.value * z
        return hasil
};

// untuk menampilkan value
inputButton.addEventListener('click', function(){
    if (inputText.value > a)  {
        output.innerText = getHitung()
    }
    else {
        output.innerText = 0
        alert('Anda tidak wajib membayar zakat')
    }
});


// untuk mereset value
reset.addEventListener('click', function(){
    output.innerText = 0
});
