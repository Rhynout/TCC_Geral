# Welcome to my project 👋

![Logo](./github/previewLogo.png)

## TCC - Sistema de Irrigação assistido via Web

Este projeto foi desenvolvido em conjunto com Gabriel Victorino e Pedro Lucas Sampaio para a criação de nosso projeto de TCC do curso de Desenvolvimento de Sistemas na Etec Deputado Salim Sedeh de Leme/SP (Brasil).

Nomeado de Delta, referente aos rios, o projeto buscava ir além de desenvolver um aplicativo ou website, nós interligamos o hardware com o software, oq ue proporcionou novos desafios, mas também novos aprendizados. Atualmente, vemos muita automação à nossa volta, por exemplo, os 🚗 Carros Elétricos da Tesla ou Sensores de Segurança monitorados pelo celular, tudo via Internet. Assim, utilizamos a ideia de irrigação, que é algo do cotidiano de todos e automatizamos o processo, demonstrando que, mesmo em situações simples, podemos usar a tecnologia para facilitar nossas vidas.

## Funcionamento ⚙

O projeto faz uso de dois sensores, o primeiro e o principal, é de Umidade do solo, quem analisa o solo e indica o quão úmido está. Já o segundo sensor corresponde ao de Temperatura e Umidade do Ar, que auxilia no funcionamento e na verifcação de parâmetros, como por exemplo, tempo muito seco ou presença de umidade em componentes eletrônicos.<br>
Após a leitura, a placa NodeMcu 8266 ativa, se necessário uma mini bomba d'água e, faz o envio das informações para a plataforma [ThingSpeak](https://thingspeak.com/). Posteriormente, nosso aplicativo faz requisições para uma Api com chave criptografada, atualizando e exibindo as informações em um smartphone, tudo pela internet, podendo ser visto de qualquer lugar.

### 📝 Lições aprendidas

- Conectar o Hardware à internet.
- Desenvolvimento em React Native
- Design e maneiras interativas (gráficos) para exibir os dados.

### 🛠 Tecnologias Utilizadas

- React Native
- NodeMcu 8266
- Conexões via Api
- Plataforma Gratuita ThingSpeak

### 👤 Equipe
- [Daniel Silva Souza](https://github.com/Rhynout) - Criador do Design e desenvolvimento do App.
- [Gabriel Victorino](https://github.com/GabrielVictorino8266/) - Desenvolvimento do Hardware (Montagem e Conexão), conexão com a Api.
- [Pedro Lucas Sampaio](https://github.com/iamdqrk) - Desenvolvimento do App (Telas em Geral, Gráficos).

## Screenshots

![preview](./github/previewTelaInicial.jpg)
![preview](./github/previewTelaCreditos.jpg)
![preview](./github/previewTelaOpcoes.jpg)
![preview](./github/previewTelaSensores.jpg)
![preview](./github/previewTelaGraficos.jpg)
![preview](./github/previewTelaPlataforma.jpg)
