class CalculaIMC {
    
    constructor(){

        let $ = document.querySelector.bind(document);

        this._peso = $('#inputPeso')
        this._altura = $('#inputAltura')
    }

    calcula(event){
        
        event.preventDefault()

        let p = parseFloat(this._peso.value)
        let a = parseFloat(this._altura.value)

        let imc = (p / Math.pow(a,2)).toFixed(2)

        return ExibeResultado.exibeImc(imc)
    }

    static _defineCategoria(imc){
        
        let result = []
        
        let categoria = [
            {'classe': 'Magreza Grave', 'risco': 'Insuficiência cardíaca, anemia grave, enfraquecimento do sistema imunológico'},
            {'classe': 'Magreza Moderada', 'risco': 'Infertilidade, queda de cabelo, falta da menstruação'},
            {'classe': 'Magreza Leve', 'risco': 'Estresse, ansiedade, fadiga'},
            {'classe': 'Saudável', 'risco': 'Menor risco para doenças'},
            {'classe': 'Sobrepeso', 'risco': 'Fadiga, varizes, má circulação'},
            {'classe': 'Obesidade Grau 1', 'risco': 'Diabetes, infarto, angina, aterosclerose'},
            {'classe': 'Obesidade Severa', 'risco': 'Apneia do sono, falta de ar'},
            {'classe': 'Obesidade Mórbida', 'risco': 'Refluxo, infarto, AVC, dificuldade de locomoção, escaras'}           
        ]

        imc < 16? 
            result.push(categoria[0]) : ''
        imc >= 16 && imc < 17? 
            result.push(categoria[1]) : ''
        imc >= 17 && imc < 18.5? 
            result.push(categoria[2]) : ''
        imc >= 18.5 && imc < 25? 
            result.push(categoria[3]) : ''
        imc >= 25 && imc < 30? 
            result.push(categoria[4]) : ''
        imc >= 30 && imc < 35? 
            result.push(categoria[5]) : ''
        imc >= 35 && imc < 40? 
            result.push(categoria[6]) : ''
        imc >= 40? 
            result.push(categoria[7]) : ''
        
        return result 
    }
    
}