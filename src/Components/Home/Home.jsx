import React, { useState } from 'react';
import { HomeContainer } from './Style';
import copinholaranja from '../../assets/images/copinholaranja.png';
import copinhoamarelo from '../../assets/images/copinhoamarelo.png';
import copinhovermelho from '../../assets/images/copinhovermelho.png';
import ellipseamarelo from '../../assets/images/ellipseamarelo.png';
import ellipsevermelho from '../../assets/images/ellipsevermelho.png';
import ellipseverde from '../../assets/images/ellipseverde.png';
import copaoamarelo from '../../assets/images/copaoamarelo.png';
import copaolaranja from '../../assets/images/copaolaranja.png';
import copaovermelho from '../../assets/images/copaovermelho.png';

export default function Home() {
  const corVerde = "green";
  const corVermelha = "red";
  const corAmarela = "yellow";

  const [corFundo, setCorFundo] = useState(corVerde);
  const [ellipse, setEllipse] = useState(ellipseverde);
  const [copoGrande, setCopoGrande] = useState(copaolaranja);

  function clicarLaranja() {
    setCorFundo(corVerde);
    setEllipse(ellipseverde);
    setCopoGrande(copaolaranja);
  }

  function clicarAmarelo() {
    setCorFundo(corAmarela);
    setEllipse(ellipseamarelo);
    setCopoGrande(copaoamarelo);
  }

  function clicarVermelho() {
    setCorFundo(corVermelha);
    setEllipse(ellipsevermelho);
    setCopoGrande(copaovermelho);
  }

  return (
    <HomeContainer corFundo={corFundo}>
      <div className="home">
        <div className="texto-home">
          <h1>Mais que Café</h1>
          <h2>Isso é <span>Starbucks</span></h2>
          <p>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</p>
          <button>SAIBA MAIS</button>
        </div>
        <figure className="copinhos">
          <img src={copinhoamarelo} onClick={clicarAmarelo} alt="Copo pequeno amarelo" />
          <img src={copinhovermelho} onClick={clicarVermelho} alt="Copo pequeno vermelho" />
          <img src={copinholaranja} onClick={clicarLaranja} alt="Copo pequeno laranja" />
        </figure>
      </div>
      <div className="imagem-container">
        <img src={copoGrande} className="copo-grande" alt="Copo grande" />
        <img src={ellipse} className="ellipse" alt="Ellipse colorido" />
      </div>
    </HomeContainer>
  );
}