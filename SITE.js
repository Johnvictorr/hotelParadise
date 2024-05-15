/*variavel de tela de login e tela de registro */
var up1 = document.querySelector('.pop1')
var up2 = document.querySelector('.pop2')
var up3 = document.querySelector('.pop3')
var up4 = document.querySelector('.pop4')
var up5 = document.querySelector('.pop5')

/*abrir tela de login  */
var abra = document.querySelector('.abrir')
abra.addEventListener('click', jan1)
function jan1(){
    up1.showModal()
}
var fecha = document.querySelector('.fechar')
fecha.addEventListener('click', fechamento)
function fechamento(){
    up1.close()
}
var proximo = document.querySelector('.prox')
proximo.addEventListener('click', proxima)
function proxima(){
    up1.close()
    up2.showModal()
}

/*abrir tela de registro  */
var abra2 = document.querySelector('.abrir2')
abra2.addEventListener('click', jan2)
function jan2(){
    up2.showModal()
}
var proximo2 = document.querySelector('.prox2')
proximo2.addEventListener('click', proxima2)
function proxima2(){
    up2.close()
    up1.showModal()
}
var fecha2 = document.querySelector('.fechar2')
fecha2.addEventListener('click', fechamento2)
function fechamento2(){
    up2.close()
}


/*abrir tela de agendamento*/
var abra3 = document.querySelector('.abrir3')
abra3.addEventListener('click', jan3)
function jan3(){
    up3.showModal()
}
var fecha3 = document.querySelector('.fechar3')
fecha3.addEventListener('click', fechamento3)
function fechamento3(){
    up3.close()
}
var abavagas = document.querySelector('.govagas')
abavagas.addEventListener('click', irvagas)
function irvagas(){
    up3.close()
    up4.showModal()
}

/*abrir tela de quartos*/
var abra4 = document.querySelector('.abrir4')
abra4.addEventListener('click', jan4)
function jan4(){
    up4.showModal()
}
var fecha4 = document.querySelector('.fechar4')
fecha4.addEventListener('click', fechamento4)
function fechamento4(){
    up4.close()
}
var goagendar = document.querySelector('.agendar')
goagendar.addEventListener('click', goabaagenda)
function goabaagenda(){
    up4.close()
    up3.showModal()
}

/*calculo de valor a pagar*/
var btncalc = document.querySelector('.calc')
btncalc.addEventListener('click', calcular)
function calcular(){
    var adult = document.querySelector('.n-adult')
    var crian = document.querySelector('.n-crian')
    var numAdult = Number(adult.value)
    var numCrian = Number(crian.value)

    var quart1 = document.querySelector('.quarto1')
    var quart2 = document.querySelector('.quarto2')
    var numQuart1 = Number(quart1.value)
    var numQuart2 = Number(quart2.value)

    var valquart1 = 0
    var valquart2 = 0
    var tipoquart1 = document.getElementById('t-quarto1')
    var escquart1 = tipoquart1.options[tipoquart1.selectedIndex].value
    if(escquart1 == 't1'){
        var valquart1 = 10
        var valorQuarto1 = parseInt(valquart1)
    }else if(escquart1 == 't2'){
        var valquart1 = 20
        var valorQuarto1 = parseInt(valquart1)
    }else if(escquart1 == 't3'){
        var valquart1 = 30
        var valorQuarto1 = parseInt(valquart1)
    }
    var tipoquart2 = document.getElementById('t-quarto2')
    var escquart2 = tipoquart2.options[tipoquart2.selectedIndex].value
    if(escquart2 == 't1'){
        var valquart2 = 10
        var valorQuarto2 = parseInt(valquart2)
    }else if(escquart2 == 't2'){
        var valquart2 = 20
        var valorQuarto2 = parseInt(valquart2)
    }else if(escquart2 == 't3'){
        var valquart2 = 30
        var valorQuarto2 = parseInt(valquart2)
    }


    var valor = 1000 + (numAdult*50) + (numCrian*25) + (numQuart1*valorQuarto1) + (numQuart2*valorQuarto2)
    var random = 0 + valor
    var dinhei = random.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    var val = document.querySelector('.valor-final')
    val.innerHTML = dinhei

    var quanti = numAdult + numCrian
    var pessoas = document.querySelector('.quantid-pessoas')
    pessoas.innerHTML = `${quanti} pessoas`
    var quantiquart = numQuart1 + numQuart2
    var quantidadquart = document.querySelector('.quantid-quart')
    quantidadquart.innerHTML = `${quantiquart} quartos`
    var checkin = document.querySelector('.input-chegada')
    var chekout = document.querySelector('.input-saida')
    var chegada = checkin.value
    var saida = chekout.value
    var chegadatxt = document.querySelector('.quantid-chekin')
    var saidatxt = document.querySelector('.quantid-checkout')
    chegadatxt.innerHTML = `${chegada}`
    saidatxt.innerHTML = `${saida}`
}



/*abrir tela de pagamento*/
var abra5 = document.querySelector('.abrir5')
abra5.addEventListener('click', jan5)
function jan5(){
    up5.showModal()
    up3.close()
}
var fecha5 = document.querySelector('.fechar5')
fecha5.addEventListener('click', fechamento5)
function fechamento5(){
    up5.close()
    up3.showModal()
}
var confirmarpag = document.querySelector('.aceitar-pag')
confirmarpag.addEventListener('click', pagar)
function pagar(){
    abapagament.style.display = 'none'
    confirmarpag.style.display = 'none'
    up5.close()
    up5.style.height = '300px'
}

/*escolha de bandeira de cartão e pagar*/
var abapagament = document.querySelector('.mostra-pagament')
var imgvisa = document.querySelector('.div-visa')
var imgmaster = document.querySelector('.div-master')
var imgamerican = document.querySelector('.div-american')
var compra = document.querySelector('.pagar')
compra.addEventListener('click', bandeiras)
function bandeiras(){
    var band = document.getElementById('bandeira')
    var escband = band.options[band.selectedIndex].value
    if (escband == 'visa'){
        abapagament.style.display = 'flex'
        imgvisa.style.display = 'block'
        imgmaster.style.display = 'none'
        imgamerican.style.display = 'none'
    }else if(escband == 'master'){
        abapagament.style.display = 'flex'
        imgmaster.style.display = 'block'
        imgvisa.style.display = 'none'
        imgamerican.style.display = 'none'
    }else if(escband == 'american'){
        abapagament.style.display = 'flex'
        imgamerican.style.display = 'block'
        imgvisa.style.display = 'none'
        imgmaster.style.display = 'none'
    }
    confirmarpag.style.display = 'block'
    up5.style.height = '600px'
}