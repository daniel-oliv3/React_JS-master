##
### Seção 9 - Context Api do React
##


<p align="center">
  <img alt="...." src="./assets/reactjs_logo_icon_170805.png" width="100%">
</p>



### 110 - Introdução da seção

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

- Instala as dependências do React Router Dom
```
npm install react-router-dom
```

- Roda o projeto com vite
```
npm run dev
```


- Localhost
    - Link: http://localhost:5173/

- Exemplo:
    - context-api_110



### 111 - O que é Context API?

**O que é Context API?**

- Um recurso que facilita o **compartilhamento de um estado entre componentes**
- Ou seja, quando precisamos de **dados** `globais`, provavelmente precisamos utilizar o Context
- **O Context precisa encapsular os componentes** que receberão seus valores, geralmente colocamos no App.jsx ou index.jsx
- Os contextos geralmente dicam na pasta `context`

- Exemplo:
    - context-api_111


### Tarefa: Criação de projeto e inicialização de dependências

- Um desafio para treinar a inicialização de um novo projeto, com dependências instaladas e rotas estabelecidas

- Tarefa:
    - tarefa_01


### 112 - Criando contexto

- Primeiramente vamos ter que **criar o Context**
- O arquivo deve sempre ter a **primeira letra maiúscula** no nome, e geralmente termina em Context: `SomeContext.jsx`
- A convenção é deixar na **pasta context** em `src`
- Onde vamos utilizar o valor do contexto, **o arquivo precisa ser importado**


- Exemplo:
    - context-api_112


### 113 - Criando Provider

**Criando Provider**

- O provider vai **delimitar onde o contexto é utilizado**
- Vamos criar uma espécie de componente com a **prop children**
- E este Provider deve **encapsular os demais componentes** em que precisamos consultar ou alterar o valor
- Geralmente ele fica em `App.jsx` ou em `index.jsx`
- Agora poderemos **compartilhar o valor do contexto** em todo os componentes

- Exemplo:
    - context-api_113
    

### 114 - Alterando contexto

**Alterando o contexto**

- Para alterar o valor do contexto **precisamos criar um componente que utilize a função da mudança de contexto**
- Esta mudançaa ocorrerá no Contexto e **poderá ser consumida por todos os componentes** que recebem o contexto
- E assim finalizamos o **ciclo** da Context API

- Exemplo:
    - context-api_114


### 115 - Refatorando contexto para hook

**Refatorando contexto para hook**

- Podemos **criar um hook para utilizar o contexto, isso nos dá algumas vantagens
- **Não precisamos importar o useContext em todo os lugares** que vamos usr o contexto, só o hook
- Temos um espaço para fazer uma **validação do contexto**

- Exemplo:
    - context-api_115





### 116 - Criando um contexto mais complexo

**Contexto mais complexo**

- Contextos mais completos podem ter **variações no comportamento**
- Para isso vamos utilizar um hook chamado `useReducer`
- Que **é como um useState**, mas para controle de dados complexos
- No reducer teremos diferentes ações com um `switch`
- E na aplicação vamos consumir o estado atual do dado que está no reducer

- Exemplo:
    - context-api_116



























