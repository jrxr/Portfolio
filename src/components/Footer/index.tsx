import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaWhatsappSquare } from 'react-icons/fa';

import { Container } from './styles';

function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </button>
        <h1>Feito com 💙 by Agacy Júnior 💻</h1>
        <section>
          <FaWhatsappSquare
            className="whatsapp"
            onClick={() =>
              handleRedirect(
                'https://api.whatsapp.com/send?phone=5561982029144&text='
              )
            }
          />
          <AiOutlineGithub
            className="github"
            onClick={() => handleRedirect('https://github.com/jrxr')}
          />
          <AiFillLinkedin
            className="linkedin"
            onClick={() =>
              handleRedirect('https://www.linkedin.com/in/agacyjunior/')
            }
          />
        </section>
      </div>
    </Container>
  );
}

export default Footer;
