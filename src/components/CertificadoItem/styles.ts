import styled from 'styled-components';

interface ContainerProps {
  imgUrl: string;
}

export const Container = styled.div<ContainerProps>`
  > a {
    position: relative;
    width: 100%;
    background: url(${props => props.imgUrl}) no-repeat center;
    background-size: 100%;
    height: 45rem;
    padding: 1rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    border-radius: 1rem;
    border: 1px solid ${({ theme }) => theme.border};
    transition: 0.5s;
    cursor: pointer;
    overflow: hidden;

    &:hover {
      border-color: ${({ theme }) => theme.success};

      > div.overlay {
        opacity: 0.4;
      }
      > section {
        h1 {
          color: ${({ theme }) => theme.success};
        }
        h2 {
          color: ${({ theme }) => theme.success};
        }
      }
    }

    > section {
      z-index: 1;
      h1 {
        color: ${({ theme }) => theme.textLight};
        font-size: 1.5rem;
      }
      h2 {
        color: ${({ theme }) => theme.textLight};
        font-size: 1rem;
        font-weight: 300;
      }
    }

    > div.overlay {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.gradient};
      opacity: 0.7;
      transition: 0.5s;
    }

    @media (max-width: 1000px) {
      background-size: 100%;
      height: 32rem;
    }

    @media (max-width: 550px) {
      background-size: 100%;
      height: 14rem;
    }
  }
`;
