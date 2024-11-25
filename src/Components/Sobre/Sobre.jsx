import React from 'react';
import loja from '../../assets/images/loja.png';
import { ConteudoSobre, TextoSobre } from './Style';
const Sobre = () => {
  return (
    <ConteudoSobre>
      <img src={loja} alt='loja starbucks'/>
      <TextoSobre>
        <h2>PREPARAÇÃO</h2>
        <h1>Níveis de torra</h1>
        <p>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</p>
        <button>SAIBA MAIS</button>
      </TextoSobre>
    </ConteudoSobre>
  );
};

export default Sobre;
