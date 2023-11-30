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

- Para configurar o React Rouuter vamos ter que importar três elementos de **react-router-dom**
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
















