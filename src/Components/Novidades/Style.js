import styled from 'styled-components';

export const NovidadesSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 120px;
  background-color: #1e3932;
  padding-top: 134px;

  .texto {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: #ffffff;
  }

    h2 {
      font-size: 24px;
      color: #ffffff;

    }

    h1 {
      font-size: 64px;
      font-weight: normal;
    }

    p {
      font-size: 24px;
      margin-bottom: 1.5em;
      max-width: 80%;
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

  .img {
    max-width: 40%;
    height: auto;
    margin-top: 5rem;
  }
@media (max-width: 768px) {
    padding: 40px 20px;

    .texto {
      align-items: center;
      text-align: center;
    }

    h1 {
      font-size: 36px;
    }

    h2 {
      font-size: 18px;
    }

    p {
      font-size: 18px;
      max-width: 100%;
    }

    button {
      padding: 8px 30px;
      font-size: 14px;
    }

    .img{
      max-width: 80%;
      margin-top: 2rem;
    }
  }

  @media (max-width: 480px) {
    padding: 20px 10px;

    .texto {
      align-items: center;
      text-align: center;
    }

    h1 {
      font-size: 28px;
    }

    h2 {
      font-size: 16px;
    }

    p {
      font-size: 16px;
      max-width: 100%;
    }

    button {
      padding: 6px 25px;
      font-size: 12px;
    }

    .img {
      max-width: 100%;
      margin-top: 1rem;
    }
  }
`;



