let inputText = document.getElementById("penghasilan");
let inputButton = document.getElementById("button");
let reset = document.getElementById('reset');
let output = document.getElementById('hasil');

// untuk menampilkan value
inputButton.addEventListener('click', function(){
    if (inputText.value > 7897619)  {
        output.innerText = inputText.value * (25/1000);
        
        reset.addEventListener('click', function(){
            output.innerText = 0
        });
    }
    else {
        output.innerText = 0
        alert('Anda tidak wajib membayar zakat')
    }
});


// untuk mereset value
