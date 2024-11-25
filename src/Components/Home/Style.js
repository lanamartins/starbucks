import styled from 'styled-components';

export const HomeContainer = styled.div`
  background-color: white;
  overflow-y: hidden;
  overflow-x: hidden;

  .home {
    background-color: white;
    display: flex;
    padding: 70px;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    box-sizing: border-box;
  }

  .texto-home {
    text-align: left;
    padding-left: 60px;
  }

  .texto-home h1 {
    font-size: 64px;
    font-weight: normal;
  }

  .texto-home h2 {
    font-size: 64px;
    font-weight: normal;
    line-height: 1.0;
    span {
      color: #00704a;
      font-size: 96px;
      font-weight: bold;
    }
  }

  .texto-home p {
    margin-bottom: 1em;
    text-align: left;
    font-size: 24px;
    width: 750px;
    margin-top: 10px;

  }

  button {
    padding: 10px 40px;
    font-size: 16px;
    color: #fff;
    background-color: #00704a;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
  }

  .imagem-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; /* Usar 100% para ocupar toda a largura */
    bottom: 200px;
    height: 38px;
  }

  .imagem-container img.copo-grande {
    position: absolute;
    top: -310px; /* Ajuste a posição do copo grande para ele ficar acima */
    left: 85%;
    transform: translateX(-50%);
    z-index: 2; /* Coloca o copo acima do ellipse */
    width: 30%; /* Ajuste o tamanho do copo grande conforme necessário */
    height: auto;
  }

  .imagem-container img.ellipse {
    position: absolute;
    width: 35%; /* Ajuste a largura conforme necessário */
    height: auto;
    left: 1278px;
    transform: translateX(-52%); /* Garante centralização precisa */
    z-index: 1; /* Garante que o ellipse fique atrás do copo */
  }

  .copinhos {
    position: absolute;
    bottom: 10px; /* Fixa na parte inferior */
    left: 50%;
    transform: translateX(-57%); /* Centraliza os copinhos horizontalmente */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3; /* Coloca os copinhos acima do copo e ellipse */
  }

  .copinhos img {
    margin: 0 2px; /* Espaçamento entre as imagens dos copinhos */
    cursor: pointer;
    transition: 0.3s ease;
    width: 80px
  }
`;
  