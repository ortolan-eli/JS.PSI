function imc()
{
    var peso = parseFloat(document.getElementById("num1").value);
    var altura = parseFloat(document.getElementById("num2").value);
    var result = document.getElementById('res');
    var info = document.getElementById('info_peso');
    var res = peso/(altura*altura);
    var imc = '';

    if ((peso == '0') || (altura == '0')) {
        info.innerHTML = 'Impossível Calcular, informe Peso e Altura.';
        return false;
    }

    imc = res*10000;
    result.value = imc;

    if (imc < 17 ) {
        info.innerHTML = 'Você está muito abaixo do Peso!';
    }
    else if (imc >= 17 && imc < 18.49) {
        info.innerHTML = 'Você está abaixo do Peso!';
    } 
    else if (imc >= 18.50 && imc < 24.99) {
        info.innerHTML = 'Seu Peso está Normal.';
    }
    else if (imc >= 25 && imc < 29.99) {
        info.innerHTML = 'Você está Acima do Peso!';
    }
    else if (imc >= 30 && imc < 34.99) {
        info.innerHTML = 'Obesidade I';
    }
    else if (imc >= 35 && imc < 39.99) {
        info.innerHTML = 'Obesidade II';
    }
    else if (imc >= 40) {
        info.innerHTML = 'Obesidade III (Mórbida)';
    }
    return false;
}