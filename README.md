# imcCalculator

Projeto simples em `javascript` para realizar o calculo do __IMC__.

- Realiza o calculo e informa a classificação de acordo com a tabela fornecida em [Minuto Saudável](https://minutosaudavel.com.br/como-calcular-imc/#como-calcular)

## Atualização - 19/05/18

Separação de responsabilidades no `JS`. 

- `views/ExibeResultado.js` cuida apenas da exibição na tela.
- `CalculaIMC.js` realiza o calculo e retorna o valor do __IMC__ executando o método estático `exibeImc`.
- `CalculaIMC.js` fica responsável pelo método `_defineCategoria()` que retorna um objeto contendo a classificação e os riscos de acordo com o IMC fornecido. 