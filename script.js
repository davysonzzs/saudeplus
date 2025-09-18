alert("bem vindo a saude++")
alert("somos uma assistencia de saúde, auxiliamos na sua alimentaçãom para um vida mais saudavel!")
alert("analisamos que vc não está cadastrado, vamos fazer seu cadastro!")
let nomeDeUsuario = prompt("digite um nome de usuario:")
let senhaDoUsario = prompt("digite uma senha:")
let senhaDoUsarioConfirmado = prompt("confirme sua senha:")
if(senhaDoUsarioConfirmado == senhaDoUsario){
    alert("bem vindo " + nomeDeUsuario + "!")
    alert("Vamos começar")
    let altura = parseFloat(prompt("Primeiro precisamos saber sua altura,( coloque sua altura como no exemplo a seguir (Ex: 1.70)"))
    let peso = parseFloat(prompt("agora precisamos saber seu peso atual (Ex: 70 ou 70.1")).toFixed(1)
    let idade = parseInt(prompt("agora diga sua idade atual:"))
    // calculo
    let imc = peso / (altura * altura).toFixed(1)
    if(imc < 18.5){
        alert(`ALARMANTE ${nomeDeUsuario.toUpperCase()}, você está abaixo do peso!`)
        alert("De acordo com seu caso iremos fazer sua rotina de aliemntação e hidratação")
        let litrosPorDia = (peso * 35) / 1000
        let litrosAdicionaisPorAtividadeFisica
        let atividadeFisica = parseInt(prompt("qual o nivel da sua atividade fisica (1=sendentario 2=moderado 3=inteso)"))
        switch(atividadeFisica){
            case 1:
                litrosAdicionaisPorAtividadeFisica = 0.20
                break
            case 2:
                litrosAdicionaisPorAtividadeFisica = 0.40
                break
            case 3:
                litrosAdicionaisPorAtividadeFisica = 0.70
                break
            default:
                alert("vc digitou um valor invalido, então não levaremos em conta atividade fisica")
                litrosAdicionaisPorAtividadeFisica = 0.10
                break
        }
        let clima = parseInt(prompt("como anda seu clima ultimamente (1=frio 2=quente)"))
        let litrosAdicionaisPorClima
        switch(clima){
            case 1:
                litrosAdicionaisPorClima = 0.20
                break
            case 2:
                litrosAdicionaisPorClima = 0.40
                break
            default:
                alert("você digitou um numero invalido, então não levaremos em conta o clima")
                break    
        }
        let problemasCardiacos = prompt("Você tem algum problema Cardíaco? S/N").toLowerCase()
        let problemaNosRins = prompt("você tem algum problema nos rins? S/N").toLowerCase()
        let litrosAdicionaisPorDoencas 
        if(problemasCardiacos == "s" || problemasCardiacos == "sim" && problemaNosRins == "s" || problemaNosRins == "sim"){
            litrosAdicionaisPorDoencas = 0.40
        } else if(problemasCardiacos == "s" || problemasCardiacos == "sim" &&  problemaNosRins == "n" || problemaNosRins == "nao" || problemaNosRins == "não"){
            litrosAdicionaisPorDoencas = 0.20
        } else if(problemasCardiacos == "n" || problemasCardiacos == "nao" || problemasCardiacos == "não" && problemaNosRins == "s" || problemaNosRins == "sim"){
            litrosAdicionaisPorDoencas = 0.40
        } else if(problemasCardiacos == "n" || problemasCardiacos == "nao" || problemasCardiacos == "não" && problemaNosRins == "n" || problemaNosRins == "nao" || problemaNosRins == "não"){
            litrosAdicionaisPorDoencas = 0
        } else{
            alert("Algo deu errado, continuaremos sem levar em conta as doenças")
        }
        alert("agora vamos para a alimentação!")
        alert("você esta magro, terá que entra em processo de superávite calórico")
        //carboitratos
        let carboDiario
        if(atividadeFisica == 1){
            carboDiario = peso * 6
        } else if(atividadeFisica == 2){
            carboDiario = peso * 8
        } else if(atividadeFisica == 3){
            carboDiario = peso * 10
        } else{
            alert("algo deu errado, reinicie a pagina, ou continue sem saber seu carbo diario")
        }
        let proteinasDiarias
        if(atividadeFisica == 1){
            proteinasDiarias = peso * 0.9
        } else if(atividadeFisica == 2){
            proteinasDiarias = peso * 1.5
        } else if (atividadeFisica == 3){
            proteinasDiarias = peso * 2.2
        } else{
            alert("algo deu errado, reinicie a pagina, ou continue sem saber sua proteina diario")
        }
        let fibrasDiarias = 30
        //resultado final
        let litrosPorDiaFinal = litrosPorDia + litrosAdicionaisPorAtividadeFisica + litrosAdicionaisPorClima + litrosAdicionaisPorDoencas
        alert(`
            Chekup Concluido

            CONSUMO DE ÁGUA
            seu imc é de ${imc.toFixed(1)}
            seu consumo de água (sem os adicionais): ${litrosPorDia.toFixed(1)}L
            seu consumo de água (com adicionais): ${litrosPorDiaFinal.toFixed(1)}L

            ALIMENTAÇÃO
            seu consumo de diario de carboidratos: ${carboDiario.toFixed(0)}G
            seu consumo de proteinas diarias: ${proteinasDiarias.toFixed(0)}G
            seu consumo de fibras diarias: ${fibrasDiarias}
            `)
    } else if(imc >= 18.5 && imc <= 24.9){
        alert(`PARABÉNS ${nomeDeUsuario.toUpperCase()}, Você está no peso certo!`)
        alert("De acordo com seu caso iremos fazer sua rotina de aliemntação e hidratação")
        let litrosPorDia = (peso * 35) / 1000
        let litrosAdicionaisPorAtividadeFisica
        let atividadeFisica = parseInt(prompt("qual o nivel da sua atividade fisica (1=sendentario 2=moderado 3=inteso)"))
        switch(atividadeFisica){
            case 1:
                litrosAdicionaisPorAtividadeFisica = 0.20
                break
            case 2:
                litrosAdicionaisPorAtividadeFisica = 0.40
                break
            case 3:
                litrosAdicionaisPorAtividadeFisica = 0.70
                break
            default:
                alert("vc digitou um valor invalido, então não levaremos em conta atividade fisica")
                litrosAdicionaisPorAtividadeFisica = 0.10
                break
        }
        let clima = parseInt(prompt("como anda seu clima ultimamente (1=frio 2=quente)"))
        let litrosAdicionaisPorClima
        switch(clima){
            case 1:
                litrosAdicionaisPorClima = 0.20
                break
            case 2:
                litrosAdicionaisPorClima = 0.40
                break
            default:
                alert("você digitou um numero invalido, então não levaremos em conta o clima")
                break    
        }
        let problemasCardiacos = prompt("Você tem algum problema Cardíaco? S/N").toLowerCase()
        let problemaNosRins = prompt("você tem algum problema nos rins? S/N").toLowerCase()
        let litrosAdicionaisPorDoencas 
        if(problemasCardiacos == "s" || problemasCardiacos == "sim" && problemaNosRins == "s" || problemaNosRins == "sim"){
            litrosAdicionaisPorDoencas = 0.40
        } else if(problemasCardiacos == "s" || problemasCardiacos == "sim" &&  problemaNosRins == "n" || problemaNosRins == "nao" || problemaNosRins == "não"){
            litrosAdicionaisPorDoencas = 0.20
        } else if(problemasCardiacos == "n" || problemasCardiacos == "nao" || problemasCardiacos == "não" && problemaNosRins == "s" || problemaNosRins == "sim"){
            litrosAdicionaisPorDoencas = 0.40
        } else if(problemasCardiacos == "n" || problemasCardiacos == "nao" || problemasCardiacos == "não" && problemaNosRins == "n" || problemaNosRins == "nao" || problemaNosRins == "não"){
            litrosAdicionaisPorDoencas = 0
        } else{
            alert("Algo deu errado, continuaremos sem levar em conta as doenças")
        }
        alert("Agora vamos para a alimentação!")
        alert("Você esta no peso certo! sua alimentação será para manter seu peso!")
        let carboDiario
        if(atividadeFisica == 1){
            carboDiario = peso * 4
        } else if(atividadeFisica == 2){
            carboDiario = peso * 6
        } else if(atividadeFisica == 3){
            carboDiario = peso * 8
        } else{
            alert("algo deu errado, reinicie a pagina, ou continue sem saber seu carbo diario")
        }
        let proteinasDiarias
        if(atividadeFisica == 1){
            proteinasDiarias = peso * 0.8
        } else if(atividadeFisica == 2){
            proteinasDiarias = peso * 1.3
        } else if (atividadeFisica == 3){
            proteinasDiarias = peso * 1.9
        } else{
            alert("algo deu errado, reinicie a pagina, ou continue sem saber sua proteina diario")
        }
        let fibrasDiarias = 27
        //resultado final
        let litrosPorDiaFinal = litrosPorDia + litrosAdicionaisPorAtividadeFisica + litrosAdicionaisPorClima + litrosAdicionaisPorDoencas
        alert(`
            Chekup Concluido

            CONSUMO DE ÁGUA
            seu imc é de ${imc.toFixed(1)}
            seu consumo de água (sem os adicionais): ${litrosPorDia.toFixed(1)}L
            seu consumo de água (com adicionais): ${litrosPorDiaFinal.toFixed(1)}L

            ALIMENTAÇÃO
            seu consumo de diario de carboidratos: ${carboDiario.toFixed(0)}G
            seu consumo de proteinas diarias: ${proteinasDiarias.toFixed(0)}G
            seu consumo de fibras diarias: ${fibrasDiarias}
            `)
    } else if(imc >= 25 && imc < 30){
        alert(`CUIDADO ${nomeDeUsuario.toUpperCase()}, você está acima do peso adequado`)
        alert("De acordo com seu caso iremos fazer sua rotina de aliemntação e hidratação")
        let litrosPorDia = (peso * 35) / 1000
        let litrosAdicionaisPorAtividadeFisica
        let atividadeFisica = parseInt(prompt("qual o nivel da sua atividade fisica (1=sendentario 2=moderado 3=inteso)"))
        switch(atividadeFisica){
            case 1:
                litrosAdicionaisPorAtividadeFisica = 0.20
                break
            case 2:
                litrosAdicionaisPorAtividadeFisica = 0.40
                break
            case 3:
                litrosAdicionaisPorAtividadeFisica = 0.70
                break
            default:
                alert("vc digitou um valor invalido, então não levaremos em conta atividade fisica")
                litrosAdicionaisPorAtividadeFisica = 0.10
                break
        }
        let clima = parseInt(prompt("como anda seu clima ultimamente (1=frio 2=quente)"))
        let litrosAdicionaisPorClima
        switch(clima){
            case 1:
                litrosAdicionaisPorClima = 0.20
                break
            case 2:
                litrosAdicionaisPorClima = 0.40
                break
            default:
                alert("você digitou um numero invalido, então não levaremos em conta o clima")
                break    
        }
        let problemasCardiacos = prompt("Você tem algum problema Cardíaco? S/N").toLowerCase()
        let problemaNosRins = prompt("você tem algum problema nos rins? S/N").toLowerCase()
        let litrosAdicionaisPorDoencas 
        if(problemasCardiacos == "s" || problemasCardiacos == "sim" && problemaNosRins == "s" || problemaNosRins == "sim"){
            litrosAdicionaisPorDoencas = 0.40
        } else if(problemasCardiacos == "s" || problemasCardiacos == "sim" &&  problemaNosRins == "n" || problemaNosRins == "nao" || problemaNosRins == "não"){
            litrosAdicionaisPorDoencas = 0.20
        } else if(problemasCardiacos == "n" || problemasCardiacos == "nao" || problemasCardiacos == "não" && problemaNosRins == "s" || problemaNosRins == "sim"){
            litrosAdicionaisPorDoencas = 0.40
        } else if(problemasCardiacos == "n" || problemasCardiacos == "nao" || problemasCardiacos == "não" && problemaNosRins == "n" || problemaNosRins == "nao" || problemaNosRins == "não"){
            litrosAdicionaisPorDoencas = 0
        } else{
            alert("Algo deu errado, continuaremos sem levar em conta as doenças")
        }
        alert("Agora vamos para a alimentação!")
        alert("Você está acima do peso esperado! sua alimetação será para regularizar seu peso")
        let carboDiario
        if(atividadeFisica == 1){
            carboDiario = peso * 3.9
        } else if(atividadeFisica == 2){
            carboDiario = peso * 5
        } else if(atividadeFisica == 3){
            carboDiario = peso * 6
        } else{
            alert("algo deu errado, reinicie a pagina, ou continue sem saber seu carbo diario")
        }
        let proteinasDiarias
        if(atividadeFisica == 1){
            proteinasDiarias = peso * 0.8
        } else if(atividadeFisica == 2){
            proteinasDiarias = peso * 1.5
        } else if (atividadeFisica == 3){
            proteinasDiarias = peso * 2.1
        } else{
            alert("algo deu errado, reinicie a pagina, ou continue sem saber sua proteina diario")
        }
        let fibrasDiarias = 30
        //resultado final
        let litrosPorDiaFinal = litrosPorDia + litrosAdicionaisPorAtividadeFisica + litrosAdicionaisPorClima + litrosAdicionaisPorDoencas
        alert(`
            Chekup Concluido

            CONSUMO DE ÁGUA
            seu imc é de ${imc.toFixed(1)}
            seu consumo de água (sem os adicionais): ${litrosPorDia.toFixed(1)}L
            seu consumo de água (com adicionais): ${litrosPorDiaFinal.toFixed(1)}L

            ALIMENTAÇÃO
            seu consumo de diario de carboidratos: ${carboDiario.toFixed(0)}G
            seu consumo de proteinas diarias: ${proteinasDiarias.toFixed(0)}G
            seu consumo de fibras diarias: ${fibrasDiarias}
            `)
    } else if(imc >= 30 && imc <= 34.9){
        alert(`PREOCUPANTE ${nomeDeUsuario.toUpperCase()}, você está obeso (Obesidade grau 1)`)
        alert("De acordo com seu caso iremos fazer sua rotina de aliemntação e hidratação")
        let litrosPorDia = (peso * 35) / 1000
        let litrosAdicionaisPorAtividadeFisica
        let atividadeFisica = parseInt(prompt("qual o nivel da sua atividade fisica (1=sendentario 2=moderado 3=inteso)"))
        switch(atividadeFisica){
            case 1:
                litrosAdicionaisPorAtividadeFisica = 0.20
                break
            case 2:
                litrosAdicionaisPorAtividadeFisica = 0.40
                break
            case 3:
                litrosAdicionaisPorAtividadeFisica = 0.70
                break
            default:
                alert("vc digitou um valor invalido, então não levaremos em conta atividade fisica")
                litrosAdicionaisPorAtividadeFisica = 0.10
                break
        }
        let clima = parseInt(prompt("como anda seu clima ultimamente (1=frio 2=quente)"))
        let litrosAdicionaisPorClima
        switch(clima){
            case 1:
                litrosAdicionaisPorClima = 0.20
                break
            case 2:
                litrosAdicionaisPorClima = 0.40
                break
            default:
                alert("você digitou um numero invalido, então não levaremos em conta o clima")
                break    
        }
        let problemasCardiacos = prompt("Você tem algum problema Cardíaco? S/N").toLowerCase()
        let problemaNosRins = prompt("você tem algum problema nos rins? S/N").toLowerCase()
        let litrosAdicionaisPorDoencas 
        if(problemasCardiacos == "s" || problemasCardiacos == "sim" && problemaNosRins == "s" || problemaNosRins == "sim"){
            litrosAdicionaisPorDoencas = 0.40
        } else if(problemasCardiacos == "s" || problemasCardiacos == "sim" &&  problemaNosRins == "n" || problemaNosRins == "nao" || problemaNosRins == "não"){
            litrosAdicionaisPorDoencas = 0.20
        } else if(problemasCardiacos == "n" || problemasCardiacos == "nao" || problemasCardiacos == "não" && problemaNosRins == "s" || problemaNosRins == "sim"){
            litrosAdicionaisPorDoencas = 0.40
        } else if(problemasCardiacos == "n" || problemasCardiacos == "nao" || problemasCardiacos == "não" && problemaNosRins == "n" || problemaNosRins == "nao" || problemaNosRins == "não"){
            litrosAdicionaisPorDoencas = 0
        } else{
            alert("Algo deu errado, continuaremos sem levar em conta as doenças")
        }
        alert("Agora vamos para a alimentação!")
        alert("Você infelizmente esta obeso, você entrarar em processo de cutting!")
        let carboDiario
        if(atividadeFisica == 1){
            carboDiario = peso * 3.6
        } else if(atividadeFisica == 2){
            carboDiario = peso * 4.4
        } else if(atividadeFisica == 3){
            carboDiario = peso * 5.8
        } else{
            alert("algo deu errado, reinicie a pagina, ou continue sem saber seu carbo diario")
        }
        let proteinasDiarias
        if(atividadeFisica == 1){
            proteinasDiarias = peso * 0.8
        } else if(atividadeFisica == 2){
            proteinasDiarias = peso * 1.8
        } else if (atividadeFisica == 3){
            proteinasDiarias = peso * 2.2
        } else{
            alert("algo deu errado, reinicie a pagina, ou continue sem saber sua proteina diario")
        }
        let fibrasDiarias = 30
        //resultado final
        let litrosPorDiaFinal = litrosPorDia + litrosAdicionaisPorAtividadeFisica + litrosAdicionaisPorClima + litrosAdicionaisPorDoencas
        alert(`
            Chekup Concluido

            CONSUMO DE ÁGUA
            seu imc é de ${imc.toFixed(1)}
            seu consumo de água (sem os adicionais): ${litrosPorDia.toFixed(1)}L
            seu consumo de água (com adicionais): ${litrosPorDiaFinal.toFixed(1)}L

            ALIMENTAÇÃO
            seu consumo de diario de carboidratos: ${carboDiario.toFixed(0)}G
            seu consumo de proteinas diarias: ${proteinasDiarias.toFixed(0)}G
            seu consumo de fibras diarias: ${fibrasDiarias}
            `)
    } else if(imc >= 35 && imc < 40){
        alert(`MUITO PREOCUPANTE ${nomeDeUsuario.toUpperCase()}, você está obseo (Obesidade grau 2)`)
        alert("De acordo com seu caso iremos fazer sua rotina de aliemntação e hidratação")
        let litrosPorDia = (peso * 35) / 1000
        let litrosAdicionaisPorAtividadeFisica
        let atividadeFisica = parseInt(prompt("qual o nivel da sua atividade fisica (1=sendentario 2=moderado 3=inteso)"))
        switch(atividadeFisica){
            case 1:
                litrosAdicionaisPorAtividadeFisica = 0.20
                break
            case 2:
                litrosAdicionaisPorAtividadeFisica = 0.40
                break
            case 3:
                litrosAdicionaisPorAtividadeFisica = 0.70
                break
            default:
                alert("vc digitou um valor invalido, então não levaremos em conta atividade fisica")
                litrosAdicionaisPorAtividadeFisica = 0.10
                break
        }
        let clima = parseInt(prompt("como anda seu clima ultimamente (1=frio 2=quente)"))
        let litrosAdicionaisPorClima
        switch(clima){
            case 1:
                litrosAdicionaisPorClima = 0.20
                break
            case 2:
                litrosAdicionaisPorClima = 0.40
                break
            default:
                alert("você digitou um numero invalido, então não levaremos em conta o clima")
                break    
        }
        let problemasCardiacos = prompt("Você tem algum problema Cardíaco? S/N").toLowerCase()
        let problemaNosRins = prompt("você tem algum problema nos rins? S/N").toLowerCase()
        let litrosAdicionaisPorDoencas 
        if(problemasCardiacos == "s" || problemasCardiacos == "sim" && problemaNosRins == "s" || problemaNosRins == "sim"){
            litrosAdicionaisPorDoencas = 0.40
        } else if(problemasCardiacos == "s" || problemasCardiacos == "sim" &&  problemaNosRins == "n" || problemaNosRins == "nao" || problemaNosRins == "não"){
            litrosAdicionaisPorDoencas = 0.20
        } else if(problemasCardiacos == "n" || problemasCardiacos == "nao" || problemasCardiacos == "não" && problemaNosRins == "s" || problemaNosRins == "sim"){
            litrosAdicionaisPorDoencas = 0.40
        } else if(problemasCardiacos == "n" || problemasCardiacos == "nao" || problemasCardiacos == "não" && problemaNosRins == "n" || problemaNosRins == "nao" || problemaNosRins == "não"){
            litrosAdicionaisPorDoencas = 0
        } else{
            alert("Algo deu errado, continuaremos sem levar em conta as doenças")
        }
        alert("Agora vamos para a alimentação!")
        alert("VOCẼ ESTA OBESO (OBESIDADE GRAU 2) você terá que entrar em processo de cutting um pouco mais rigoroso")
        let carboDiario
        if(atividadeFisica == 1){
            carboDiario = peso * 3.3
        } else if(atividadeFisica == 2){
            carboDiario = peso * 4.3
        } else if(atividadeFisica == 3){
            carboDiario = peso * 5.4
        } else{
            alert("algo deu errado, reinicie a pagina, ou continue sem saber seu carbo diario")
        }
        let proteinasDiarias
        if(atividadeFisica == 1){
            proteinasDiarias = peso * 0.8
        } else if(atividadeFisica == 2){
            proteinasDiarias = peso * 1.9
        } else if (atividadeFisica == 3){
            proteinasDiarias = peso * 2.5
        } else{
            alert("algo deu errado, reinicie a pagina, ou continue sem saber sua proteina diario")
        }
        let fibrasDiarias = 30
        //resultado final
        let litrosPorDiaFinal = litrosPorDia + litrosAdicionaisPorAtividadeFisica + litrosAdicionaisPorClima + litrosAdicionaisPorDoencas
        alert(`
            Chekup Concluido

            CONSUMO DE ÁGUA
            seu imc é de ${imc.toFixed(1)}
            seu consumo de água (sem os adicionais): ${litrosPorDia.toFixed(1)}L
            seu consumo de água (com adicionais): ${litrosPorDiaFinal.toFixed(1)}L

            ALIMENTAÇÃO
            seu consumo de diario de carboidratos: ${carboDiario.toFixed(0)}G
            seu consumo de proteinas diarias: ${proteinasDiarias.toFixed(0)}G
            seu consumo de fibras diarias: ${fibrasDiarias}
            `)
    } else if(imc > 40){
        alert(`ALARMANTE ${nomeDeUsuario.toUpperCase()}, VOCÊ ESTÁ MUITO OBESO (Obesidade grau 3)`)
        alert("De acordo com seu caso iremos fazer sua rotina de aliemntação e hidratação")
        let litrosPorDia = (peso * 35) / 1000
        let litrosAdicionaisPorAtividadeFisica
        let atividadeFisica = parseInt(prompt("qual o nivel da sua atividade fisica (1=sendentario 2=moderado 3=inteso)"))
        switch(atividadeFisica){
            case 1:
                litrosAdicionaisPorAtividadeFisica = 0.20
                break
            case 2:
                litrosAdicionaisPorAtividadeFisica = 0.40
                break
            case 3:
                litrosAdicionaisPorAtividadeFisica = 0.70
                break
            default:
                alert("vc digitou um valor invalido, então não levaremos em conta atividade fisica")
                litrosAdicionaisPorAtividadeFisica = 0.10
                break
        }
        let clima = parseInt(prompt("como anda seu clima ultimamente (1=frio 2=quente)"))
        let litrosAdicionaisPorClima
        switch(clima){
            case 1:
                litrosAdicionaisPorClima = 0.20
                break
            case 2:
                litrosAdicionaisPorClima = 0.40
                break
            default:
                alert("você digitou um numero invalido, então não levaremos em conta o clima")
                break    
        }
        let problemasCardiacos = prompt("Você tem algum problema Cardíaco? S/N").toLowerCase()
        let problemaNosRins = prompt("você tem algum problema nos rins? S/N").toLowerCase()
        let litrosAdicionaisPorDoencas 
        if(problemasCardiacos == "s" || problemasCardiacos == "sim" && problemaNosRins == "s" || problemaNosRins == "sim"){
            litrosAdicionaisPorDoencas = 0.40
        } else if(problemasCardiacos == "s" || problemasCardiacos == "sim" &&  problemaNosRins == "n" || problemaNosRins == "nao" || problemaNosRins == "não"){
            litrosAdicionaisPorDoencas = 0.20
        } else if(problemasCardiacos == "n" || problemasCardiacos == "nao" || problemasCardiacos == "não" && problemaNosRins == "s" || problemaNosRins == "sim"){
            litrosAdicionaisPorDoencas = 0.40
        } else if(problemasCardiacos == "n" || problemasCardiacos == "nao" || problemasCardiacos == "não" && problemaNosRins == "n" || problemaNosRins == "nao" || problemaNosRins == "não"){
            litrosAdicionaisPorDoencas = 0
        } else{
            alert("Algo deu errado, continuaremos sem levar em conta as doenças")
        }
        alert("Agora vamos para a alimentação!")
        alert("MUITO PREOCUPANTE, OBESIDADE GRAU 3! você terá que entrar um processo de cutting muito rigorosso, procure ajuda medica!")
        let carboDiario
        if(atividadeFisica == 1){
            carboDiario = peso * 3
        } else if(atividadeFisica == 2){
            carboDiario = peso * 4
        } else if(atividadeFisica == 3){
            carboDiario = peso * 4.9
        } else{
            alert("algo deu errado, reinicie a pagina, ou continue sem saber seu carbo diario")
        }
        let proteinasDiarias
        if(atividadeFisica == 1){
            proteinasDiarias = peso * 1
        } else if(atividadeFisica == 2){
            proteinasDiarias = peso * 2
        } else if (atividadeFisica == 3){
            proteinasDiarias = peso * 2.5
        } else{
            alert("algo deu errado, reinicie a pagina, ou continue sem saber sua proteina diario")
        }
        let fibrasDiarias = 30
        //resultado final
        let litrosPorDiaFinal = litrosPorDia + litrosAdicionaisPorAtividadeFisica + litrosAdicionaisPorClima + litrosAdicionaisPorDoencas
        alert(`
            Chekup Concluido

            CONSUMO DE ÁGUA
            seu imc é de ${imc.toFixed(1)}
            seu consumo de água (sem os adicionais): ${litrosPorDia.toFixed(1)}L
            seu consumo de água (com adicionais): ${litrosPorDiaFinal.toFixed(1)}L

            ALIMENTAÇÃO
            seu consumo de diario de carboidratos: ${carboDiario.toFixed(0)}G
            seu consumo de proteinas diarias: ${proteinasDiarias.toFixed(0)}G
            seu consumo de fibras diarias: ${fibrasDiarias}
            `)
    }
} else {
    alert("CONFIRME SUA SENHA DA FORMA CORRETA NOVAMENTE")
    senhaDoUsario = prompt("digite sua senha novamente:")
    senhaDoUsarioConfirmado = prompt("confirme novamente:")
    if(senhaDoUsarioConfirmado == senhaDoUsario){
    alert("bem vindo " + nomeDeUsuario + "!")
    alert("Vamos começar")
    let altura = parseFloat(prompt("Primeiro precisamos saber sua altura,( coloque sua altura como no exemplo a seguir (Ex: 1.70)"))
    let peso = parseFloat(prompt("agora precisamos saber seu peso atual (Ex: 70 ou 70.1")).toFixed(1)
    let idade = parseInt(prompt("agora diga sua idade atual:"))
    // calculo
    let imc = peso / (altura * altura).toFixed(1)
    if(imc < 18.5){
        alert(`ALARMANTE ${nomeDeUsuario.toUpperCase()}, você está abaixo do peso!`)
        alert("De acordo com seu caso iremos fazer sua rotina de aliemntação e hidratação")
        let litrosPorDia = (peso * 35) / 1000
        let litrosAdicionaisPorAtividadeFisica
        let atividadeFisica = parseInt(prompt("qual o nivel da sua atividade fisica (1=sendentario 2=moderado 3=inteso)"))
        switch(atividadeFisica){
            case 1:
                litrosAdicionaisPorAtividadeFisica = 0.20
                break
            case 2:
                litrosAdicionaisPorAtividadeFisica = 0.40
                break
            case 3:
                litrosAdicionaisPorAtividadeFisica = 0.70
                break
            default:
                alert("vc digitou um valor invalido, então não levaremos em conta atividade fisica")
                litrosAdicionaisPorAtividadeFisica = 0.10
                break
        }
        let clima = parseInt(prompt("como anda seu clima ultimamente (1=frio 2=quente)"))
        let litrosAdicionaisPorClima
        switch(clima){
            case 1:
                litrosAdicionaisPorClima = 0.20
                break
            case 2:
                litrosAdicionaisPorClima = 0.40
                break
            default:
                alert("você digitou um numero invalido, então não levaremos em conta o clima")
                break    
        }
        let problemasCardiacos = prompt("Você tem algum problema Cardíaco? S/N").toLowerCase()
        let problemaNosRins = prompt("você tem algum problema nos rins? S/N").toLowerCase()
        let litrosAdicionaisPorDoencas 
        if(problemasCardiacos == "s" || problemasCardiacos == "sim" && problemaNosRins == "s" || problemaNosRins == "sim"){
            litrosAdicionaisPorDoencas = 0.40
        } else if(problemasCardiacos == "s" || problemasCardiacos == "sim" &&  problemaNosRins == "n" || problemaNosRins == "nao" || problemaNosRins == "não"){
            litrosAdicionaisPorDoencas = 0.20
        } else if(problemasCardiacos == "n" || problemasCardiacos == "nao" || problemasCardiacos == "não" && problemaNosRins == "s" || problemaNosRins == "sim"){
            litrosAdicionaisPorDoencas = 0.40
        } else if(problemasCardiacos == "n" || problemasCardiacos == "nao" || problemasCardiacos == "não" && problemaNosRins == "n" || problemaNosRins == "nao" || problemaNosRins == "não"){
            litrosAdicionaisPorDoencas = 0
        } else{
            alert("Algo deu errado, continuaremos sem levar em conta as doenças")
        }
        alert("agora vamos para a alimentação!")
        alert("você esta magro, terá que entra em processo de superávite calórico")
        //carboitratos
        let carboDiario
        if(atividadeFisica == 1){
            carboDiario = peso * 6
        } else if(atividadeFisica == 2){
            carboDiario = peso * 8
        } else if(atividadeFisica == 3){
            carboDiario = peso * 10
        } else{
            alert("algo deu errado, reinicie a pagina, ou continue sem saber seu carbo diario")
        }
        let proteinasDiarias
        if(atividadeFisica == 1){
            proteinasDiarias = peso * 0.9
        } else if(atividadeFisica == 2){
            proteinasDiarias = peso * 1.5
        } else if (atividadeFisica == 3){
            proteinasDiarias = peso * 2.2
        } else{
            alert("algo deu errado, reinicie a pagina, ou continue sem saber sua proteina diario")
        }
        let fibrasDiarias = 30
        //resultado final
        let litrosPorDiaFinal = litrosPorDia + litrosAdicionaisPorAtividadeFisica + litrosAdicionaisPorClima + litrosAdicionaisPorDoencas
        alert(`
            Chekup Concluido

            CONSUMO DE ÁGUA
            seu imc é de ${imc.toFixed(1)}
            seu consumo de água (sem os adicionais): ${litrosPorDia.toFixed(1)}L
            seu consumo de água (com adicionais): ${litrosPorDiaFinal.toFixed(1)}L

            ALIMENTAÇÃO
            seu consumo de diario de carboidratos: ${carboDiario.toFixed(0)}G
            seu consumo de proteinas diarias: ${proteinasDiarias.toFixed(0)}G
            seu consumo de fibras diarias: ${fibrasDiarias}
            `)
    } else if(imc >= 18.5 && imc <= 24.9){
        alert(`PARABÉNS ${nomeDeUsuario.toUpperCase()}, Você está no peso certo!`)
        alert("De acordo com seu caso iremos fazer sua rotina de aliemntação e hidratação")
        let litrosPorDia = (peso * 35) / 1000
        let litrosAdicionaisPorAtividadeFisica
        let atividadeFisica = parseInt(prompt("qual o nivel da sua atividade fisica (1=sendentario 2=moderado 3=inteso)"))
        switch(atividadeFisica){
            case 1:
                litrosAdicionaisPorAtividadeFisica = 0.20
                break
            case 2:
                litrosAdicionaisPorAtividadeFisica = 0.40
                break
            case 3:
                litrosAdicionaisPorAtividadeFisica = 0.70
                break
            default:
                alert("vc digitou um valor invalido, então não levaremos em conta atividade fisica")
                litrosAdicionaisPorAtividadeFisica = 0.10
                break
        }
        let clima = parseInt(prompt("como anda seu clima ultimamente (1=frio 2=quente)"))
        let litrosAdicionaisPorClima
        switch(clima){
            case 1:
                litrosAdicionaisPorClima = 0.20
                break
            case 2:
                litrosAdicionaisPorClima = 0.40
                break
            default:
                alert("você digitou um numero invalido, então não levaremos em conta o clima")
                break    
        }
        let problemasCardiacos = prompt("Você tem algum problema Cardíaco? S/N").toLowerCase()
        let problemaNosRins = prompt("você tem algum problema nos rins? S/N").toLowerCase()
        let litrosAdicionaisPorDoencas 
        if(problemasCardiacos == "s" || problemasCardiacos == "sim" && problemaNosRins == "s" || problemaNosRins == "sim"){
            litrosAdicionaisPorDoencas = 0.40
        } else if(problemasCardiacos == "s" || problemasCardiacos == "sim" &&  problemaNosRins == "n" || problemaNosRins == "nao" || problemaNosRins == "não"){
            litrosAdicionaisPorDoencas = 0.20
        } else if(problemasCardiacos == "n" || problemasCardiacos == "nao" || problemasCardiacos == "não" && problemaNosRins == "s" || problemaNosRins == "sim"){
            litrosAdicionaisPorDoencas = 0.40
        } else if(problemasCardiacos == "n" || problemasCardiacos == "nao" || problemasCardiacos == "não" && problemaNosRins == "n" || problemaNosRins == "nao" || problemaNosRins == "não"){
            litrosAdicionaisPorDoencas = 0
        } else{
            alert("Algo deu errado, continuaremos sem levar em conta as doenças")
        }
        alert("Agora vamos para a alimentação!")
        alert("Você esta no peso certo! sua alimentação será para manter seu peso!")
        let carboDiario
        if(atividadeFisica == 1){
            carboDiario = peso * 4
        } else if(atividadeFisica == 2){
            carboDiario = peso * 6
        } else if(atividadeFisica == 3){
            carboDiario = peso * 8
        } else{
            alert("algo deu errado, reinicie a pagina, ou continue sem saber seu carbo diario")
        }
        let proteinasDiarias
        if(atividadeFisica == 1){
            proteinasDiarias = peso * 0.8
        } else if(atividadeFisica == 2){
            proteinasDiarias = peso * 1.3
        } else if (atividadeFisica == 3){
            proteinasDiarias = peso * 1.9
        } else{
            alert("algo deu errado, reinicie a pagina, ou continue sem saber sua proteina diario")
        }
        let fibrasDiarias = 27
        //resultado final
        let litrosPorDiaFinal = litrosPorDia + litrosAdicionaisPorAtividadeFisica + litrosAdicionaisPorClima + litrosAdicionaisPorDoencas
        alert(`
            Chekup Concluido

            CONSUMO DE ÁGUA
            seu imc é de ${imc.toFixed(1)}
            seu consumo de água (sem os adicionais): ${litrosPorDia.toFixed(1)}L
            seu consumo de água (com adicionais): ${litrosPorDiaFinal.toFixed(1)}L

            ALIMENTAÇÃO
            seu consumo de diario de carboidratos: ${carboDiario.toFixed(0)}G
            seu consumo de proteinas diarias: ${proteinasDiarias.toFixed(0)}G
            seu consumo de fibras diarias: ${fibrasDiarias}
            `)
    } else if(imc >= 25 && imc < 30){
        alert(`CUIDADO ${nomeDeUsuario.toUpperCase()}, você está acima do peso adequado`)
        alert("De acordo com seu caso iremos fazer sua rotina de aliemntação e hidratação")
        let litrosPorDia = (peso * 35) / 1000
        let litrosAdicionaisPorAtividadeFisica
        let atividadeFisica = parseInt(prompt("qual o nivel da sua atividade fisica (1=sendentario 2=moderado 3=inteso)"))
        switch(atividadeFisica){
            case 1:
                litrosAdicionaisPorAtividadeFisica = 0.20
                break
            case 2:
                litrosAdicionaisPorAtividadeFisica = 0.40
                break
            case 3:
                litrosAdicionaisPorAtividadeFisica = 0.70
                break
            default:
                alert("vc digitou um valor invalido, então não levaremos em conta atividade fisica")
                litrosAdicionaisPorAtividadeFisica = 0.10
                break
        }
        let clima = parseInt(prompt("como anda seu clima ultimamente (1=frio 2=quente)"))
        let litrosAdicionaisPorClima
        switch(clima){
            case 1:
                litrosAdicionaisPorClima = 0.20
                break
            case 2:
                litrosAdicionaisPorClima = 0.40
                break
            default:
                alert("você digitou um numero invalido, então não levaremos em conta o clima")
                break    
        }
        let problemasCardiacos = prompt("Você tem algum problema Cardíaco? S/N").toLowerCase()
        let problemaNosRins = prompt("você tem algum problema nos rins? S/N").toLowerCase()
        let litrosAdicionaisPorDoencas 
        if(problemasCardiacos == "s" || problemasCardiacos == "sim" && problemaNosRins == "s" || problemaNosRins == "sim"){
            litrosAdicionaisPorDoencas = 0.40
        } else if(problemasCardiacos == "s" || problemasCardiacos == "sim" &&  problemaNosRins == "n" || problemaNosRins == "nao" || problemaNosRins == "não"){
            litrosAdicionaisPorDoencas = 0.20
        } else if(problemasCardiacos == "n" || problemasCardiacos == "nao" || problemasCardiacos == "não" && problemaNosRins == "s" || problemaNosRins == "sim"){
            litrosAdicionaisPorDoencas = 0.40
        } else if(problemasCardiacos == "n" || problemasCardiacos == "nao" || problemasCardiacos == "não" && problemaNosRins == "n" || problemaNosRins == "nao" || problemaNosRins == "não"){
            litrosAdicionaisPorDoencas = 0
        } else{
            alert("Algo deu errado, continuaremos sem levar em conta as doenças")
        }
        alert("Agora vamos para a alimentação!")
        alert("Você está acima do peso esperado! sua alimetação será para regularizar seu peso")
        let carboDiario
        if(atividadeFisica == 1){
            carboDiario = peso * 3.9
        } else if(atividadeFisica == 2){
            carboDiario = peso * 5
        } else if(atividadeFisica == 3){
            carboDiario = peso * 6
        } else{
            alert("algo deu errado, reinicie a pagina, ou continue sem saber seu carbo diario")
        }
        let proteinasDiarias
        if(atividadeFisica == 1){
            proteinasDiarias = peso * 0.8
        } else if(atividadeFisica == 2){
            proteinasDiarias = peso * 1.5
        } else if (atividadeFisica == 3){
            proteinasDiarias = peso * 2.1
        } else{
            alert("algo deu errado, reinicie a pagina, ou continue sem saber sua proteina diario")
        }
        let fibrasDiarias = 30
        //resultado final
        let litrosPorDiaFinal = litrosPorDia + litrosAdicionaisPorAtividadeFisica + litrosAdicionaisPorClima + litrosAdicionaisPorDoencas
        alert(`
            Chekup Concluido

            CONSUMO DE ÁGUA
            seu imc é de ${imc.toFixed(1)}
            seu consumo de água (sem os adicionais): ${litrosPorDia.toFixed(1)}L
            seu consumo de água (com adicionais): ${litrosPorDiaFinal.toFixed(1)}L

            ALIMENTAÇÃO
            seu consumo de diario de carboidratos: ${carboDiario.toFixed(0)}G
            seu consumo de proteinas diarias: ${proteinasDiarias.toFixed(0)}G
            seu consumo de fibras diarias: ${fibrasDiarias}
            `)
    } else if(imc >= 30 && imc <= 34.9){
        alert(`PREOCUPANTE ${nomeDeUsuario.toUpperCase()}, você está obeso (Obesidade grau 1)`)
        alert("De acordo com seu caso iremos fazer sua rotina de aliemntação e hidratação")
        let litrosPorDia = (peso * 35) / 1000
        let litrosAdicionaisPorAtividadeFisica
        let atividadeFisica = parseInt(prompt("qual o nivel da sua atividade fisica (1=sendentario 2=moderado 3=inteso)"))
        switch(atividadeFisica){
            case 1:
                litrosAdicionaisPorAtividadeFisica = 0.20
                break
            case 2:
                litrosAdicionaisPorAtividadeFisica = 0.40
                break
            case 3:
                litrosAdicionaisPorAtividadeFisica = 0.70
                break
            default:
                alert("vc digitou um valor invalido, então não levaremos em conta atividade fisica")
                litrosAdicionaisPorAtividadeFisica = 0.10
                break
        }
        let clima = parseInt(prompt("como anda seu clima ultimamente (1=frio 2=quente)"))
        let litrosAdicionaisPorClima
        switch(clima){
            case 1:
                litrosAdicionaisPorClima = 0.20
                break
            case 2:
                litrosAdicionaisPorClima = 0.40
                break
            default:
                alert("você digitou um numero invalido, então não levaremos em conta o clima")
                break    
        }
        let problemasCardiacos = prompt("Você tem algum problema Cardíaco? S/N").toLowerCase()
        let problemaNosRins = prompt("você tem algum problema nos rins? S/N").toLowerCase()
        let litrosAdicionaisPorDoencas 
        if(problemasCardiacos == "s" || problemasCardiacos == "sim" && problemaNosRins == "s" || problemaNosRins == "sim"){
            litrosAdicionaisPorDoencas = 0.40
        } else if(problemasCardiacos == "s" || problemasCardiacos == "sim" &&  problemaNosRins == "n" || problemaNosRins == "nao" || problemaNosRins == "não"){
            litrosAdicionaisPorDoencas = 0.20
        } else if(problemasCardiacos == "n" || problemasCardiacos == "nao" || problemasCardiacos == "não" && problemaNosRins == "s" || problemaNosRins == "sim"){
            litrosAdicionaisPorDoencas = 0.40
        } else if(problemasCardiacos == "n" || problemasCardiacos == "nao" || problemasCardiacos == "não" && problemaNosRins == "n" || problemaNosRins == "nao" || problemaNosRins == "não"){
            litrosAdicionaisPorDoencas = 0
        } else{
            alert("Algo deu errado, continuaremos sem levar em conta as doenças")
        }
        alert("Agora vamos para a alimentação!")
        alert("Você infelizmente esta obeso, você entrarar em processo de cutting!")
        let carboDiario
        if(atividadeFisica == 1){
            carboDiario = peso * 3.6
        } else if(atividadeFisica == 2){
            carboDiario = peso * 4.4
        } else if(atividadeFisica == 3){
            carboDiario = peso * 5.8
        } else{
            alert("algo deu errado, reinicie a pagina, ou continue sem saber seu carbo diario")
        }
        let proteinasDiarias
        if(atividadeFisica == 1){
            proteinasDiarias = peso * 0.8
        } else if(atividadeFisica == 2){
            proteinasDiarias = peso * 1.8
        } else if (atividadeFisica == 3){
            proteinasDiarias = peso * 2.2
        } else{
            alert("algo deu errado, reinicie a pagina, ou continue sem saber sua proteina diario")
        }
        let fibrasDiarias = 30
        //resultado final
        let litrosPorDiaFinal = litrosPorDia + litrosAdicionaisPorAtividadeFisica + litrosAdicionaisPorClima + litrosAdicionaisPorDoencas
        alert(`
            Chekup Concluido

            CONSUMO DE ÁGUA
            seu imc é de ${imc.toFixed(1)}
            seu consumo de água (sem os adicionais): ${litrosPorDia.toFixed(1)}L
            seu consumo de água (com adicionais): ${litrosPorDiaFinal.toFixed(1)}L

            ALIMENTAÇÃO
            seu consumo de diario de carboidratos: ${carboDiario.toFixed(0)}G
            seu consumo de proteinas diarias: ${proteinasDiarias.toFixed(0)}G
            seu consumo de fibras diarias: ${fibrasDiarias}
            `)
    } else if(imc >= 35 && imc < 40){
        alert(`MUITO PREOCUPANTE ${nomeDeUsuario.toUpperCase()}, você está obseo (Obesidade grau 2)`)
        alert("De acordo com seu caso iremos fazer sua rotina de aliemntação e hidratação")
        let litrosPorDia = (peso * 35) / 1000
        let litrosAdicionaisPorAtividadeFisica
        let atividadeFisica = parseInt(prompt("qual o nivel da sua atividade fisica (1=sendentario 2=moderado 3=inteso)"))
        switch(atividadeFisica){
            case 1:
                litrosAdicionaisPorAtividadeFisica = 0.20
                break
            case 2:
                litrosAdicionaisPorAtividadeFisica = 0.40
                break
            case 3:
                litrosAdicionaisPorAtividadeFisica = 0.70
                break
            default:
                alert("vc digitou um valor invalido, então não levaremos em conta atividade fisica")
                litrosAdicionaisPorAtividadeFisica = 0.10
                break
        }
        let clima = parseInt(prompt("como anda seu clima ultimamente (1=frio 2=quente)"))
        let litrosAdicionaisPorClima
        switch(clima){
            case 1:
                litrosAdicionaisPorClima = 0.20
                break
            case 2:
                litrosAdicionaisPorClima = 0.40
                break
            default:
                alert("você digitou um numero invalido, então não levaremos em conta o clima")
                break    
        }
        let problemasCardiacos = prompt("Você tem algum problema Cardíaco? S/N").toLowerCase()
        let problemaNosRins = prompt("você tem algum problema nos rins? S/N").toLowerCase()
        let litrosAdicionaisPorDoencas 
        if(problemasCardiacos == "s" || problemasCardiacos == "sim" && problemaNosRins == "s" || problemaNosRins == "sim"){
            litrosAdicionaisPorDoencas = 0.40
        } else if(problemasCardiacos == "s" || problemasCardiacos == "sim" &&  problemaNosRins == "n" || problemaNosRins == "nao" || problemaNosRins == "não"){
            litrosAdicionaisPorDoencas = 0.20
        } else if(problemasCardiacos == "n" || problemasCardiacos == "nao" || problemasCardiacos == "não" && problemaNosRins == "s" || problemaNosRins == "sim"){
            litrosAdicionaisPorDoencas = 0.40
        } else if(problemasCardiacos == "n" || problemasCardiacos == "nao" || problemasCardiacos == "não" && problemaNosRins == "n" || problemaNosRins == "nao" || problemaNosRins == "não"){
            litrosAdicionaisPorDoencas = 0
        } else{
            alert("Algo deu errado, continuaremos sem levar em conta as doenças")
        }
        alert("Agora vamos para a alimentação!")
        alert("VOCẼ ESTA OBESO (OBESIDADE GRAU 2) você terá que entrar em processo de cutting um pouco mais rigoroso")
        let carboDiario
        if(atividadeFisica == 1){
            carboDiario = peso * 3.3
        } else if(atividadeFisica == 2){
            carboDiario = peso * 4.3
        } else if(atividadeFisica == 3){
            carboDiario = peso * 5.4
        } else{
            alert("algo deu errado, reinicie a pagina, ou continue sem saber seu carbo diario")
        }
        let proteinasDiarias
        if(atividadeFisica == 1){
            proteinasDiarias = peso * 0.8
        } else if(atividadeFisica == 2){
            proteinasDiarias = peso * 1.9
        } else if (atividadeFisica == 3){
            proteinasDiarias = peso * 2.5
        } else{
            alert("algo deu errado, reinicie a pagina, ou continue sem saber sua proteina diario")
        }
        let fibrasDiarias = 30
        //resultado final
        let litrosPorDiaFinal = litrosPorDia + litrosAdicionaisPorAtividadeFisica + litrosAdicionaisPorClima + litrosAdicionaisPorDoencas
        alert(`
            Chekup Concluido

            CONSUMO DE ÁGUA
            seu imc é de ${imc.toFixed(1)}
            seu consumo de água (sem os adicionais): ${litrosPorDia.toFixed(1)}L
            seu consumo de água (com adicionais): ${litrosPorDiaFinal.toFixed(1)}L

            ALIMENTAÇÃO
            seu consumo de diario de carboidratos: ${carboDiario.toFixed(0)}G
            seu consumo de proteinas diarias: ${proteinasDiarias.toFixed(0)}G
            seu consumo de fibras diarias: ${fibrasDiarias}
            `)
    } else if(imc > 40){
        alert(`ALARMANTE ${nomeDeUsuario.toUpperCase()}, VOCÊ ESTÁ MUITO OBESO (Obesidade grau 3)`)
        alert("De acordo com seu caso iremos fazer sua rotina de aliemntação e hidratação")
        let litrosPorDia = (peso * 35) / 1000
        let litrosAdicionaisPorAtividadeFisica
        let atividadeFisica = parseInt(prompt("qual o nivel da sua atividade fisica (1=sendentario 2=moderado 3=inteso)"))
        switch(atividadeFisica){
            case 1:
                litrosAdicionaisPorAtividadeFisica = 0.20
                break
            case 2:
                litrosAdicionaisPorAtividadeFisica = 0.40
                break
            case 3:
                litrosAdicionaisPorAtividadeFisica = 0.70
                break
            default:
                alert("vc digitou um valor invalido, então não levaremos em conta atividade fisica")
                litrosAdicionaisPorAtividadeFisica = 0.10
                break
        }
        let clima = parseInt(prompt("como anda seu clima ultimamente (1=frio 2=quente)"))
        let litrosAdicionaisPorClima
        switch(clima){
            case 1:
                litrosAdicionaisPorClima = 0.20
                break
            case 2:
                litrosAdicionaisPorClima = 0.40
                break
            default:
                alert("você digitou um numero invalido, então não levaremos em conta o clima")
                break    
        }
        let problemasCardiacos = prompt("Você tem algum problema Cardíaco? S/N").toLowerCase()
        let problemaNosRins = prompt("você tem algum problema nos rins? S/N").toLowerCase()
        let litrosAdicionaisPorDoencas 
        if(problemasCardiacos == "s" || problemasCardiacos == "sim" && problemaNosRins == "s" || problemaNosRins == "sim"){
            litrosAdicionaisPorDoencas = 0.40
        } else if(problemasCardiacos == "s" || problemasCardiacos == "sim" &&  problemaNosRins == "n" || problemaNosRins == "nao" || problemaNosRins == "não"){
            litrosAdicionaisPorDoencas = 0.20
        } else if(problemasCardiacos == "n" || problemasCardiacos == "nao" || problemasCardiacos == "não" && problemaNosRins == "s" || problemaNosRins == "sim"){
            litrosAdicionaisPorDoencas = 0.40
        } else if(problemasCardiacos == "n" || problemasCardiacos == "nao" || problemasCardiacos == "não" && problemaNosRins == "n" || problemaNosRins == "nao" || problemaNosRins == "não"){
            litrosAdicionaisPorDoencas = 0
        } else{
            alert("Algo deu errado, continuaremos sem levar em conta as doenças")
        }
        alert("Agora vamos para a alimentação!")
        alert("MUITO PREOCUPANTE, OBESIDADE GRAU 3! você terá que entrar um processo de cutting muito rigorosso, procure ajuda medica!")
        let carboDiario
        if(atividadeFisica == 1){
            carboDiario = peso * 3
        } else if(atividadeFisica == 2){
            carboDiario = peso * 4
        } else if(atividadeFisica == 3){
            carboDiario = peso * 4.9
        } else{
            alert("algo deu errado, reinicie a pagina, ou continue sem saber seu carbo diario")
        }
        let proteinasDiarias
        if(atividadeFisica == 1){
            proteinasDiarias = peso * 1
        } else if(atividadeFisica == 2){
            proteinasDiarias = peso * 2
        } else if (atividadeFisica == 3){
            proteinasDiarias = peso * 2.5
        } else{
            alert("algo deu errado, reinicie a pagina, ou continue sem saber sua proteina diario")
        }
        let fibrasDiarias = 30
        //resultado final
        let litrosPorDiaFinal = litrosPorDia + litrosAdicionaisPorAtividadeFisica + litrosAdicionaisPorClima + litrosAdicionaisPorDoencas
        alert(`
            Chekup Concluido

            CONSUMO DE ÁGUA
            seu imc é de ${imc.toFixed(1)}
            seu consumo de água (sem os adicionais): ${litrosPorDia.toFixed(1)}L
            seu consumo de água (com adicionais): ${litrosPorDiaFinal.toFixed(1)}L

            ALIMENTAÇÃO
            seu consumo de diario de carboidratos: ${carboDiario.toFixed(0)}G
            seu consumo de proteinas diarias: ${proteinasDiarias.toFixed(0)}G
            seu consumo de fibras diarias: ${fibrasDiarias}
            `)
    }
    } else {
        alert("reinicie a pagina e recomeçe o cadastro!")
    }
}
