Passos para executar a aplicação.

1) Execute o comando: npm install

2) Va na pasta "config", depois vá na pasta "env" e edite os arquivos com os dados de conexão do postgre

3) Execute o comando: node dbcreate

4) Execute o comando: sequelize db:migrate

-- Caso o passo 4 não de certo execute o comando e depois tente novamente: npm install -g sequelize-cli

5) Para executar o projeto digite: grunt

-- Caso o passo 5 ou 6 não de certo execute o comando e depois tente novamente: npm install -g grunt

6) Para executar os testes automatizados digite: grunt test

*Na pasta home do projeto existe um arquivo chamado api-restful-express-postgre.postman_collection que uma lista de requisões
para ser importada no postman.

*O token tem um periodo de expiração. Após esse período, uma nova autenticação é necessária.
