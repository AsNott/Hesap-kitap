function kitleIndexHesap(){
    var skadin = document.getElementById('secimK').checked;
    var serkek = documen.getElementById('secimE').checked;

    var boyValue = document.getElementById('boy').value;
    var kiloValue = document.getElementById('kilo').value;
    var idealKilo;
    var BMI;
    if (serkek) {
        BMI = kiloValue / (boyValue * boyValue);
        idealKilo = 50 + (2.3 * ((boyValue * 2.54) - 60))
    }
    else{
        BMI = kiloValue / (boyValue * boyValue);
        idealKilo = 45.5 + (2.3 * ((boyValue * 2.54) - 60))
    }
}


function temizle(){
	document.getElementById('boy').value = ''
	document.getElementById('kilo').value = ''
}