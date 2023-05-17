const botao = document.querySelector('.botaoTeste');



function calculaIdade() {
  const diaNascimento = parseInt(document.querySelector('#dd').value);
  const mesNascimento = parseInt(document.querySelector('#mm').value);
  const anoNascimento = parseInt(document.querySelector('#yy').value);

  const dataAtual = new Date();

  const anoAtual = dataAtual.getFullYear();
  const mesAtual = dataAtual.getMonth() + 1;

  let idade = anoAtual - anoNascimento;
  
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
  
  let meses = idade * 12;
  let dias = meses * 31; 
}
calculaIdade()


botao.addEventListener('click', calculaIdade)