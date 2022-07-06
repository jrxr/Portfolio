import styled from 'styled-components';

interface ContainerProps {
  imgUrl: string;
}

export const Container = styled.div<ContainerProps>`
  > a {
    position: relative;
    width: 100%;
    background: url(${props => props.imgUrl}) no-repeat center;
    background-size: cover;
    height: 30rem;
    padding: 1.5rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    border-radius: 1rem;
    border: 5px solid ${({ theme }) => theme.border};
    transition: 0.7s;
    cursor: pointer;
    overflow: hidden;

    &:hover {
      border-color: ${({ theme }) => theme.success};
      -moz-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);

      > div.overlay {
        opacity: 0.1;
      }
      > section {
        h1 {
          color: transparent;
        }
        h2 {
          color: transparent;
        }
      }
    }

    > section {
      z-index: 2;
      h1 {
        color: ${({ theme }) => theme.textLight};
        font-size: 1.5rem;
      }
      h2 {
        color: ${({ theme }) => theme.textLight};
        font-size: 1rem;
        font-weight: 500;
      }
    }

    > div.overlay {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.gradient};
      opacity: 0.9;
      transition: 0.7s;
    }

    @media (max-width: 1000px) {
      height: 20rem;
    }

    @media (max-width: 550px) {
      height: 15rem;
    }
  }
`;
