# Welcome to my project 👋

<img width="4430" height="4430" alt="previewLogo" src="https://github.com/user-attachments/assets/2eba7252-802d-4474-a29f-fac15f3a63fa" />

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
- [Daniel Silva Souza](https://github.com/danielslza) - Criador do Design e desenvolvimento do App.
- [Gabriel Victorino](https://github.com/GabrielVictorino8266/) - Desenvolvimento do Hardware (Montagem e Conexão), conexão com a Api.
- [Pedro Lucas Sampaio](https://github.com/iamdqrk) - Desenvolvimento do App (Telas em Geral, Gráficos).

## Screenshots

![previewTelaInicial](https://github.com/user-attachments/assets/72cd5b3d-a6e5-4645-8ce3-557e0542cb94)

---

![previewTelaCreditos](https://github.com/user-attachments/assets/1f48bd05-f3b5-4386-a4c5-cc852ad5f03e)

---

![previewTelaOpcoes](https://github.com/user-attachments/assets/f74f179e-60a8-490e-92fb-c02cbc68176b)

---

![previewTelaSensores](https://github.com/user-attachments/assets/8ba029cf-22bb-4a0f-a8a7-477cf5ea4239)

---

![previewTelaGraficos](https://github.com/user-attachments/assets/38a1abbd-436c-4548-b036-4f3211f64283)

---

![previewTelaPlataforma](https://github.com/user-attachments/assets/0be196df-e892-42f1-b196-ca2ff22a86aa)

