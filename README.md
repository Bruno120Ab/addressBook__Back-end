# Projeto FullStack

# Como Rodar a Aplicação em Nest

Deixo claro que a aplicação está longe de ser um MVP, contém bugs e algumas instabilidades que com o tempo serão reparados.
<br>
Este guia fornece instruções passo a passo para executar a aplicação em Nest em seu ambiente local. Certifique-se de ter instalado o Node.js em sua máquina, pois ele é essencial para rodar uma aplicação em Nest.

## Documentação gerada com Swagger
Link para acesso: <a href='http://localhost:8080/api#/' target='_blank'>Swagger</a>
## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes itens instalados em sua máquina:

1. Node.js: Acesse https://nodejs.org e siga as instruções para instalar a versão LTS mais recente do Node.js.

## Passo 1: Clonar o repositório

Primeiro, clone o repositório da aplicação Nest do GitHub. Abra o terminal ou prompt de comando e execute o seguinte comando:
<code>git@github.com:Bruno120Ab/address_book__back-end.git</code>

## Passo 2: Instalar as dependências

Navegue para o diretório da aplicação que acabou de ser clonado e rode este comando para instalar as dependecias do projeto.
<code>Yarn</code>



## Passo 3: Configurar o banco de dados e gerar migrações

Se a aplicação Nest utilizar um banco de dados, é necessário configurá-lo antes de iniciar a aplicação. Configuro o banco de dados em arquivo .env seguindo o exemplo dado no .envexample. E para gerar as migrações rode este comando em seu terminal
<code>npx prisma migrate dev</code>

## Passo 4: Iniciar a aplicação

Com todas as dependências instaladas e o banco de dados configurado, agora você pode iniciar a aplicação. Execute o seguinte comando:
<code>yarn start</code>

