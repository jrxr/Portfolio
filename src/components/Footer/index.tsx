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
        <section>
          <FaWhatsappSquare
            onClick={() =>
              handleRedirect(
                'https://api.whatsapp.com/send?phone=5561982029144&text='
              )
            }
          />
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/jrxr')}
          />
          <AiFillLinkedin
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
