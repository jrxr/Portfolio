import { darken } from 'polished';
import styled from 'styled-components';

export const ProjetoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > main {
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 100%;
    padding: 0 5rem;

    p {
      color: ${({ theme }) => theme.textLight};
      font-size: 1.5rem;
      font-weight: 300;
      text-align: justify;
    }

    a {
      color: ${({ theme }) => theme.secondary};
      font-size: 1.5rem;
      font-weight: 300;
      text-align: justify;
    }

    a:hover {
      color: ${({ theme }) => theme.success};
    }

    button {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.textLight};
      padding: 1rem 2rem;
      border-radius: 1rem;
      border: none;
      transition: 0.5s;
      margin: 2rem 0 0 2rem;

      &:hover {
        background: ${({ theme }) => darken(0.05, theme.primary)};
      }

      a {
        color: #fff;
        text-transform: uppercase;
        font-size: 1.5rem;
        font-weight: 300;
      }
    }

    @media (max-width: 700px) {
      padding: 0 2.5rem;

      p {
        font-size: 1rem;
      }

      button {
        padding: 0.7rem 2rem;

        a {
          font-size: 0.9rem;
        }
      }
    }
  }
`;
