import styled from 'styled-components';

export const CertificadosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > main {
    margin-top: 2rem;
    margin-bottom: 5rem;
    width: 100%;
    gap: 1.5rem;

    img {
      width: 100%;
      height: 100%;
      border-radius: 2rem;
    }
  }
`;
