# 📌 API de Autenticação e CRUD com Node.js e MongoDB

Esta é uma API RESTful, construída com **Node.js** e **Express**, que oferece funcionalidades de **CRUD** (Create, Read, Update, Delete) para gerenciar usuários. O projeto se conecta a um banco de dados **MongoDB Atlas** na nuvem para garantir a persistência dos dados.

---

## 📑 Sumário

- [🚀 Funcionalidades Implementadas](#-funcionalidades-implementadas)
- [💻 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [⚠️ Aviso de Segurança e Configuração](#️-aviso-de-segurança-e-configuração)
- [⚙️ Configuração e Instalação](#️-configuração-e-instalação)
  - [1. Clonar o Repositório](#1-clonar-o-repositório)
  - [2. Configurar o Banco de Dados (MongoDB Atlas)](#2-configurar-o-banco-de-dados-mongodb-atlas)
  - [3. Criar o Arquivo de Variáveis de Ambiente](#3-criar-o-arquivo-de-variáveis-de-ambiente)
  - [4. Instalar as Dependências](#4-instalar-as-dependências)
  - [5. Iniciar o Servidor](#5-iniciar-o-servidor)
- [🧪 Testando a API com Postman](#-testando-a-api-com-postman)
  - [Endpoints da API](#endpoints-da-api)
- [📤 Enviar as Alterações para o GitHub](#-enviar-as-alterações-para-o-github)

---

## 🚀 Funcionalidades Implementadas

-   **Criação de Usuário**: Cria um novo usuário com nome, e-mail e senha.
-   **Listagem de Usuários**: Retorna todos os usuários cadastrados no banco de dados.
-   **Atualização de Usuário**: Permite atualizar os dados de um usuário existente.
-   **Exclusão de Usuário**: Remove um usuário do banco de dados.
-   **Conexão com MongoDB Atlas**: A API se conecta a um banco de dados hospedado na nuvem.

## 💻 Tecnologias Utilizadas

-   **Node.js**: Ambiente de execução JavaScript no servidor.
-   **Express.js**: Framework para construção da API.
-   **MongoDB**: Banco de dados NoSQL.
-   **Mongoose**: Biblioteca para modelagem de dados no MongoDB.
-   **dotenv**: Para gerenciar variáveis de ambiente de forma segura.

## ⚠️ Aviso de Segurança e Configuração

-   Por motivos de segurança, o arquivo `.env` (variáveis de ambiente) não é enviado para o GitHub. Ele deve ser criado e gerenciado apenas localmente. Portanto, crie o arquivo **.env** na raiz do
projeto com a credencial do banco de dados.
-   A pasta `node_modules`, que contém todas as dependências do projeto, é ignorada pelo Git e não deve ser enviada para o repositório.

## ⚙️ Configuração e Instalação

Siga os passos abaixo para configurar e rodar a API na sua máquina local.

### 1. Clonar o Repositório

Abra o terminal e execute o seguinte comando:

```
git clone [https://github.com/tassianasc/aplicacaoNodeMongoDb.git](https://github.com/tassianasc/aplicacaoNodeMongoDb.git)
cd aplicacaoNodeMongoDb 
```

### **2. Configurar o Banco de Dados (MongoDB Atlas)**
A aplicação utiliza um banco de dados MongoDB Atlas gratuito.

Acesse o MongoDB Atlas e crie uma conta gratuita.

Crie um novo Cluster (plano M0 gratuito).

Na seção Database Access, crie um usuário com permissões de leitura e escrita. Anote o nome de usuário e a senha.

Na seção Network Access, adicione o seu endereço IP atual para permitir a conexão.

Clique em Connect no seu cluster, selecione a opção Connect your application e copie a string de conexão.

### **3. Criar o Arquivo de Variáveis de Ambiente**
Na pasta raiz do seu projeto, crie um arquivo chamado .env e adicione a string de conexão que você copiou, substituindo o nome de usuário e a senha. Você também pode definir um nome para o seu banco de dados na URL.
``` 
DB_URI=mongodb+srv://<seu_usuario>:<sua_senha>@<seu_cluster>.mongodb.net/aplicacaoNodeMongoDb?retryWrites=true&w=majority 
```

### **4. Instalar as Dependências**
A pasta node_modules é obtida executando o comando de instalação. No terminal, execute:
``` npm install ```

### **5. Iniciar o Servidor**
Após a instalação, inicie o servidor com o comando:
``` node src/server.js ```

Você verá a mensagem no terminal confirmando que a API está rodando na porta 3000 e conectada ao banco de dados.

### 🧪 Testando a API com Postman
Use uma ferramenta como o Postman para testar os endpoints da API.

Criar uma Coleção de Testes
-   No Postman, clique em "New" e selecione "Collection"..
-   Dê um nome, como "API de Usuários", e clique em "Create".
-   Clique nos três pontos (...) ao lado do nome da coleção para adicionar suas requisições.

### Endpoints da API
**POST /api/users - Criar Usuário**

Body (raw JSON):
```
{
  "name": "Nome do Usuário",
  "email": "email@exemplo.com",
  "password": "senha_segura"
}
```
-   **GET /api/users - Listar Todos os Usuário**

Não requer body.

-  **PUT /api/users/:id - Atualizar Usuário**

URL: Substitua :id pelo _id do usuário que você deseja atualizar.

Body (raw JSON):
```
{
  "name": "Novo Nome"
}
```
- **DELETE /api/users/:id - Excluir Usuário**

URL: Substitua :id pelo _id do usuário que você deseja excluir.

Não requer body.

### Enviar as Alterações para o GitHub
**1. Verificar o Status do Git (git status)**

Este comando é seu melhor amigo. Ele mostra o estado atual do seu repositório local e te informa quais arquivos foram modificados, quais estão prontos para o próximo commit (staged) e quais ainda não estão sendo rastreados.

Como usar:
```
git status 
```
Se aparecerem arquivos em vermelho: São arquivos modificados ou novos que ainda não foram preparados para o commit.

Se aparecerem arquivos em verde: São arquivos que já foram adicionados ao "staging area" e estão prontos para o commit.

**2. Preparar as Alterações (git add)**

Agora, você precisa preparar os arquivos para o commit, ou seja, adicioná-los à área de "staging".

Como usar:

```git add . ```

O ponto (.) no final significa que você está adicionando todas as suas alterações (novos arquivos e modificações nos existentes) ao "staging area". Após este comando, se você rodar um git status novamente, verá seus arquivos na cor verde, indicando que estão prontos para o commit.

**3. Salvar as Alterações Localmente (git commit)**

O commit salva uma "fotografia" das suas alterações no histórico do seu repositório local. É como um ponto de salvamento.

Como usar:

```git commit -m "docs: atualiza e detalha o README.md do projeto" ```

O comando -m (de "message") permite que você escreva uma mensagem curta e descritiva sobre o que você mudou.

A mensagem "docs: atualiza e detalha o README.md do projeto" é um exemplo de boa prática, usando um prefixo (docs para documentação) para classificar o tipo de alteração.

**4. Enviar para o GitHub (git push)**

Este é o passo final. O push envia todos os seus commits locais para o seu repositório remoto no GitHub, tornando as alterações públicas.

```git push ```

O Git vai se comunicar com o GitHub e enviar o seu commit. Após a conclusão, se você visitar a página do seu repositório no GitHub, verá o seu novo README.md atualizado e todas as outras mudanças que você fez.