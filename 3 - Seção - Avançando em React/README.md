##
### Seção 3 - Avançando em React
##


<p align="center">
  <img alt="...." src="./assets/reactjs_logo_icon_170805.png" width="100%">
</p>



### 31 - Introdução da seção

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
    - reactjs_31

##
### Tarefa 3 - Desafio sobre criação de apps em React
##

- Neste desafio vamos reforçar nossos skills em criação de um app React

**Desafio 3**

- 1 - Criar um projeto para a nova seção
- 2 - Limpe o arquivo do componente principal
- 3 - E por fim coloque o titulo de Seção 3 


- Tarefa:
    - tarefa_01


### 32 - Imagens públicas no React

**Imagens no React**

- As **Imagens públicas** do nosso projeto podem ficar na pasta `public`
- De lá elas podem ser chamadas pelas tags `img` diretamente pelo `/nome.jpg`
- Pois **a pasta public fica linkada com o src** das imagens

- Exemplo:
    - reactjs_32




### 33 - Imagens em src

**Imagens em assets**

- A pasta public pode ser utilizada para colocar imagens
- Mas um padrão bem utilizado para imagens dos projetos **é colocar em uma pasta chamada assets**, em src
- Ou seja, você vai encontrar projetos com as **duas abordagens**
- Em assets **precisamos importar as imagens** e **o src e dinâmico** com o nome de importação

- Exemplo:
    - reactjs_33



### 34 - O que são hooks?

**O que são hooks?**

- Recursos do React que tem **diversas funções**
- Como: **guardar e alterar o estado de algum dado** na nossa aplicação
- Todos os hooks começam com `use`, por exemplo: `useState`
- Podemos criar os nossos hooks, isso é chamado de **custom hook**
- Os hooks precisam ser **importados**
- Geralmente são úteis em todas as aplicações, **utilizaremos diversos ao longo do curso**

- Exemplo:
    - reactjs_34





### 35 - useState hook

**useState**

- O hook de `useState`, é um dos mais utilizados
- Utilizamos para **gerenciar o estado de algum dado**, variáveis não funcionam corretamente, o componente não re-renderiza
- Para guardar o dado definimos o nome da variável e para alterar vamos utilizar `setNome`, onde nome é o nome do nosso dado


- DICA

**Snippets**

- rafce

```jsx
import React from 'react'

const ExemploComponent = () => {
  return (
    <div>Exemplo Componente</div>
  )
}

export default ManaExemploComponent
```


- Exemplo:
    - reactjs_35















