import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5rem;
  width: 100%;
  height: 100vh;

  & img {
    max-width: 70rem;
  }

  & p {
    color: ${({ theme }) => theme.error};
    font-size: 1.5rem;
    margin: 2rem 0;
    font-weight: 600;
    text-align: center;
  }

  & button {
    border: none;
    padding: 1rem 2.5rem;
    color: #ffffff;
    font-weight: 300;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.primary};
    transition: 0.5s;
    width: fit-content;
  }

  @media (max-width: 600px) {
    padding: 2rem;

    & img {
      max-width: 100%;
    }

    & p {
      font-size: 1rem;
    }
  }
`;
