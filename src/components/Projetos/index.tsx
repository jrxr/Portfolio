import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjetoBox from './ProjetoBox';

import { Container } from './styles';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;

  link: { url: string };
  thumbnail: string;
}

interface ProjetosProps {
  projetos: IProjeto[];
}

function Projetos({ projetos }: ProjetosProps) {
  return (
    <Container>
      <SectionTitle title=" Projetos Desenvolvidos" />

      <section>
        {projetos.slice(0, 3).map(projeto => (
          <ProjetoBox
            key={projeto.slug}
            img={projeto.thumbnail}
            title={projeto.title}
            type={projeto.type}
            slug={projeto.slug}
          />
        ))}
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projetos;
