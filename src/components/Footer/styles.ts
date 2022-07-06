import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  margin-top: 10rem;
  border-top: 1px solid ${({ theme }) => theme.backgroundLight};
  height: 5rem;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background: none;
      border: none;
      color: ${({ theme }) => theme.secondary};
      text-transform: uppercase;
      font-weight: 300;
      font-size: 1.2rem;
    }

    h1 {
      color: ${({ theme }) => theme.success};
      text-transform: uppercase;
      font-weight: 500;
      font-size: 1rem;
    }

    > section {
      display: flex;
      align-items: center;
      gap: 1rem;

      .whatsapp {
        &:hover {
          color: ${({ theme }) => theme.success};
          transform: scale(1.2);
        }
      }

      .github {
        &:hover {
          color: ${({ theme }) => theme.secondary};
          transform: scale(1.2);
        }
      }

      .linkedin {
        &:hover {
          color: #0e76a8;
          transform: scale(1.2);
        }
      }

      svg {
        width: 2rem;
        height: 2rem;
        color: ${({ theme }) => theme.text};
        transition: 0.5s;
        cursor: pointer;
      }
    }

    @media (max-width: 450px) {
      button {
        font-size: 0.9rem;
      }

      h1 {
        color: transparent;
        font-size: 0.2rem;
      }

      > section {
        gap: 0.5rem;

        svg {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
`;
