import styled from 'styled-components';

export const ConteudoSobre = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px;
  background-color: white;
`;

export const TextoSobre = styled.div`
  max-width: 660px;
  margin-left: 130px;
  
  h2 {
    font-size: 24px;
    color: #1E3932;
  }
  
  h1 {
    font-size: 64px;
    color: #1E3932;
    font-weight: normal;
  }
  
  p {
    font-size: 24px;
    color: #1E3932;
    line-height: 1.5;
    margin-bottom: 30px;
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
    
    &:hover {
      background-color: #005f3b;
    }
  }
`;