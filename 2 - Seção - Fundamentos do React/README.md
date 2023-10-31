##
### Seção 2 - Fundamentos do React
##


<p align="center">
  <img alt="...." src="./assets/reactjs_logo_icon_170805.png" width="100%">
</p>






### 20 - Introdução do seção

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
    - reactjs_20



### 21 - Criando componentes

**Criando componentes**

- Na maioria dos projetos os componetes ficam em uma pasta chamada `components`, que devemos criar
- Geralmente são nomeados com a **camel case**: FirstComponent.js
- No arquivo **criamos uma função**, que contém o código deste componente (a lógica e o template)
- É também precisamos **exportar esta função**, para reutilizá-lo

- Exemplo:
    - reactjs_21


### 22 - Importação de componentes

**Importando componente**

- A inportação é a maneira que temos de **reutilizar o componente**
- Utilizamos a sintaxe: `inport X from './component/X'` onde X é o nome do componente
- Para colocar o componente importado em outro componente, precisamos colocá-lo em forma de tag: `<FirstComponent />`
- E então finalizamos o ciclo de importação



- Exemplo:
    - reactjs_22


### 23 - Conhecendo o JSX

**JSX**

- **JSX** é o HTML do React
- Onde vamos declarar as tags de HTML que serão exibidas no navegador
- Ficam no **return** do componente
- Temos algumas diferenças do HTML, por exemplo: class será `className`
- Isso se dá pelas **instruções semelhantes de JS e HTML**, pois o JSX é JavaScript, então algumas terão nomes diferentes
- O JSX pode ter apenas **um elemento pai**


- Exemplo:
    - reactjs_23



### 24 - Comentários nos componentes

**Comentários nos componentes**

- Podemos inserir comentários de **duas maneiras** no componente
- Na parte da função onde é executado aa lógica, a sintaxe é: `// Algum comentário`
- E também no JSX: `{/* Algum comentário */}`
- As chaves nos permitem **executar sentenças em JavaScript**.

- Exemplo:
    - reactjs_24









































































