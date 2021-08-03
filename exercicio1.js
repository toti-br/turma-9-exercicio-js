// pedir 3 notas de avaliações e calcular a média
// se a média for maior ou igual a 7, exibir que a pessoa foi aprovada
// senão, exibir que a pessoa não foi aprovada

let nota1 = pedirNota()
let nota2 = pedirNota()
let nota3 = pedirNota()

let media = calcularMediaDoAluno(nota1, nota2, nota3)

if (media >= 7) {
  alert("Parabéns! Você alcançou a nota necessária!!")
} else {
  alert("As notas não foram suficientes para aprovação!")
}

function pedirNota() {
  let nota = -1
  
  while(true) {
    nota = Number(prompt("Insira a nota"));

    if (nota >= 0 && nota <= 10) {
        return nota
    }

    alert("A nota deve estar entre 0 e 10")
  }
}

function calcularMediaDoAluno(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}