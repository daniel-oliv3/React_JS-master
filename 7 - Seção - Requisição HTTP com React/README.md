##
### Seção 7 - Requisição HTTP com React
##


<p align="center">
  <img alt="...." src="./assets/reactjs_logo_icon_170805.png" width="100%">
</p>



### 85 - Introdução da seção

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
    - react-req-http_85



### 86 - Criando projeto com JSON server

**JSON server**

- O **JSON server** é um pacote npm
- Ele **simula uma API**, e isso nos possibilita fazer requisições HTTP
- Vamos aprender a **integrar este recurso com o React**
- Podemos entender isso como uma etapa de preparação para APIs reais
- Ou seja, atingir o mesmo resultado mas sem precisar de uma estrutura no back-end

- Json Server Package
```
npm i json-server
```

- alterando o script no arquivo `package.json`
```json
"scripts": {
    "server": "json-server --watch data/db.json"
  },
```

- Inicializando o json-server
```
npm run server
```

- Resources
    - http://localhost:3000/products

- Home
    - http://localhost:3000

- URLs
     - http://localhost:3000/products/1
     - http://localhost:3000/products/2
     - http://localhost:3000/products/3


- Exemplo:
    - react-req-http_86


### 87 - A importância do useEffect

**A importância do useEffect**

- O **useEffect** faz com que determinada ação seja executada apenas uma vez
- Isso é interessaante pois os componentes estão sempre se **re-renderizaando**, estão precisamos ter **ações únicas** as vezes
- O useEffect ainda possui um **array de dependências**, que deve conter os dados que ativem a execução da função de forma automática
- O useEffect estará presente sempre nas **requisições assíncronas**!


- Rodar o projeto react
```
npm run dev
```

- Rodar o projeto json-server
```
npm run server
```
- Exemplo:
    - react-req-http_87



### 88 - Resgatando dados da API

**Resgatando dados com React**

- Para trazer os dados vamos ter que utilizaar vários recursos
- Primeiramente ter um local para salvá-los `useState`
- Renderizar a chamada a API apenas uma vez `useEffect`
- Um meio de fazer a requisação assíncrona `Fetch API`

- Exemplo:
    - react-req-http_88






### 89 - Adicionando dados com React

**Adicionando dados**

- Para adicionar um item vamos precisar resgatar os dados do form com o **useState**
- Reunir eles em uma **função após o submit** e enviar um request de **POST** para a nossa API
- O processo é bem parecido com o de resgate de dados, mais agora estamos **enviando dados**

- Exemplo:
    - react-req-http_89




### 90 - Carregamento de dados dinâmico

**Carregamento dinâmico de dados**

- Se a requisição foi feita com sucesso, podemos **adicionar o item a lista após o request** 
- Isso torna a nossa aplicação mais **performática**
- Utilizaremos o **set do useState** para isso

- Exemplo:
    - react-req-http_90


### 91 - Custom hook para resgate de dados

**Custom hook para fetch**

- É normal dividir funções que podem ser reaproveitaadas em hooks
- Esta técnica é chamada de **custom hook**, e vamos criar uma para o resgate de dados
- Os hooks geralmente ficam na **pasta hooks**
- Devemos utilizar o padrão *useName*
- Basicamente criamos umaa função e exportamos ela

- Exemplo:
    - react-req-http_91






### 92 - Refatorando o POST

**Refatorando o POST**

- Podemos **utilizaar o mesmo hook** para incluir uma etapa de POST
- **Vamos criar um novo useEffect** que mapeia uma outra mudança de estado
- Após ela ocorrer executamos a adição de produto
- **OBS**: nem sempre reutilizar um hook é a melhor estratégia

- Exemplo:
    - react-req-http_92



### 93 - Estado de Loading

**Estado de Loading**

- Quando fizemos requisições para APIs **é normal que haja um intervalo de loading entre a requisiçãao e o recebimento** da resposta
- Podesmos fazer isso no nosso **hook** também
- **Identificar quando começa e termina** este estado


- Exemplo:
    - react-req-http_93




### 94 - Loading no POST

**Estado de loading no POST**

- Podemos bloquer aações indevidas em outras requests também, **como no POST**
- Uma ação interessante é **remover a ação de adicionar outro item** enquanto o request ainda não finalizou

- Exemplo:
    - react-req-http_94

### 95 - Tratando erros

**Tratando erros**

- Podemos tratar os erros das requisições por meio de um **try catch**
- Além de pegar os dados do erro, também podemos **alterar um state para imprimir um elemento se algo der errado**
- Desta maneira conseguimos **prever vários cenários** (dados resgatados, carregamento e erro)

- Exemplo:
    - react-req-http_95


##
### Tarefa 6: Desafio sobre requisições HTTP
##


- Neste desafio vamos trabalhar com requisições HTTP, para excluir um registro do banco via React, mandando a requisição para a API

- Exemplo:
    - tarefa_01




































