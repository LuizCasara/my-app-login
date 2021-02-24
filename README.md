# Sobre o Projeto
Tela de login responsiva, com textos estrutura de textos pronta para internacionalização em mais idiomas alem do português(pt-BR), com rotas para:
* /login
* /home
* /forgetPassword
* /pageNotFound

Aplicação esta publicada no [Heroku](https://app-login-wiser.herokuapp.com/);

Sendo que o login, chama esta chamando a api no [Mockapi.io](https://6035d51e6496b9001749f6b6.mockapi.io/api/v1/signIn);

E o fonte pode ser visto no meu repositório particular [aqui](https://github.com/LuizCasara/my-app-login);

O projeto foi baseado no [mock](https://www.figma.com/file/zC98pMR61WhKX5joTKTMr6/Teste-Wiser?node-id=3%3A93);

# Libs Utilizadas
* [md5](https://www.npmjs.com/package/md5) - Para criptografar a senha no "onBlur";
* [Styled-Components](https://styled-components.com/) - Para estilização de componentes;
* [React-router](https://reactrouter.com/) - Para criação de rotas;
* [react-bootstrap](https://react-bootstrap.github.io/) - Para ajustes de responsividade;

# Start Project

Para rodar o projeto basta executar:
### `npm start`

A aplicação vai abrir no "/" na porta 3000: [http://localhost:3000](http://localhost:3000).
