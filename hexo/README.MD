#Tutorial de Instalação e Utilização do Hexo

- _Fonte de estudo_: [Giraffe Academy](https://www.youtube.com/watch?v=Kt7u5kr_P5o&list=PLLAZ4kZ9dFpOMJR6D25ishrSedvsguVSm)

## Instalando o hexo (Linux - Ubuntu)

`npm install -g hexo-cli`

É necessário ter o _node_ instalado na máquina.

## Criando um novo site

`hexo init nomeDoProjeto`

Será criada uma nova pasta com o nome do projeto, e para visualizar o que foi criado, precisamos entrar no diretório do projeto: `$ cd nomeDoProjeto` e em seguida executar `hexo server`.

A página ficará disponível no _localhost_ na porta informada após a execução. No meu caso, o link ficou:

_http://localhost:4000/_

## Escrevendo e Organizando conteúdo

Para criar um novo post, digitamos no terminal dentro da pasta do nosso site (no caso *mySite*):

`hexo new nomeDoPost`

Será gerado um arquivo *nomeDoPost.md* dentro da pasta `source/_posts`. Nesse caso, o post é enviado direto para a lista de exibição de posts.

Caso seja necessário criar um post (rascunho) ou que ainda não está pronto para a publicação, podemos criar um _draft_:

`hexo new draft nomeDoPost`

Será gerado um arquivo *nomeDoPost.md* dentro da pasta `source/_drafts`. Os arquivos dentro desta pasta não serão publicados no site.

Para publicá-los, usamos o comando `hexo publish nomeDoPost`.

Para criar uma _Page_, seguimos a mesma lógica e usamos `hexo new page nomeDaPagina`.

Será criada uma nova pasta dentro de `/source` com o nome da página criada e dentro dela um arquivo `index.md`.

Se não for especificado o que será criado no comando `hexo new`, ele assume que o arquivo criado é um post. Esse comportamento pode ser alterado no arquivo _config.yml_, no atributo `default_layout`.

