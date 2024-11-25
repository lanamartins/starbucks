import React from 'react';
import novidades from '../../assets/images/novidades.png';
import { NovidadesSection } from './Style';

const Novidades = () => {
  return (
    <NovidadesSection>
      <div className='texto'>
        <div>
          <h2>PREPARAÇÃO</h2>
          <h1>Níveis de torra</h1>
          <p>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas são as torras que fazem parte dos níveis de torra Starbucks®</p>
          <button>SAIBA MAIS</button>
        </div>
        <div className="imagem-container">
          <img src={novidades} alt="novidades" />
        </div>
      </div>
    </NovidadesSection>
  );
};

export default Novidades;
