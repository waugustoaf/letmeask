import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  .button {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    button {
      background: transparent;
      border: none;
      outline: none;
    }
  }

  .content {
    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
      margin-bottom: 12px;
      color: #e73f5d;
    }

    p {
      margin-bottom: 40px;
    }
  }
`;
