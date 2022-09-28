# nlw-esports-backend
## O NLW (Next Level Week) é uma ação de marketing da Rocketseat focada em programação. A abordagem é de apresentar conteúdos práticos e desenvolver uma aplicação completa em uma semana. O evento e composto de duas trilhas de aprendizagem: explorer, para usuários iniciantes e ignite para usuários mais experientes. Este projeto acompanha o desenvolvimento da trilha ignite. ##

### Estudo: Aplicação back-end e integrações com API's de terceiros ###

Foi realizado o desenvolvimento de uma API utilizando Node.js e MYSQL que retorna um JSON com as informações dos games para uso pelas aplicações front-end (web e mobile, desenvolvidas utilizando React e React Native).
As informaçÕes consumidas pela API são provenientes da API externa https://dev.twitch.tv/docs/api/ #


###  Requisitos:  ###

1. Node.js
Faça o download e instalação do Node.js

2. Npm
npm (Node Package Manager)

3. MySql 
https://www.mysql.com/downloads/

## Guia de uso:
Clonar o repositório:h ttps://github.com/igorovisk/nlw-esports-backend.git
Criar um banco de dados local MySql

#Criar um arquivo .env e colocar o endereço do banco de dados criado em uma variável de ambiente DATABASE_URL

## Obter e criar as seguintes variáveis de ambiente da API da Twitch: 
### TWITCH_CLIENT_ID
### TWITCH_SECRET_KEY
### TWITCH_AUTHORIZATION_TOKEN


Executar o arquivo Prisma/seeds/seed.ts (dentro do repositório clonado) com o comando 'node'.

Executar o comando npm run dev no terminal na raiz do projeto.

