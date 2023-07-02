const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const botao = document.querySelector(".logo");
const listaInputs = document.querySelectorAll(".lista-item");
const resultadoDia = document.querySelector(".dias");
const resultadoMes = document.querySelector(".meses");
const resultadoAno = document.querySelector(".anos");
const invalid = document.querySelector(".text-error");
const erroTitulo = document.querySelector(".titulo-lista");
const erroInput = document.querySelector(".input");
let idade, idadeDia, idadeMes;

botao.addEventListener("click", (event) => {
  event.preventDefault();

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
  const validaAno = anoNascimento > 0 && anoNascimento <= anoAtual;

  if (validaDia && validaMes && validaAno) {
    
    if (
      anoNascimento > anoAtual ||
      (mesNascimento > mesAtual && anoNascimento == anoAtual) ||
      (diaNascimento > diaAtual &&
        mesNascimento == mesAtual &&
        anoNascimento == anoAtual)
    ) {
      return;
    }

    idade = anoAtual - anoNascimento;

    if (mesAtual >= mesNascimento) {
      idadeMes = mesAtual - mesNascimento;
    } else {
      idade--;
      idadeMes = 12 + mesAtual - mesNascimento;
    }

    if (diaAtual >= diaNascimento) {
      idadeDia = diaAtual - diaNascimento;
    } else {
      idadeMes--;
      let days = months[mesAtual - 2];
      idadeDia = days + diaAtual - diaNascimento;
      if (idadeMes < 0) {
        idadeMes = 11;
        idade--;
      }
    }
  }


  resultadoDia.innerHTML = idadeDia;
  resultadoMes.innerHTML = idadeMes;
  resultadoAno.innerHTML = idade;

  function dataInvalida() {

    erroTitulo.classList.add("titulo-error");
    erroInput.classList.add("input-error");
    invalid.style.display = "block";
  }

  if (!validaDia || !validaMes || !validaAno) {
    const tituloError = document.querySelectorAll('.titulo-lista');
    const textError = document.querySelectorAll('.text-error');
    const inputError = document.querySelectorAll('.input');
    const erro = inputError + textError + tituloError;

    tituloError.forEach((e) => {
       e.classList.add('titulo-error');
    });

    textError.forEach((e) => {
       e.style.display = 'block'
    });

    inputError.forEach((e) => {
       e.style.border = '1px solid hsl(0, 100%, 67%)'
    });

    
  }
});
