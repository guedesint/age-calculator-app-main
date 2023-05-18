const botao = document.querySelector('.botaoTeste');


function calculaIdade() {

  const diaNascimento = parseInt(document.querySelector('#dd').value);
  const mesNascimento = parseInt(document.querySelector('#mm').value);
  const anoNascimento = parseInt(document.querySelector('#yy').value);

  const dataAtual = new Date();

  const anoAtual = dataAtual.getFullYear();
  const mesAtual = dataAtual.getMonth() + 1;
  const diaAtual = dataAtual.getDate();

  let idade = anoAtual - anoNascimento;
  let idadeMes = (mesAtual - mesNascimento) + (idade * 12);
  let idadeDia = (diaAtual - diaNascimento) + (idadeMes * 30);



  if (mesAtual < mesNascimento) {
    idade--;
  } else {
    //Se estiver no mes do nascimento, verificar o dia
    if (mesAtual == mesNascimento) {
      if (new Date().getDate() < diaNascimento) {
        //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
        idade--;
      }
    }
  }

  if (diaNascimento && mesNascimento && anoNascimento >= 0) {

    const resultadoAno = document.querySelector('.anos')
    resultadoAno.innerHTML = idade;

    const resultadoMes = document.querySelector('.meses')
    resultadoMes.innerHTML = idadeMes;

    const resultadoDia = document.querySelector('.dias')
    resultadoDia.innerHTML = idadeDia;
  }else {
    
  }


}
calculaIdade()


botao.addEventListener('click', calculaIdade)