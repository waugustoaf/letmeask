import styled, { css } from 'styled-components';

interface ContainerProps {
  isAnswered?: boolean;
  isHighlighted?: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${props => props.theme.colors.details};
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;

  p {
    color: ${props => props.theme.colors.themeOne};
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    > div.buttons {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    button {
      border: none;
      outline: none;
      background: transparent;
      cursor: pointer;
      transition: filter 0.2s;

      &.like-button {
        display: flex;
        align-items: flex-end;
        color: ${props => props.theme.colors.primaryDark};
        gap: 8px;

        &.liked {
          color: ${props => props.theme.colors.themeOne};

          svg path {
            stroke: ${props => props.theme.colors.themeOne};
          }
        }
      }

      &:hover {
        filter: brightness(0.7);
      }
    }
  }

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isHighlighted &&
    css`
      background-color: ${props.theme.colors.details};
      border: 1px solid ${props.theme.colors.secondaryDark};

      font-weight: bold;
    `}

  ${props =>
    props.isAnswered &&
    css`
      background-color: ${props.theme.colors.primaryMedium};
    `}
`;

export const UserInfo = styled.div`
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
    font-size: 14px;
  }
`;
