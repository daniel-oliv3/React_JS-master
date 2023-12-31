##
### Seção 4 - React e CSS
##


<p align="center">
  <img alt="...." src="./assets/reactjs_logo_icon_170805.png" width="100%">
</p>



### 50 - Introdução da seção

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
    - reactjs_50





### 51 - CSS Global

**CSS Global**

- O **CSS Global** é utilizado para estilizar diversos elementos em comum ou fazer um reset no CSS
- Utilizamos o arquivo `index.css` para isso
- Ele está na pasta `src`


- Exemplo:
    - reactjs_51






### 52 - CSS de componentes

**CSS de componentes**

- O **CSS de componentes** é utilizado para um componente em especifico
- Geralmente **é criado um arquivo com o mesmo nome do componente** e este é **importdado no componente**
- Note que este método **não é scoped**, ou seja, o CSS vaza para outros componentes se houver uma regra em colisão
- O React ja cria um exemplo desta técnica com o App.css/js

- Exemplo:
    - reactjs_52



### 53 - CSS inline

**Inline style**

- O inline style do React é **igual o do CSS**
- Por meio do **atributo style** conseguimos aplicar regras diretamente em um elemento
- **Devemos optar por outras maneiras de CSS**, o inline pode dificultar a manunteção ou deixar o código imprevisével em algumas situações


- Exemplo:
    - reactjs_53



### 54 - CSS inline dinâmico

**Inline style Dinâmico**

- O **O CSS dinâmico inline** aplica estilo basedo em uma condicional
- Vamos inserir no atributo um `if ternário`
- Dependendo da condição podemos mudar que regra de estilo um elemento recebe

- Exemplo:
    - reactjs_54





### 55 - Classes dinâmicas

**Classes dinâmicas no CSS**

- Podemos também aplicar lógica **mudar a classe de CSS de um elemento**
- Também utilizaremos o `if ternário`
- Essa abordagem é **mais interessante que o CSS inline**
- Pois as classes estarão isoladas no arquivo de CSS, resolvendo o problema de organização de código


- Exemplo:
    - reactjs_55



### 56 - CSS Modules

**CSS Modules**

- O **CSS Modules** é um recurso de CSS **scoped**
- Ou seja, ele vai ser **exclusivo do componente**
- O nome do arquivo é `Componente.module.css`
- Precisamos importá-lo tmbém no componente


- Exemplo:
    - reactjs_56


##
### Tarefa: Desafio sobre React com CSS
##

- Neste desafio você vai treinar os conceitos de CSS aplicados em projetos com React

**Desafio 5**

- 1* - Crie um novo projeto chamado challengecss
- 2* - No CSS global zere a margin, padding e coloque uma fonte que você goste
- 3* - Crie um componente que exiba detalhes de carros, este componente deve ser estilizado com scoped
- 4* - Exib pelo menos 3 carros
- 5* - Coloque um titulo em aapp.js praa o seu projeto, estilize com o app.css

- tarefa:
    - challengecss
    - challengecss_01

### 57 - Conclusão da seção

- Exemplo:
    - reactjs_57


