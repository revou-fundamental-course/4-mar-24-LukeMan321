// Kode Validasi form berat badan
function calculate() {
    let weightInput = document.getElementById("weight")
    console.log(weightInput.value)

    if (weightInput.isNaN) {
    console.log('Number')
    } else {
        console.log('Not Number')
    }   
}