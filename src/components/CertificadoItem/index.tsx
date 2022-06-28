import { Container } from './styles';

interface CertificadoItemProps {
  title: string;
  type: string;
  imgUrl: string;
}

function CertificadoItem({ title, type, imgUrl }: CertificadoItemProps) {
  return (
    <Container imgUrl={imgUrl}>
      <a>
        <div className="overlay" />
        <section>
          <h1>{title}</h1>
          <h2>{type}</h2>
        </section>
      </a>
    </Container>
  );
}

export default CertificadoItem;
