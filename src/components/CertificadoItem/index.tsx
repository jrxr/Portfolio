// import Link from 'next/link';
import { Container } from './styles';

interface CertificadoItemProps {
  title: string;
  type: string;
  imgUrl: string;
  // slug: string;
}

function CertificadoItem({ title, type, imgUrl }: CertificadoItemProps) {
  return (
    <Container imgUrl={imgUrl} data-aos="fade-right">
      {/* <Link href={`/projetos/${slug}`}> */}
      <a>
        <div className="overlay" />
        <section>
          <h1>{title}</h1>
          <h2>{type}</h2>
        </section>
      </a>
      {/* </Link> */}
    </Container>
  );
}

export default CertificadoItem;
