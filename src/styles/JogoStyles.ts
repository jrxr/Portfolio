import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const ContainerTitle = styled.div`
  max-width: 1200px;

  margin: 2rem auto 2rem auto;
  position: relative;
  overflow: hidden;

  @media (max-width: 1000px) {
    max-width: 870px;
  }

  @media (max-width: 500px) {
    max-width: 450px;
  }
`;

export const Music = styled.audio``;

export const Title = styled.h1`
  color: ${({ theme }) => theme.mario};
  font-size: 1.9rem;
`;

export const Overlay = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  background: #0000009a;
  color: #efefef;

  position: fixed;
  inset: 0;

  z-index: 2;
`;

export const OverlayContent = styled.div`
  position: relative;
  width: 70%;
  height: 50%;

  border-radius: 25px;
  background: url('/assets/overlay-background.png') center center;
  background-size: contain;

  overflow: hidden;

  z-index: 2;
`;

export const OverlayTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;

  text-shadow: 0px 0px 10px #000000;
`;

export const OverlayScore = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

export const OverlayButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70%;
`;

export const ResetButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 1rem 2.5rem;
  color: #000;
  font-weight: 300;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.mario};
  transition: 0.5s;
  width: fit-content;
`;

export const Score = styled.h2`
  outline: none;
  background: ${({ theme }) => theme.primary};
  border-radius: 10px;
  color: ${({ theme }) => theme.mario};
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;

  padding: 10px;

  :active {
    transform: scale(0.9);
  }
`;

export const StartGame = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 10px;
`;

export const Content = styled.div`
  max-width: 1200px;
  height: 75vh;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, #87cefa 0%, #bdd8e3 100%);

  box-shadow: 0 0 15px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(121, 181, 31, 0.249);
  border-bottom: 10px solid #79b51f;
  border-radius: 10px;

  @media (max-width: 1000px) {
    max-width: 900px;
  }

  @media (max-width: 500px) {
    height: 68vh;
  }
`;

export const Clouds = styled.img`
  position: absolute;
  top: 70px;
  width: 400px;
  animation: clouds-animate 20s infinite linear;

  @keyframes clouds-animate {
    from {
      right: -400px;
    }
    to {
      right: 1250px;
    }
  }
`;

export const CloudsTwo = styled.img`
  position: absolute;
  top: 70px;
  width: 400px;
  animation: clouds-animate 20s infinite linear;
  top: 210px;
  animation: clouds-animate 15s infinite linear;

  @keyframes clouds-animate {
    from {
      right: -400px;
    }
    to {
      right: 1250px;
    }
  }
`;

export const Pipe = styled.img`
  position: absolute;
  width: 70px;
  bottom: 0;
  right: -10px;
`;

export const Mario = styled.img`
  position: absolute;
  width: 150px;
  bottom: 0;
`;
