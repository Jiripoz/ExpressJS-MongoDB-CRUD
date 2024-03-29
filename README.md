﻿# API de Cursos
## Descrição
Esta é uma API RESTful escrita em typescript e construída utilizando o framework express.js. Ela utiliza um banco de dados NoSQL (MongoDB). 

A API fornece operações CRUD (Create, Read, Update, Delete) para gerenciar cursos.

# Instalação
## Pré-requisitos
- Docker
## Passo a passo
1. Clone o repositório:
2. Navegue até o diretório
3. Construa a imagem da API:
```
docker build -t alan/cursosp .
```
4. Execute o comando docker-compose para subir o container junto a database Mongo
```
docker-compose up
```

A API estará disponível em `http://localhost:3000`


# Endpoints da API
Conforme solicitado, os seguintes endpoints estão disponíveis:

- POST /courses: Cria um novo curso.
- GET /courses/{id}: Obtém informações do curso pelo ID.
- PUT /courses/{id}: Atualiza as informações do curso pelo ID.
- DELETE /courses/{id}: Exclui um curso pelo ID.

## Payload do método POST
- `nome`: Nome do curso
- `description`: Descrição do curso
- `category`: Categoria do curso
- `price`: Preço do curso
