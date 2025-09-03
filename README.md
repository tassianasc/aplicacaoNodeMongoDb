# API de Usuários com Node.js e MongoDB

Esta é uma API RESTful simples, construída com Node.js e Express, que fornece funcionalidades de CRUD (Create, Read, Update, Delete) para gerenciar usuários. A API se conecta a um banco de dados MongoDB Atlas na nuvem para persistir os dados.

## 🚀 Funcionalidades Implementadas

- **Criação de Usuário**: Cria um novo usuário com nome, e-mail e senha.
- **Listagem de Usuários**: Retorna todos os usuários cadastrados no banco de dados.
- **Atualização de Usuário**: Permite atualizar os dados de um usuário existente.
- **Exclusão de Usuário**: Remove um usuário do banco de dados.
- **Conexão com MongoDB Atlas**: A API se conecta a um banco de dados hospedado na nuvem, garantindo a persistência dos dados.

## 💻 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express.js**: Framework para construção da API.
- **MongoDB**: Banco de dados NoSQL.
- **Mongoose**: Biblioteca para modelagem de dados no MongoDB.
- **dotenv**: Para gerenciar variáveis de ambiente de forma segura.

## ⚠️ Aviso de Segurança e Configuração

- Por motivos de segurança, o arquivo `.env` (variáveis de ambiente) não é enviado para o GitHub.
- A pasta `node_modules`, que contém as dependências do projeto, é ignorada e não deve ser enviada ao repositório.

Para rodar o projeto, siga os passos de instalação e crie seu próprio arquivo `.env` conforme a seção "Configuração do Banco de Dados".

## ⚙️ Como Rodar a Aplicação

Siga os passos abaixo para clonar e rodar a API na sua máquina local.

### 1. Clonar o Repositório

Abra o terminal e execute o seguinte comando:

```bash
git clone [https://github.com/tassianasc/aplicacaoNodeMongoDb.git](https://github.com/tassianasc/aplicacaoNodeMongoDb.git)
