/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/logo.gif';

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <img src={picture} alt="Logo" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Seja Bem-vindo!</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span>
            {'\u007B'}
            <div>
              Nome: <span className="blue">Agacy,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Martins</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Cargo</span>
            {'\u007B'}
            <div>
              Função:
              <span className="blue"> Developer Front-end and Mobile,</span>
            </div>
            <div>
              Nível: <span className="blue">Júnior</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
