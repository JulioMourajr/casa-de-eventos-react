# Sistema de casa de eventos 

![Print da Homepage](https://i.ibb.co/0BLwdMW/Screenshot-2024-02-19-at-16-30-28.png)

## Tecnologias Utilizadas

- React
- Vite
- Node v20.5.1

## Dependências Utilizadas

- Docker
- React Router
- Styled Components
- Axios
- React Toastify
- Json Server

## Participantes do projeto

- Julio Moura

## Responsaveis pela conteinerização:

### Julio Moura

- Criou o build da aplicação.
- Subiu para o dockerhub.

## Instruções de Instalação

Clonar o projeto com o comando abaixo:

```sh
git clone https://github.com/roofranklin/casa-de-eventos-react.git
```

Entrar na pasta do projeto

```sh
cd casa-de-eventos-react
```

## Se você tiver o docker instalado, no seu terminal rode o comando:

```sh
docker build -t casa-de-eventos-react .
```

Esse comando vai buildar a aplicação.
Agora para rodar aplicação, no seu terminal digite o comando:

```sh
docker run -d -p 5173:5173 casa-de-eventos-react
```

### _Pronto! Seu projeto já estará rodando no endereço http://localhost:5173_

Com isso ele vai pular todos os comandos, não precisa dos comandos abaixo.

Instalar as dependencias

```sh
npm install
```

Instalar de maneira global o json-server (Caso você ainda não possua)

```sh
npm install -g json-server
```

## Instruções para rodar o projeto

Digitar o comando abaixo para rodar em desenvolvimento

```sh
npm run dev
```

Digitar o comando abaixo para rodar o mock local

```sh
json-server --watch eventos.json
```

### _Pronto! Seu projeto já estará rodando no endereço http://localhost:5173_

### Agradecimentos

Ao Roosevelt Franklin pelo código: https://github.com/roofranklin
