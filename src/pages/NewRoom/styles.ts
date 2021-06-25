import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    flex: 7;
    display: flex;
    flex-direction: column;
    justify-content: center;

    background: ${props => props.theme.colors.themeTwo};
    color: #fff;

    padding: 120px 80px;

    img {
      max-width: 320px;
    }

    strong {
      font: 700 36px 'poppins', sans-serif;
      line-height: 42px;
      margin-top: 16px;
    }

    p {
      font-size: 24px;
      line-height: 32px;
      margin-top: 6px;
      color: ${props => props.theme.colors.background};
    }

    @media screen and (max-width: 912px) {
      display: none;
    }
  }

  main {
    flex: 8;

    padding: 0 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  align-items: stretch;
  text-align: center;

  > img {
    align-self: center;
  }

  h2 {
    font-size: 24px;
    margin: 64px 0 24px;
    font-family: 'Poppins', sans-serif;
  }

  form {
    input {
      height: 50px;
      border-radius: 8px;
      padding: 0 16px;
      background-color: #fff;
      color: #a8a8b3;
      outline: 0;
    }

    button {
      margin-top: 16px;
    }

    button,
    input {
      width: 100%;
    }
  }

  p {
    font-size: 14px;
    color: ${props => props.theme.colors.themeOne};
    margin-top: 16px;

    a {
      color: ${props => props.theme.colors.secondaryDark};
      text-decoration: none;
    }
  }
`;
