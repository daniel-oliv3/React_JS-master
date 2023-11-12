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


### 62 - Alteração de state inline

**Simplificando a manipulação**

- Quando temos vários inputs podemos **realizar a manipulação de forma mais simples**
- Basicamente criamos uma **função inline no onChange**
- Ela vai **alterar o valor do state** com método set, da mesma forma que a função isolada

- Exemplo:
    - react-form_62



### 63 - Envio de form

**Envio de formulário**

- Para enviar um form vamos utilizar o evento `onSubmit`
- **Ele chamará uma função**, e nesta devemos lembrar de parar a submissão com o `preventDefault`
- Nesta etapa podemos realizar validações, envio de from para um servidor reset de form e outras ações

- Exemplo:
    - react-form_63



### 64 - Controlled inputs

**Controlled inputs**

- **Controlled inputs** é um recurso que nos permite mais flexibilidade nos forms de React
- Precisamos apenas **igualar o valor ao state**
- Um uso mais comum: formulários de edição, que os dados vem do back-end, conseguiremos preencher o input mais facilmente

- Exemplo:
    - react-form_64









### 65 - Resetando formulários

**Limpando formulários**

- Com o controller inputs limpar o form será **fácil**
- Basta **atribuir um valor de uma string vazia aos states** e pronto
- Isso será feito após o envio, em formulários que o usuário precisa preencher novamente

- Exemplo:
    - react-form_65




### 66 - Textarea no React

**Input de TextArea**

- O textaarea **pode ser considerado um input de texto** normal
- Utilizaremos o **value** para alterar o state inicial
- E o evento **onChange** para modificar o valor do state

- Exemplo:
    - react-form_66


### 67 - Select no React

**Input de Select**

- O select também será **muito semelhante** aaos outros inputs
- Quaando temos a alteração de um valor o **evento onChange** pode captar isso
- O value também pode atribuir qual **option** estará selecionado


- Exemplo:
    - react-form_67


### 68 - Conclusão da seção

- Exemplo:
    - react-form_68


