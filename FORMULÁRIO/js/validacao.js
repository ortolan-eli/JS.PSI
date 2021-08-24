function validar() {
	// name="nome" - caixa de texto (input)
	// name="formSignUp" - nome do FORM
	// usando a notacao de PONTOS
	var vNome = document.getElementById('nome').value;
	var vEmail = document.getElementById('email').value;
	var vSenha = document.getElementById('senha').value;
	var vConfirm_senha = document.getElementById('confirm_senha').value;
	var vErro = document.getElementById('msg_erro');

	//nome
	if (vNome === '') {
		// alert('Preencha o campo NOME!');
		console.log(vErro);
    vErro.innerHTML = 'Preencha o campo NOME!';
    formSignUp.nome.focus();
		return false;
	} else {
		vErro.innerHTML = '';
	}

	//nome deve ter mais do que 3 caracteres
	if (vNome.length < 3) {
		vErro.innerHTML = 'Nome deve conter mais do que 3 caracteres!';
    formSignUp.nome.focus();
    return false;
	}

	//email
	if (vEmail === '') {
		console.log(vErro);
		vErro.innerHTML = 'Preencha o campo EMAIL!';
    formSignUp.email.focus();
    return false;
	} else {
		vErro.innerHTML = '';
	}

	//senha
	if (vSenha === '') {
		console.log(vErro);
		vErro.innerHTML = 'Preencha o campo SENHA!';
    formSignUp.senha.focus();
    return false;
	} else {
		vErro.innerHTML = '';
	}

	//confirma senha
	if (vConfirm_senha === '') {
		console.log(vErro);
		vErro.innerHTML = 'Preencha o campo CONFIRMACAO SENHA!';
		formSignUp.confirm_senha.focus();
    return false;
	} else {
		vErro.innerHTML = '';
	}

	//senha e confirma senha devem ser iguais
  if (vSenha !== vConfirm_senha) {
    vErro.innerHTML = 'Senhas não conferem!';
    formSignUp.senha.focus();
		return false;
	}
}