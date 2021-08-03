// pedir o preço de um produto
// -- (alternativa: pedir para escolher entre alguns produtos, cada um com um preço)

// perguntar se o usuário deseja pagar a vista ou parcelado

// se escolher pagar a vista, aplicar um desconto de 10%

// se escolher parcelar, perguntar em quantas vezes (até 6)

//  -- aplicar um acréscimo de 1.5% * a quantidade de parcelas
// informar a forma de pagamento e o valor final


// prompt <-- pegar dados do usuário
// alert  <-- mostrar mensagens para o usuário
// confirm <-- pegar dados do usuário (sim, não)


 // parseInt -- para inteiros
 // parseFloat -- para números decimais
 // Number -- para números com casas decimais
let preco = parseFloat(prompt("Qual é o preço do produto?"))

const A_VISTA = "1"
const PARCELADO = "2"

const QUANTIDADE_MAX_PARCELAS = 12

let formaDePagamento = pedirFormaDePagamento()
let precoFinal

if (formaDePagamento == A_VISTA) {
    alert("Pagar à vista")
    precoFinal = calcularPrecoTotal(preco, 1)
} else if (formaDePagamento == PARCELADO) {
    let quantidadeDeParcelas = pedirQuantidadeDeParcelas(QUANTIDADE_MAX_PARCELAS)
    alert("Pagar em " + quantidadeDeParcelas + " vezes")
    precoFinal = calcularPrecoTotal(preco, quantidadeDeParcelas)
}

alert("O preço original é " + preco)
alert("Será pago o valor de " + precoFinal)


function calcularPrecoTotal(precoOriginal, quantidadeDeParcelas) {
    if (quantidadeDeParcelas == 1) {
        return calcularPrecoTotalAVista(precoOriginal)
    } else {
        return calcularPrecoTotalParcelado(precoOriginal, quantidadeDeParcelas)
    }
}

function calcularPrecoTotalAVista(precoOriginal) {
    let desconto = precoOriginal * 10 / 100 // 10%
    return precoOriginal - desconto
}

function calcularPrecoTotalParcelado(precoOriginal, quantidadeDeParcelas) {
    let acrescimo = precoOriginal * 1.5 * quantidadeDeParcelas / 100
    return precoOriginal + acrescimo
}

function pedirFormaDePagamento() {
    let opcao = ""

    while (true) {
        opcao = prompt(
            "Como deseja pagar pelo produto?\n" +
            A_VISTA + " - A vista\n" +
            PARCELADO + " - Parcelado (até " + QUANTIDADE_MAX_PARCELAS + " vezes)"
            )
        
        if ((opcao == A_VISTA) || (opcao == PARCELADO)) {
            return opcao
        }

        alert("Opção inválida!\nEscolha " + A_VISTA + " ou " + PARCELADO)
    }
}

function pedirQuantidadeDeParcelas(quantidadeMax) {
    let opcao = 0

    while (true) {
        opcao = parseInt(prompt("Qual a quantidade de parcelas? (entre 2 e " + quantidadeMax + ")"))
        
        if ((opcao >= 2) && (opcao <= quantidadeMax)) {
            return opcao
        }

        alert("Quantidade de parcelas inválida!")
    }
}