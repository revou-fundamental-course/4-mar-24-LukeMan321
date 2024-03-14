// Kode Validasi Jenis Kelamin
function validate() {
    let sexOption = document.getElementById("sex-man").CDATA_SECTION_NODE

}




// Kode Validasi form berat badan
function calculate() {
    let weightInput = document.getElementById("weight"). value;
    console.log(weightInput.value)
    let ageInput = document.getElementById("age"). value;
    console.log(ageInput.value)
    let tallInput = document.getElementById("tall"). value;
    console.log(tallInput.value)

    if (weightInput == '') {
        alert('Harap isi Berat Badan Anda')
    } else {
        console.log('Number')
    }
    
    if (ageInput == '') {
        alert('Harap isi Usia Anda')
    } else {
        console.log('Number')
    }

    if (tallInput == '') {
        alert('Harap isi Tinggi Badan Anda')
    } else {
        console.log ('Number')
    }
}


//Kode Validasi "Download Hasil BMI"
function download() {
    let downloadButton = document.getElementsByClassName('download button').item
    alert('Hasil BMI anda Sedang di Download')
    }

//Kode Validasi "Konsultasi Ahli Gizi via Aplikasi"
function consultation() {
    let firstConsult = document.getElementById('first-consult').item
    alert('Silahkan Download APlikasi')
}

//Kode Validasi "Registrasi online Hli Gizi"
function firstregist() {
    let firstRegist = document.getElementById('first-regist').item
    alert('Anda akan dialihkan menuju halodoc')
}



