
# GCEPD
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.

## Resumo
GCEPD é um sistema de gerenciamento e consulta para produtos domésticos. A ideia é permitir ao usuário cadastrar seus produtos domésticos recém comprados ou até mesmo usados com todas as informações relevantes sobre esse produto, para que futuramente o mesmo seja consultado, deletado ou editado.

## Tecnologias
- Angular
- TypeScript
- HTML
- CSS
- Node.js
<!-- - spring boot
- kotlin -->


## Estrutura
### Frontend
As principais estruturas que compõem o visual do projeto são os components, pages, shared. 

components se referem as menores estruturas do projeto, que normalmente são reutilizadas em várias partes, porém, com algumas modificações no conteúdo.

Pages se refere a pasta que contém todas as páginas importantes do GCEPD, essas pages são compostas de components diferentes, e esses mesmos components são organizados de formas diferentes para cada página

shared são como as pages, porém, são pages globais, e isso significa que eles estão presentes em qualquer contexto e são fixos, os exemplos são: header, footer, aside


<!-- ### Backend -->

<!-- ## Funcionalidades atuais -->

## Como acessar o Projeto via Angular
- primeiro faça o `git clone` para baixar o repositório completo na sua máquina ou baixe via <b>zip</b> e descompacte na sua pasta desejada
  
- para ir para o próximo passo será necessário ter instalado o <b><a href="https://nodejs.org/en">node.js</a></b> com ele teremos o gerenciador de dependẽncias <b>npm</b>, com ele será possível instalar o CLI do angular

- depois será preciso baixar o <b><a href="https://angular.io/guide/setup-local#install-the-angular-cli">angular CLI</a></b>,com ele será possível executar alguns comandos necessários para rodar esse projeto angular localmente 

- dentro da pasta deste projeto rode no terminal `ng serve` para abrir um servidor local de desenvolvimento, navegue até a url `http://localhost:4200/`. A aplicação será automaticamente recarregada se vocẽ fizer alguma alteração, com isso será possível ver todo o código da aplicação

- para obter mais informações em como usar o <b>angular CLI</b> use o `ng help` no terminal integrado e vocẽ verá várias opções de comandos e suas descrições. ou então vá para [Angular CLI Overview and Command Reference](https://angular.io/cli).

