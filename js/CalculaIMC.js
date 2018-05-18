class CalculaIMC {
    
    constructor(){

        let $ = document.querySelector.bind(document);

        this._peso = $('#inputPeso')
        this._altura = $('#inputAltura')
        this._resultado = $('#resultado_valor')
        this._categoria = [
            {'classe': 'Magreza Grave', 'risco': 'Insuficiência cardíaca, anemia grave, enfraquecimento do sistema imunológico'},
            {'classe': 'Magreza Moderada', 'risco': 'Infertilidade, queda de cabelo, falta da menstruação'},
            {'classe': 'Magreza Leve', 'risco': 'Estresse, ansiedade, fadiga'},
            {'classe': 'Saudável', 'risco': 'Menor risco para doenças'},
            {'classe': 'Sobrepeso', 'risco': 'Fadiga, varizes, má circulação'},
            {'classe': 'Obesidade Grau 1', 'risco': 'Diabetes, infarto, angina, aterosclerose'},
            {'classe': 'Obesidade Severa', 'risco': 'Apneia do sono, falta de ar'},
            {'classe': 'Obesidade Mórbida', 'risco': 'Refluxo, infarto, AVC, dificuldade de locomoção, escaras'}           
        ]
    }

    _calcula(){        

        let p = parseFloat(this._peso.value)
        let a = parseFloat(this._altura.value)

        let imc = (p / Math.pow(a,2)).toFixed(2)

        return imc
    }

    exibeImc(event){

        event.preventDefault()
        
        let valorImc = this._calcula()

        let divResult = document.createElement('input')
        divResult.value = valorImc
        divResult.setAttribute('disabled',true)
        this._resultado.innerHTML = ""
        this._resultado.appendChild(divResult)
        
        let txtClasse = document.createElement('h3')
        let classeNode

        let txtRisco = document.createElement('p')
        let riscoNode
        
        if(valorImc < 16){
            classeNode = document.createTextNode(this._categoria[0].classe)
            riscoNode = document.createTextNode(this._categoria[0].risco)
        }
        if(valorImc >=16 && valorImc < 17){
            classeNode = document.createTextNode(this._categoria[1].classe)
            riscoNode = document.createTextNode(this._categoria[1].risco)
        }
        if(valorImc >=17 && valorImc < 18.5){
            classeNode = document.createTextNode(this._categoria[2].classe)
            riscoNode = document.createTextNode(this._categoria[2].risco)
        }
        if(valorImc >=18.5 && valorImc < 25){
            classeNode = document.createTextNode(this._categoria[3].classe)
            riscoNode = document.createTextNode(this._categoria[3].risco)
        }
        if(valorImc >=25 && valorImc < 30){
            classeNode = document.createTextNode(this._categoria[4].classe)
            riscoNode = document.createTextNode(this._categoria[4].risco)
        }
        if(valorImc >=30 && valorImc < 35){
            classeNode = document.createTextNode(this._categoria[5].classe)
            riscoNode = document.createTextNode(this._categoria[5].risco)
        }
        if(valorImc >=35 && valorImc < 40){
            classeNode = document.createTextNode(this._categoria[6].classe)
            riscoNode = document.createTextNode(this._categoria[6].risco)
        }
        if(valorImc >= 40){
            classeNode = document.createTextNode(this._categoria[7].classe)
            riscoNode = document.createTextNode(this._categoria[7].risco)
        }

        txtClasse.appendChild(classeNode)
        txtRisco.appendChild(riscoNode)

        let divClasse = document.createElement('div')
        
        divClasse.appendChild(txtClasse)
        divClasse.appendChild(txtRisco)

        this._resultado.appendChild(divClasse)

    }
}