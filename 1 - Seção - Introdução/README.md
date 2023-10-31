##
### Seção 1 - Introdução
##


<p align="center">
  <img alt="...." src="../src/reactjs_logo_icon_170805.png" width="100%">
</p>



O React (também denominado React.js ou ReactJS) é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.

Criado em 2011 pelo Facebook, com a criação de views declarativas e baseando-se em componentes, possuía o intuito de otimizar a atualização e a sincronização de atividades simultâneas no feed de notícias da rede social e melhorar a manutenção de código.

É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.

Em 2015, o Facebook anunciou o módulo React Native, que em conjunto com o React, possibilita o desenvolvimento de aplicativos para Android e iOS utilizando componentes de interface de usuário nativos de ambas plataformas, sem precisar recorrer ao HTML.

Na pesquisa de 2018 sobre hábitos de desenvolvedores do site Stack Overflow, o React foi a terceira biblioteca ou framework mais citado pelos usuários e desenvolvedores profissionais, ficando atrás somente do Node.js e Angular, respectivamente.

JSX
Semelhante ao HTML, o JSX é uma extensão de sintaxe para JavaScript. Embora seu uso não seja obrigatório, a maioria dos desenvolvedores o utiliza para descrever como a UI deveria parecer.

Exemplo :
```jsx
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

Depois da compilação, as expressões em JSX se transformam em chamadas normais de funções que retornam objetos JavaScript.

Virtual DOM
É uma representação virtual da interface do usuário que é armazenada em memória e mantida em sincronia com a DOM “real”. Dessa forma, o React só altera na verdadeiro DOM apenas o que foi modificado. Assim,  é abstraída a manipulação de atributos, de eventos e atualização manual do DOM.

A Virtual DOM  está associada aos elementos da biblioteca, que são objetos representando a UI. Entretanto, o React também possui os “fibers”, que são objetos internos que contém informações sobre a árvore de componentes e podem ser considerados parte da Virtual DOM.

Algoritmo de Reconciliação
Reconciliação é o processo pelo qual o React atualiza o DOM do navegador. A cada renderização o React retorna uma árvore de elementos diferentes. Nesse sentido, é necessário descobrir como a interface deve ser atualizada para estar em sincronia com a última árvore apresentada. Os conceitos por trás deste algoritmo são a Virtual DOM e o algoritmo de diffing.

Em toda atualização, é criado uma nova Virtual DOM e compara com a sua versão anterior. Essa comparação ocorre pelo algoritmo de diffing. Após a comparação ser  realizada, uma outra Virtual DOM é produzida já com as alterações adicionadas. Por fim, o React faz a atualização da DOM “real” no navegador com o menor número de atualizações possíveis.


- Fonte: 
    - Link: https://pt.wikipedia.org/wiki/React_(JavaScript)




##



**Ferramentas do Programador**


- Documentação:
    - Link: https://pt-br.legacy.reactjs.org/

- Google Chrome
    - Link: https://www.google.com/intl/pt-BR/chrome/

- Nodejs (LTS)
    - Link: https://nodejs.org/en

- Visual Studio Code
    - Link: https://code.visualstudio.com/download


**Comando que Cria o Projeto ReactJS**

- Cria o projeto react
```
npx create-react-app reactjs_01
```

- Roda o projeto react
```
npm start
```


##


### 1 - Introdução do curso

- React do Zero a Maestria (c/ hooks, router, API, Projetos)

- Exemplo:
    - reactjs_01


### 2 - Apresentação do curso

- Seção 1 - Introdução
- Seção 2 - Fundamentos do React
- Seção 3 - Avançando em React
- Seção 4 - React e CSS
- Seção 5 - Formulários com React
- Seção 6 - Projeto: Secret Word
- Seção 7 - Requisição HTTP com React
- Seção 8 - React Router
- Seção 9 - Context Api do React
- Seção 10 - Projeto: MiniBlog (React Router, Hooks, Context, Firebase, Autenticação) 
- Seção 11 - Entenda os Hooks do React
- Seção 12 - Projeto: ReactGram (React, Redux, Express, MongoDB, Mongoose)
- Seção 13 - Deploy de projetos em React
- Seção 14 - Apêndice A: JavaScript Moderno
- Seção 15 - Apêndice B: Introdução a APIs
- Seção 16 - Apêndice C: Setup do TypeScript
- Seção 17 - Apêndice D: React com TypeScript
- Seção 18 - Apêndice E: Projeto de React com TypeScript
- Seção 19 - Apêndice F: Projeto em React com API do TMDB
- Seção 20 - Conclusão e próximos passos

- Exemplo:
    - reactjs_02



### 3 - O que é React?

**O que é React ?**

- React é uma **biblioteca JavaScript** para desenvolvimento de aplicações front-end
- Estas aplicações são chamadas de **SPA** (Single Page Application)
- A arquitetura do React é baaseada em **Componentes**
- Pode ser **inserido em uma aplicação** ou podemos criar a aplicação apenas com React
- É mantido pelo **Facebook**

**React.js**

- Documentação:
    - Link: https://pt-br.legacy.reactjs.org/


- Exemplo:
    - reactjs_03


### O que é Node.js?

**O que é Node.js ?**

- O **Node.js** é um runtime de JavaScript
- Ou seja, **uma biblioteca utilizada por um compilador** durante a execução do programa
- Que está construido na **V8 engine** (escrita em C++) da Google
- Possibilitando criar softwares em JS no lado do servidor
- Temos então um código JS rodando em C++ para garantir **alta performance**

**Node.js**

- Nodejs (LTS)
    - Link: https://nodejs.org/en

- Exemplo:
    - reactjs_04




### 5 - O que é NPM?

**O que é NPM ?**

- O **npm** é um gerenciador de pacotes do Node
- Vamos poder utilizar **bibliotecas de terceiros**, baixando elas pelo npm
- E também **executar determinados scripts** no nosso programa
- Dificilmente um software em Node.js não utiliza o npm
- Os módulos externos ficam numa pasta chamada `node_modeules`
- Ela deve ser descantável, ou seja, cada instalação do projeto baixamos todos os pacotes novamente

**Npm.js**

- NPM JS
    - Link: https://www.npmjs.com/

- Exemplo:
    - reactjs_05


### 6 - Instalação do Node.js no Windows

**Instalação Node Windows**

- O download do Node.js é feito no site oficial: https://nodejs.org/en
- Vamos baixar um arquivo **.msi**, que é o instalador
- É interessante saber que o **npm** vem junto do Node
- Após a instalação podemos testar o node e o npm em um terminal, para validar a instalação
- Note que os binários precisam estar no **PATH**, este passo estáa na instalação do Node


**PowerShell**

- Terminal

- Verifica a versão do node instalado
```
node -v
```

- Verifica a versão do npm instalado
```
npm -v
```


- Exemplo:
    - reactjs_06



### 7 - Instalação do Node.js no Linux

- O download do Node.js é feito no site oficial: https://nodejs.org/en
- Vamos baixar um arquivo **.msi**, que é o instalador
- Note que o **npm** vem junto do Node
- Após a instalação precisamos validar em um **terminal**


**Terminal**


- Instala o Nodejs
```
sudo apt install nodejs
```

- Verifica a versão do node instalado
```
nodejs -v
```

- Instala o NPM
```
sudo apt install npm
```

- Verifica a versão do npm instalado
```
npm -v
```

- Exemplo:
    - reactjs_07



### 8 - Instalação do Visual Studio Code

- Ao longo do curso o editor utulizado será o VSCode
- Ele tem algumas vantagens em trabalhar com Node também, como o **terminal integrado**
- Além de ser **atualizado constantemente**, é mantido pela Microsoft
- Muito utilizado no **ambiente corporativo**
- Link: https://code.visualstudio.com/download

- Exemplo:
    - reactjs_08






### 9 - Hello World em React

**Hello World em React**

- Para criar as nossas aplicações em React vamos utilizar um executor de scripts do Node, que é o **npx**
- Com o comando `npx create-react-app <nome>` temos uma nova aplicação sendo gerada
- Podemos iniciar a aplicação com **npm start**


- Exemplo:
    - reactjs_09


### 10 - Criação de projetos com Vite

**Vite JS**

- ViteJS
    - Link: https://vitejs.dev/


- Cria o projeto com vite
```
npm create vite@latest
```

- Instalar o npm (node_modules)
```
npm install
```

- Roda o projeto com vite
```
npm run dev
```

- Localhost
    - Link: http://localhost:5173/

- Exemplo:
    - reactjs_10



### 11 - Estrutura inicial do React

**Estrutura base**

- Há algumas pastas e arquivos chave para o desenvolvimento em React
- `node_modules`: Onde as dependências do projeto ficam
- `public`: Assets estáticos e HTML de inicialização
- `src`: Onde vamos programar as nossas apps
- `src/index.js`: Arquivo de inicialização do React
- `src/App.js`: Componente principal da aplicação

- Exemplo:
    - reactjs_11





### 12 - Extensão para React no VS Code

- Há uma extensão no **marketplace** do VSCode que ajuda muito a programar em React
- O nome dela é `ES7` + `React/Redux/Reaact-Native` snippets
- Conseguimos criar muito código em apenas alguns atalhos


- ES7+ React/Redux/React-Native snippets

**Snippets**

- Link: https://github.com/ults-io/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md


- Localhost:
    - Link: http://localhost:5173/

    
- Exemplo:
    - reactjs_12





### 13 - Configurando o Emmet para o React

- **Emmet** é uma extensão nativa do VSCode que ajuda a escrever HTML mais rápido
- Pórem ela **não vem configurada** para o React
- Temos que acessar `File>Settings>Extensions` e procurar por Emmet
- Lá vamos incluir a linguagem **javascript - javascriptreact**

- Emmet include languages

- Exemplo:
    - reactjs_13


### 14 - Como tirar o melhor proveito deste curso

- Exemplo:
    - reactjs_14

### 15 - Repositório do curso

- Exemplo:
    - reactjs_15

### 16 - Slides do curso

`assets/Apresentação+Curso+React.pdf`

- Exemplo:
    - reactjs_16



##
### Tarefa 1 - Praticando React
##

**Desafio 1**

- 1 Entre no nosso arquivo App.js e adicione mais algum elemento HTML da sua escolha
- 2 Crie uma regra de estilos em App.css que altere a cor do seu elemento
- 3 Vá ate o arquivo index.html e altere o titulo da aplicação na meta tag

- Desafio:
    - tarefa_01


### 17 - Indicações de Livros

- JavaScript para Iniciantes - Aprenda a Programar JS de Forma Simples
- 200 Exercícios de JavaScript: Fortaleça suas habilidades com desafios
- JavaScript: O Guia Definitivo
- React - Aprenda Praticando

- Exemplo:
    - reactjs_17




### 18 - Aviso importante sobre componentes do React JS

- alteração da extensão dos arquivos de cada componente para jsx

- Exemplo:
    - reactjs_18









