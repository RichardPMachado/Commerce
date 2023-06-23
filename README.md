# Projeto Commerce

Projeto realizado durante o módulo de Back-end do curso de desenvolvimento web da Trybe.

## O que foi feito

Neste projeto, coloquei em prática métodos e operadores para alterar dados no banco de dados não relacional commerce (MongoDB). A aplicação foi desenvolvida com as seguintes tecnologias:

- MongoDb
- mongosh
- docker

## Como rodar o projeto

### Com Docker:

⚠️ Antes de começar, verifique se o docker-compose está na versão 1.29 ou superior. Consulte a documentação para saber como instalá-lo.

```bash
docker run -d --name=mongo-commerce -v "$PWD:/app" -p 27017:27017 mongo:5.0
docker exec -it mongo-commerce bash
cd app/
mongorestore -d commerce -c produtos assets/produtos/produtos.bson
```

### Localmente:

É necessário ter um banco de dados (MongoDb) instalado localmente.

## Tecnologias utilizadas

- MongoDb
- mongosh
- docker

## Habilidades

- Alterar documentos utilizando métodos de update com operadores simples;
- Alterar documentos utilizando operadores complexos e modificadores;
- Construir queries e expressões complexas utilizando índices textuais e expressões regulares;
