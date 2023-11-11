##
### Seção 5 - Formulários com React
##


<p align="center">
  <img alt="...." src="./assets/reactjs_logo_icon_170805.png" width="100%">
</p>



### 58 - Introdução da seção

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
    - react-form_58



### 59 - Criando formulários

**Formulários e React**

- No React vamos também utilizar a **tag** `form` para formulários
- As labels dos inputs contém o atributo `htmlFor`, que deve ter o valor name do input
- **Não utilizamos action**, pois o processamento será feito de forma assíncrona


- Exemplo:
    - react-form_59



### 60 - Label envolvendo input

**Label envolvendo o input**

- Em React um padrão comum é a **tag label envolvendo o input**
- Isso faz com que o atributo for se torne **opcional**
- **Simplificando nossa estrutura de HTML**, sem perder a semântica

- Exemplo:
    - react-form_60





### 61 - Gerenciamento de dados de input

**Manipulação de valores**

- Para manipular os valores dos inputs vamos utilizar o **hook useState**
- Ou seja, podemos armazenar na variável **e utilizar o set para alterar o valor**
- Vamos criar uma função para alterar o valor no evento `onChange`
- Deixando o nosso código fácil de trabalhar nas próximas etapas: como envio dos dados para BD e validação


- Exemplo:
    - react-form_61

































































