
# Trybesmith - API de gerenciamento de estoque e vendas

Essa é uma RESTful API desenvolvida em Typescript para gerenciar estoque e vendas de itens de uma loja de temática medieval. A arquitetura de camadas MSC (Models, Service e Controllers) foi utilizada para possibilitar as operações de Criação, Leitura, Atualização e Exclusão (CRUD).

## Tecnologias Utilizadas
 - Typescript
 - Node.js
 - Express.js
 - MySQL

## Instalação e execução
 1. Clone o repositório:
```bash
  git clone git@github.com:Leckar/Projeto-Trybesmith.git
```
 2. Instale as dependências:
```bash
  npm install
```
 3. Crie o arquivo .env com as informações do banco de dados:
```shell
  MYSQL_USER=root
  MYSQL_PASSWORD=password
  MYSQL_HOST=localhost
```
 4. Inicie a aplicação:
```bash
  npm start
```
## Endpoints

POST /users - cadastro de usuários

POST /login - login de usuários

GET /products - retorna a lista de produtos cadastrados no estoque

POST /products - cadastr um novo produto

GET /orders - lista todas as vendas

POSt /orders - cadastra uma nova venda
