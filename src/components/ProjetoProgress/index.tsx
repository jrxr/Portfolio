import Link from 'next/link';
import { Container } from './styles';

interface ProjetoItemProps {
  title: string;
  type: string;
  imgUrl: string;
}

function ProjetoProgress({ title, type, imgUrl }: ProjetoItemProps) {
  return (
    <Container imgUrl={imgUrl} data-aos="fade-right">
      <Link href="/projetos/">
        <a>
          <div className="overlay" />
          <section>
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
        </a>
      </Link>
    </Container>
  );
}

export default ProjetoProgress;
