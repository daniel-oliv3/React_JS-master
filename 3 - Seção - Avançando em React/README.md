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

export default ExemploComponent
```


- Exemplo:
    - reactjs_35






### 36 - Renderização de listas

**Renderização de listas**

- Uma outra ação bem comum é **renderizar listas** de dados no template
- Fazemos isso com os dados com tipo **array**
- Utilizando o **método map** pra nos auxiliar
- Além dos dados podemos **inserir JSX** em cada iteração

**Key**

- No

```jsx
{/*Exemplo, sem chave única key*/}
<div>
    <ul>
        {list.map((item) => (
            <li>{item}</li>
        ))}
    </ul>
</div>
```


**DICA**:

- ArrowFunction com {}
- Objetos com ()

- Exemplo:
    - reactjs_36



### 37 - A propriedade key

**A propriedade key**

- Iterar listas sem a **propriedade key** nos gera um warning, podemos verificar no console
- **O react precisa de uma chave única** em cada um dos itens iterados
- Isso serve para **ajuda-lo na renderização do componente**
- Geralmente teremos um **array de objetos** e podemos colocar `key` como uma alguma chave única, como **id** de algum dado
- Em **último caso** devemos utilizar o index do método map


**Key**

- Key, index

```jsx
{/*Exemplo, com chave única key*/}
<div>
    <ul>
        {list.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ul>
</div>
```

- Exemplo:
    - reactjs_37



### 38 - Previous state

**Previous state**

- **Previous state** é um recurso que nos permite pegar o dado em seu valor original dentro de um set de dado;
- **Isso é muito utilizado para modificar listas**, pois temos o valor antigo e transformamos em um valor novo
- O **Primeiro argumento**, de um set sempre será o previous state

- Exemplo:
    - reactjs_38







### 39 - Renderização condicional

- **Renderização condicional** é quando imprimimos uma parte do template baseado em uma condição
- Ou seja, utilizando uma **checagem com if**
- Isso é interessante em situações como: usuário autenticado/não autenticado

- Exemplo:
    - reactjs_39




### 40 - If e else no JSX

- Podemos também realizar um `if`/`else` no **JSX**
- Aqui devemos utilizar o `if` **ternário**
- Onde temos a sintaxe: condição ? bloco1 : bloco2

- Exemplo:
    - reactjs_40




### 41 - Introdução as props

**Props**

- **Props** é outro recurso fundamental do react
- Nos permite **passar valores de um componente pai para um componente filho**
- Isso será muito útil quando os dados forem carregados via banco de dados, por exemplo
- As props vem em um objeto no **argumento da função do componente**


- Exemplo:
    - reactjs_41


### 42 - Destructuring em props

**Desestruturando props**

- É super comum passar **mais de uma prop em um componente**
- Para facilitar isso o Recat nos permite **desestruturar as propriedades que chegam**, com o recurso de destructuring
- Se tmos duas props: name e age
- Podemos fazer assim function MyComponent(**{name, age}**)
- Agora **não precisamos mais utilizar** props.algumaCoisa


- Exemplo:
    - reactjs_42






### 43 - Reaproveitamento de componentes

**Reaproveitamento de componentes**

- Com **props** a **reutilização de componentes** começa a fazer muito sentido
- Se temos os dados de 1000 carros por exemplo, podemos **reaproveitar o nosso CarDetails** 1000 vezes
- Isso torna nosso código mais pradonizado, facilitando a manuntenção

- Exemplo:
    - reactjs_43




### 44 - Renderização de lista em componente

**Renderização com loop**

- Os arrays de dados podem ter **muitos itens** também
- Então o correto é utilizar uma **estrutura loop** `map()` para a ua exibição
- E com isso conseguimos conciliar os **três conceitos** renderização de listas, reaproveitamento de componentes e props 


- Exemplo:
    - reactjs_44





### 45 - Fragments

**React Fragments**

- Os **React Fragments** são interessantes para quando precisamos ter mais de um elemento pai em um componente
- Criamos uma tag vazia `<>`...`</>`
- **E ela serve como elemento pai**, não alterando a estrutura do HTML com uma `div`, por exemplo


- Exemplo:
    - reactjs_45







### 46 - A prop children

- **Children prop** é um recurso utilizado para quando um componente precisa ter JSX dentro dele
- Porém **este JSX vem do componente pai**
- Então o componente age como um **container**, abraçando estes elementos
- E children é considerado uma **prop do componente**


- Exemplo:
    - reactjs_46




### 47 - Função como props

**Funções em props**

- As **funções podem ser passadas para as props** normalmente
- Basta criar a função no componente pai e **enviar como prop** para o componente
- No componente filho ela pode ser ativada por um evento, por exemplo


- Exemplo:
    - reactjs_47