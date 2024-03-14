
// Kode Validasi form berat badan
function calculate() {
    let weightInput = document.getElementById("weight").value;
    console.log(weightInput)
    let ageInput = document.getElementById("age").value;
    console.log(ageInput)
    let tallInput = document.getElementById("tall").value;
    console.log(tallInput)

    
    function checkInput(input, message) {
        if (input === '') {
            alert(message);
        } else {
            console.log('Number');
        }
    }
    
    checkInput(weightInput, 'Harap isi Berat Badan Anda');
    checkInput(ageInput, 'Harap isi Usia Anda');
    checkInput(tallInput, 'Harap isi Tinggi Badan Anda');
}

//Kode Logic Hitung BMI
function BMICalculator(weightInput, tallInput) {
    let heighInMeters = tallInput / 100;
    let BMI = weightInput / (heighInMeters * heighInMeters);
    return BMI;
}

function BMIstatus(BMI) {
    if (BMI < 18.5) {
        return "kekurangan Berat Badan";
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        return "Berat Badan Normal (ideal)";
    } else if (BMI >= 25 && BMI <= 29.9) {
        return "Berat Badan Berlebih";
    } else {
        return "Kegemukan (Obesitas)";
    }
}

function calculate() {
let weightInput = document.getElementById("weight").value
console.log(weightInput)
let tallInput= document.getElementById("tall").value
console.log(tallInput)

let BMI = BMICalculator(weightInput, tallInput)
console.log(BMI)
let status = BMIstatus(BMI);
console.log(status)
}

//Kode Validasi "Download Hasil BMI"
function download() {
    let downloadButton = document.getElementsByClassName('download button').item
    alert('Hasil BMI anda Sedang di Download')
    }

//Kode Validasi "konsultasi dokter via aplikasi lekasehat"
function secconsult () {
    let secconsult = document.getElementById('sec-consult').item
    return (window.location.href = "https://play.google.com/store/apps/details?id=com.lekasehat.user")
}

//Kode Validasi "Registrasi Online Sekarang"
function secregist () {
    let secconsult = document.getElementById('secregist').item
    return (window.location.href = "https://www.halodoc.com/")
}
