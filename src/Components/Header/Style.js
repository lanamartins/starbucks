import styled from 'styled-components';

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 8rem;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  img {
    height: 70px;
  }

  nav {
    ul {
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-left: 4rem;
        font-size: 24px;

        a {
          text-decoration: none;
          color: #000000;
          transition: color 0.3s ease;

          &:hover {
            color: #318c43;
          }
`;