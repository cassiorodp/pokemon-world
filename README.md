<!--
*** Template adatpet from: https://github.com/othneildrew/Best-README-Template
***
-->

<p align="center">
  <a href="https://github.com/cassiorodp/pokemon-world" target="_blank">
    <img src="./src/img/pokedex.png" alt="Logo" width="120" height="120">
  </a>

  <h2 align="center">Pokedex App</h2>

  <p align="center">
    Online pokedex app to search for your favorite pokemons! powered by <a href="https://pokeapi.co" target="_blank">PokeAPI</a>.
    <br />
    <a href="https://cassiorodp.github.io/pokemon-world/" target="_blank">Source</a>
    ·
    <a href="https://github.com/cassiorodp/pokemon-world/issues" target="_blank">Report Bug</a>
  </p>
</p>

---

![landingpage project](./src/img/background-pokeworld.png)

---

<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <span>About the Project</span>
      <ul>
        <li><a href="#gear-Features">Features</a></li>
        <li><a href="#computer-Techs">Techs</a></li>
      </ul>
    </li>
    <li>
      <a href="#man_technologist-running_the_app">Running the App</a>
      <ul>
        <li><a href="">Prerequisites</a></li>
        <li><a href="">Installation</a></li>
      </ul>
    </li>
    <li><a href="">Contribuição</a></li>
    <li><a href="">Contacts</a></li>
  </ol>
</details>

### :gear: Features
- Search tool with animated feedback
- Complete pokedex with pagination
- Pokemon cards with animated css

### :computer: Techs
  
<div>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> 
</div>

## :man_technologist: Running the App

Para executar a aplicação localmente siga as instruções abaixo.

Obs.: a aplicação se encontra em deploy no site [https://react-context-movies.herokuapp.com/](https://react-context-movies.herokuapp.com/). _Lembrando que devido a configuração **Hibernate** do Heroku, o primeiro acesso poderá levar um longo tempo_.

### Pré-requisitos

Primeiramente é necessário que possua instalado as seguintes ferramentas: gerenciador de pacotes NPM e o Git.
Além disto é bom ter um editor para trabalhar com o código como VSCode.

### Instalação

1. Faça uma cópia do repositório (HTTPS ou SSH)
   ```sh
   git clone https://github.com/flpnascto/movies-react.git
   ```

   ```sh
   git@github.com:flpnascto/movies-react.git
   ```

2. Acesse a pasta do repositório loca e instale os pacotes necessários

   ```sh
   npm install
   ```
3. Adicionar chave para acesso à API TMDb
     1. Crie uma conta no site [https://www.themoviedb.org/](https://www.themoviedb.org/)
     2. Acesse sua conta em **configurações**
     3. Acesse no menu esquerdo a seção **API**
     4. Copie a sua chave em **Chave da API (v3 auth)**
     5. Na raiz do repositório local crie um novo arquivo chamado `.env.local`
     6. Abra `.env.local` e adicione a linha, substituindo _<<api_key>>_ pela sua chave (3.4)

     ```
     REACT_APP_APIKEY=<<api_key>>
     ```

4. Na pasta do repositócio local execute o comando para iniciar a aplicação

   ```sh
   npm start
   ```

### Made by Pair Progamming

---

### This project was done by the developers:
 - [Cassio Pereira](https://github.com/cassiorodp)
 - [Murilo Rainho](https://github.com/Murilo-Rainho)

---

[Find your favorite pokemon here!](https://cassiorodp.github.io/pokemon-world/)
We are open for feedbacks.
