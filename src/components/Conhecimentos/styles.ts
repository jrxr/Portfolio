import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  > section {
    margin-top: 8rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8rem;

    @media (max-width: 1000px) {
      gap: 5rem;
    }

    @media (max-width: 800px) {
      gap: 3rem;
      flex-wrap: wrap;
      margin-top: 5rem;
    }
  }
`;

export const ConhecimentoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;

  p {
    color: ${({ theme }) => theme.primary};
    font-weight: 300;
    font-size: 1.3rem;
    text-transform: uppercase;
  }

  .htmlsvg {
    &:hover {
      color: #f77f00;
      transform: scale(1.2);
    }
  }

  .htmlsvg {
    &:hover {
      color: #f77f00;
      transform: scale(1.2);
    }
  }

  .csssvg {
    &:hover {
      color: #0077b6;
      transform: scale(1.2);
    }
  }

  .javascript {
    &:hover {
      color: #ffea00;
      transform: scale(1.2);
    }
  }

  .react {
    &:hover {
      color: #ade8f4;
      transform: scale(1.2);
    }
  }

  .swift {
    &:hover {
      color: #ff9e00;
      transform: scale(1.2);
    }
  }

  .node {
    &:hover {
      color: #38b000;
      transform: scale(1.2);
    }
  }

  svg {
    width: 6.5rem;
    height: 6.5rem;
    color: ${({ theme }) => theme.secondary};
    transition: 0.3s;
  }

  @media (max-width: 1000px) {
    p {
      font-size: 1rem;
    }

    svg {
      width: 4rem;
      height: 4rem;
    }
  }
`;
