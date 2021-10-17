function validar() {
    
    var vEmail = document.getElementById('nEmail').value;
    var vSenha = document.getElementById('nSenha').value;
    var vConfSenha = document.getElementById('nConfSenha').value;
    var vEnd = document.getElementById('nEnd').value;
    var vCid = document.getElementById('nCid').value;
    var vEst = document.getElementById('nEst').value;
    var vCep = document.getElementById('nCep').value;
    var info = document.getElementById('info');

    if (vEmail === '') {
        info.innerHTML = 'Preencha o campo "E-mail" corretamente.';
        form.nEmail.focus();
        return false;
    } else {
		info.innerHTML = '';
	}

    if (vSenha === '') {
        console.log(nSenha);
        info.innerHTML = 'Campo "Senha" obrigatório, não deve conter menos do que 6 números e/ou letras.';
        form.nSenha.focus();
        return false;
    } else {
		info.innerHTML = '';
	}

    if (vSenha != vConfSenha) {
        info.innerHTML = 'Senhas não conferem.'
        form.nConfSenha.focus();
        return false;
    }else{
        info.innerHTML = '';
    }

    if (vEnd === '') {
        info.innerHTML = 'Preencha o campo "Endereço" corretamente.';
        form.nEnd.focus();
        return false;
    } else {
		info.innerHTML = '';
	}

    if (vCid === '') {
        info.innerHTML = 'Preencha o campo "Cidade" corretamente.';
        form.nCid.focus();
        return false;
    } else {
        info.innerHTML = '';
    }

    if (vEst === '') {
        info.innerHTML = 'Selecione o "Estado".';
        form.nEst.focus();
        return false;
    } else {
        info.innerHTML = '';
    }

    if (vCep === '') {
        info.innerHTML = 'Preencha o campo "CEP" corretamente.';
        form.nCep.focus();
        return false;
    } else {
        info.innerHTML = '';
    }
    
    clean();
    alert("Cadastro concluído!");
}

function clean(){
    document.getElementById('nEmail').value = '';
    document.getElementById('nSenha').value = '';
    document.getElementById('nConfSenha').value = '';
    document.getElementById('nEnd').value = '';
    document.getElementById('nComp').value = '';
    document.getElementById('nCid').value = '';
    document.getElementById('nEst').value = '';
    document.getElementById('nCep').value = '';
    document.getElementById('info').innerHTML = '';
}