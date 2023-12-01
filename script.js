let inputText = document.getElementById("penghasilan");
let inputButton = document.getElementById("button");
let reset = document.getElementById('reset');
let output = document.getElementById('hasil');

// main function
inputButton.addEventListener('click', function(){
    if (inputText.value > 7897619)  {
        // get hasil
        output.innerText = inputText.value * (25/1000);
        
        // riset button
        reset.addEventListener('click', function(){
            output.innerText = 0
        });
    }
    else {
        output.innerText = 0
        alert('Anda tidak wajib membayar zakat')
    }
});
