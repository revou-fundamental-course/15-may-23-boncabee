
// fungsi hitung luas dari input
function hitungl(){
    var sisil = document.getElementsByClassName("nilai-l").Value;
    var hasill = document.getElementsByClassName("output-l");
    const resultSquare = sisil*sisil
    const fixedLuasSquare = resultSquare.toFixed(2);

    // print hasil luas
    document.getElementsByClassName("rumus-l").innerHtml = sisil + ' x ' + sisil;
    document.getElementsByClassName("hasil-l").innerHtml = fixedLuasSquare;
    output.style.display = "block";
}

// fungsi hitung keliling dari input
function hitungk(){
    var sisik = document.getElementsByClassName("nilai-k").Value;
    var hasilk = document.getElementsByClassName("output-k");

    // print hasil keliling
    document.getElementsByClassName("rumus-k").innerHtml = sisik + ' x 4';
    document.getElementsByClassName("hasil-k").innerHtml = sisik*4;
    output.style.display = "block";
}

// fungsi hanya numeric
function validateNumericInput(input) {
    input.value = input.value.replace(/[^0-9.]/g, '');
    const count = (input.value.match(/\./g) || []).length;
    if (count > 1) {
      input.value = input.value.replace(/\.+$/, '');
    }
}

// hide hasil
function resetLuas(flag) {
    document.getElementsByClassName("output-l").style.display = flag === 1 ? 'block' : 'none';
    document.getElementsByClassName("nilai-l").value = '';
}

