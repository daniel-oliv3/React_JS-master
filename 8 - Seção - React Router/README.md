##
### Seção 8 - React Router
##


<p align="center">
  <img alt="...." src="./assets/reactjs_logo_icon_170805.png" width="100%">
</p>



### 97 - Introdução da seção

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

- Instala as dependências do React Router Dom
```
npm install react-router-dom
```

- Localhost
    - Link: http://localhost:5173/

- Exemplo:
    - react-router_97


### 98 - O que é React Router?

**O que é React Router ?**

- **React Router** é um dos paacotes mais utilizados para criar uma estrutura de rotas em aplicações de React
- Ou seja, permite que nossas **SPAs tenham múltiplas páginas**
- Precisamos **instalar** no nosso projeto
- A **configuração e utilização** é simples
- Também temos outras funções como: **Redirect, Nested Routes, Not Found Routes** e outros

- Exemplo:
    - react-router_98

##
###  Tarefa: Desafio sobre projetos em React com dependências
##


- Neste desafio vamos criar um novo projeto, e instalar algumas dependências do projeto.

- Exemplo:
    - tarefa_01


### 99 - Configurando o React Router

**Configurando o React Router**

- Para configurar o React Router vamos ter que importar três elementos de **react-router-dom**
- **BrowserRouter**: Define onde a área do nosso app que vai trocar as páginas
- **Routes**: Define aas rotas
- **Route**: Um elemento deste para cada rota, configurar com path e componente da rota 


- URLs:
    - http://localhost:5173/
    - http://localhost:5173/about

- Exemplo:
    - react-router_99








### 100 - Navegação entre páginas

**Adicionando links**

- Para criar links para páginas vaamos precisar utilizar o `Link` do React Router
- No Link configuramos o prâmetro **to**, que recebe a **URL/path** que será redirecionado quem clicar no link
- Vamos criar um componente de Navbar para isso


- Exemplo:
    - react-router_100





### 101 - Carregando dados

**Carregando dados**

- Vamos exercitar novamente o carregamento de dados com o nosso hook `usefetch`
- Depois podemos utilizaá-los para o **carregmento de dados individuais**
- Utilizaremos o hook igual ao da última seção e vamos imprimir os produtos na Home da mesma forma

- Json Server Package
```
npm i json-server
```

- alterando o script no arquivo package.json

```json
"scripts": {
    "server": "json-server --watch data/db.json"
},
```
- Inicializando o json-server
```
npm run server
```

- Roda o projeto com vite
```
npm run dev
```

- Resources
    - http://localhost:3000/products


- URLs:
    - http://localhost:5173/
    - http://localhost:5173/about
    - http://localhost:5173/products/1
    - http://localhost:5173/products/2

- Exemplo:
    - react-router_101




### 102 - Rotas dinâmicas

**Rotas dinâmicas**

Para criar uma rota dinâmica vamos precisar definir uma **nova Route** em `App.jsx`
- Que deve ter o padão de: `/products/:id`
- Onde `:id` é o dado dinâmico, ou seja, podemos ter qualquer valor
- Na página podemos utilizar o hook `useParams` para resgatar esta informação

- Exemplo:
    - react-router_102




### 103 - Carregamento dinâmico de dados

**Carregando dado individul**

- Graças ao passo dado no projeto passado o **carregamento individual** de um produto será fácil
- Vamos utilizar o id recebido para **formar a nova URL**
- E por fim podemos utilizar o hook `useFetch` para trazer o item
- Por fim faremos a **validação e impressão** do mesmo no JSX


- Exemplo:
    - react-router_103


### 104 - Nested routes

**Nested route**

- As Nested routes indicam **URLs mais complexas**, como: `/products/:id/something`
- Neste caso vmos precisaar criar um componente que corresponda com o padão indicado e também a URL em App.js
- Na nested route **teremos o acesso ao parâmetro da URL** também

-   URLs
    - http://localhost:5173/products/1/info
    - http://localhost:5173/products/12/info

- Exemplo:
    - react-router_104



### 105 - Página 404

**No match route (404)**

- Podemos criar uma **Página 404** facilmente com React Router
- Basta **criarmos o componente** da página
- E no rquivo `App.jsx` definir um **path como** `*`
- Desta maneir, qualquer rota que não exista cairá neste componente

-   URLs
    - http://localhost:5173/products/1/info
    - http://localhost:5173/products/12/info

- 404
    - http://localhost:5173/testealgumacoisa
    - http://localhost:5173/products/1/olamundo

- Exemplo:
    - react-router_105




### 106 - Link ativo

**Link ativo**

- Para ter fácil acesso a uma modificação para os links ativos vamos trocar o `Link` pelo `NavLink`
- Neste elemento temos acesso a um valor chamado `isActive`
- Ou seja, podemos **ativar uma classe** se a rota atual for a que está

- Exemplo:
    - react-router_106



### 107 - Search Params

**Search Params**

- **Search Params** é um recurso que permite obter o que vem na URL em forma de parâmetro, ex: produtos?`q=camisa`
- Utilizamos o hook `useSeachParams` par obtê-los
- Com este recurso fica simples fazer um **funcionalidade de busca** no sistema

- Exemplo:
    - react-router_107


### 108 - Redirecionamento de URL

**Redirect**

- Podemos precisar de um **redirecionamento de páginas** eventualmente
- **Exemplo** uma página antiga do sistema responde agora a uma nova URL
- Para isso vamos **criar a rota com Route** normalmente
- Mas em element vamos utilizar o **componente Navigate** com um **to** que vai para a rota correta

- Exemplo:
    - react-router_108


















