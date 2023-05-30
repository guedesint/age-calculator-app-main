const botao = document.querySelector(".logo");
const resultadoDia = document.querySelector(".dias");
const resultadoMes = document.querySelector(".meses");
const resultadoAno = document.querySelector(".anos");

botao.addEventListener("click", () => {
  //Pegando valor dos Inputs
  const diaNascimento = parseInt(document.querySelector("#dd").value);
  const mesNascimento = parseInt(document.querySelector("#mm").value);
  const anoNascimento = parseInt(document.querySelector("#yy").value);

  //Pegando datas Atuais
  const dataAtual = new Date();
  const diaAtual = dataAtual.getDate();
  const mesAtual = dataAtual.getMonth() + 1;
  const anoAtual = dataAtual.getFullYear();

  //Validando Valor Inputs
  const validaDia = diaNascimento > 0 && diaNascimento <= 31;
  const validaMes = mesNascimento > 0 && mesNascimento <= 12; 
  const validaAno = anoNascimento > 1900 && anoNascimento < dataAtual.getFullYear();

  if (validaDia && validaMes && validaAno) {
    let idade = anoAtual - anoNascimento;
    let idadeMes = (mesAtual + 12 - mesNascimento) % 12;
    let idadeDia = diaAtual - diaNascimento;

    if (mesAtual <= mesNascimento || diaAtual < diaNascimento) {
      idade--;
    }

    if (diaNascimento === diaAtual && mesNascimento === mesAtual) {
      idade++;
    }

    resultadoDia.innerHTML = idadeDia;
    resultadoMes.innerHTML = idadeMes;
    resultadoAno.innerHTML = idade;
  }
});
