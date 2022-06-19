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
  ContainerTitle,
  Music
} from '../../../styles/JogoStyles';

import MarioImg from '../../../../public/assets/mario.gif';
import CloudImg from '../../../../public/assets/clouds.png';
import PipeImg from '../../../../public/assets/pipe.png';

export default function jogo() {
  return (
    <Container>
      <Header />
      <ContainerTitle>
        <Title>
          Enquanto aguarda os novos projetos, divirta-se com esse jogo do mario!
        </Title>
        <Music autoPlay src="/music.mp3" />
      </ContainerTitle>
      <Overlay className="Overlay">
        <OverlayContent>
          <OverlayTitle>
            <h1>Mario Game</h1>
            <OverlayScore className="OverlayScore">Seu score 0</OverlayScore>
          </OverlayTitle>

          <OverlayButtons>
            <ResetButton className="ResetButton">Reiniciar</ResetButton>
          </OverlayButtons>
        </OverlayContent>
      </Overlay>

      <Content>
        <Score className="Score">
          SCORE 0 - Clique na tela pra começar, em caso de erro atualize a
          página.
        </Score>
        <StartGame className="StartGame" />
        <Clouds src={CloudImg} alt="pixel arte de nuvens" />

        <CloudsTwo src={CloudImg} alt="pixel arte de nuvens" />

        <Mario
          className="Mario"
          src={MarioImg}
          alt="pixel arte do personagem mario caminhando"
        />

        <Pipe
          className="Pipe"
          src={PipeImg}
          alt="pixel arte de um tubo de encanação verde"
        />
      </Content>
    </Container>
  );
}
