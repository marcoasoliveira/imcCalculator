class ExibeResultado {
    
    static exibeImc(imc){

        let resultado = document.querySelector('#resultado_valor')

        let inputResult = document.createElement('input')
        inputResult.value = imc
        inputResult.setAttribute('disabled',true)
        resultado.innerHTML = ""
        resultado.appendChild(inputResult)
        
        let categoria = CalculaIMC._defineCategoria(imc)

        let txtClasse = document.createElement('h3')
        let classeNode = document.createTextNode(categoria[0].classe)

        let txtRisco = document.createElement('p')
        let riscoNode = document.createTextNode('Sintomas: ' + categoria[0].risco)

        txtClasse.appendChild(classeNode)
        txtRisco.appendChild(riscoNode)

        let divClasse = document.createElement('div')
        
        divClasse.appendChild(txtClasse)
        divClasse.appendChild(txtRisco)

        resultado.appendChild(divClasse)

    }

}