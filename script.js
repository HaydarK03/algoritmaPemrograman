// var input = prompt("masukan jumlah penghasilan anda perbulan:")
var x = 25
var y = 1000 
var z = x/y


// function hasil(){
//     var hitung = input * z
//     return hitung
// }
// alert("zakat yang ha    rus dibayarkan :" + hasil())


// ambil  variabel untuk menampung calue


let inputText = document.getElementById("penghasilan")
let inputButton = document.getElementById("button")
let print = document.getElementById("hasil")

// function getValue(){
//     alert(inputText.value);
// }
// inputButton.addEventListener("click",getValue)


function hitung(){
    var hasil = inputText.value * z
    console.log(hasil)

}

inputButton.addEventListener("click", hitung)


