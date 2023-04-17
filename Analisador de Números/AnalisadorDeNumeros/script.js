var numero = document.getElementById('txtnum')
let adicionado = document.getElementById('numAd')
let res = document.querySelector('div#res')
let vetor = [ ]

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inList(n, l){   // "n" significa q vai receber um numero e l significa que vai receber uma lista
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }

}

function adicionar(){
        if(isNumero(numero.value) && !inList(numero.value, vetor)){
        var num = Number(numero.value) 
        vetor.push(num)
        var item = document.createElement('option')
        item.text = `O número ${num} foi adicionado.`
        adicionado.appendChild(item)
        res.innerHTML = ''
        } else{
            alert("Valor Invalido ou já Adicionado")
        }
        numero.value= ''
        numero.focus() //como se clickasse o mouse dentro do campo
    }

function finalizar(){
    if(vetor.length == 0){
        alert("Insira os valores")
    }else{
        let qtdEle = vetor.length
        let maior = vetor[0]
        let menor = vetor[0]
        let soma = 0
        for(let pos in vetor){
            soma += vetor[pos]
            if(vetor[pos] > maior)
            maior = vetor[pos]
            if(vetor[pos] < menor)
            menor = vetor[pos]
        }
       
        let media = soma/qtdEle
        
        res.innerHTML += `<br>Quantidade de Elementos : ${qtdEle}<br>`
        res.innerHTML += `Menor Valor : ${menor} <br>`
        res.innerHTML += `Maior Valor : ${maior}<br>`
        res.innerHTML += `Soma : ${soma}<br>`   
        res.innerHTML += `Media : ${media}<br>`
        }
  
}
