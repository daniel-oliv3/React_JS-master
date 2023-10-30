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

- Exemplo:
    - reactjs_02




