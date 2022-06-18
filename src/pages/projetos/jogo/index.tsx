import Header from '../../../components/Header';

import {
  Clouds,
  CloudsTwo,
  Container,
  Content,
  Mario,
  Overlay,
  OverlayButtons,
  OverlayContent,
  OverlayScore,
  OverlayTitle,
  Pipe,
  ResetButton,
  Score,
  StartGame,
  Title,
  ContainerTitle
  // Music
} from './styles';

import MarioImg from './assets/mario.gif';
import CloudImg from './assets/clouds.png';
import PipeImg from './assets/pipe.png';

export default function jogo() {
  return (
    <Container>
      <Header />
      <ContainerTitle>
        <Title>
          Enquanto aguarda os novos projetos, divirta-se com esse jogo do mario!
        </Title>
      </ContainerTitle>
      <Overlay>
        <OverlayContent>
          <OverlayTitle>
            <h1>Mario Game</h1>
            <OverlayScore>Seu score 0</OverlayScore>
          </OverlayTitle>

          <OverlayButtons>
            <ResetButton>Reiniciar</ResetButton>
          </OverlayButtons>
        </OverlayContent>
      </Overlay>

      <Content>
        <Score>SCORE 0</Score>
        <StartGame />
        <Clouds src={CloudImg} alt="pixel arte de nuvens" />

        <CloudsTwo src={CloudImg} alt="pixel arte de nuvens" />

        <Mario src={MarioImg} alt="pixel arte do personagem mario caminhando" />

        <Pipe src={PipeImg} alt="pixel arte de um tubo de encanação verde" />
      </Content>
    </Container>
  );
}
