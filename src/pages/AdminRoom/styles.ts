import styled from 'styled-components';

export const Container = styled.div`
  header {
    padding: 24px;
    border-bottom: 1px solid #e2e2e2;

    > div {
      max-width: 1120px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      a {
        background-color: transparent;
        border: none;
        outline: none;

        > img {
          max-height: 45px;
        }
      }

      > div {
        display: flex;
        gap: 16px;

        button {
          height: 40px;
        }
      }
    }
  }

  main {
    max-width: 800px;
    margin: 0 auto;

    .room-title {
      margin: 32px 0 24px;
      display: flex;
      align-items: center;

      h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 24px;
        color: ${props => props.theme.colors.themeOne};
      }

      span {
        margin-left: 16px;
        background: ${props => props.theme.colors.secondaryDark};
        border-radius: 9999px;
        padding: 8px 16px;
        color: #fff;
        font-weight: 500;
      }
    }

    form {
      textarea {
        width: 100%;
        bottom: 0;
        outline: 0;
        padding: 16px;
        border-radius: 8px;
        background: ${props => props.theme.colors.details};
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        resize: vertical;
        min-height: 130px;
      }

      .form-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;

        > span {
          font-size: 14px;
          color: ${props => props.theme.colors.primaryDark};
          font-weight: 500;

          button {
            background: none;
            outline: 0;
            border: 0;

            color: ${props => props.theme.colors.themeTwo}5afd;
            text-decoration: underline;
            font-size: 14;
            font-weight: 500;
          }
        }

        > div {
          display: flex;
          align-items: center;

          img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
          }

          span {
            margin-left: 8px;
            color: ${props => props.theme.colors.themeOne};
            font-weight: 500;
            font-size: 14px;
          }
        }
      }
    }
  }
`;

export const QuestionList = styled.div`
  margin-top: 32px;
`;

export const ModalDelete = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-bottom: 24px;
  }

  h2 {
    margin-bottom: 12px;
  }

  p {
    margin-bottom: 40px;
  }

  div {
    display: flex;
    gap: 8px;

    button {
      padding: 14px 32px;
      color: ${props => props.theme.colors.primaryDark};
      background: ${props => props.theme.colors.primaryLight};
      border: none;
      outline: none;
      border-radius: 8px;
      transition: background 0.2s;

      &.delete-button {
        color: #fff;
        background: ${props => props.theme.colors.danger};

        &:hover {
          background: ${props => props.theme.hovers.danger};
        }
      }
    }
  }
`;
