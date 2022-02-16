import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';

import { Container } from './styles';

function Projetos() {
  return (
    <Container>
      <SectionTitle title="Projetos Desenvolvidos" />

      <section>
        <ProjetoItem
          img="https://jornaltribuna.com.br/wp-content/uploads/2021/11/homem-aranha-4-1170x720-1.jpg"
          title="Projeto 1"
          type="Website"
          slug="teste"
        />
        <ProjetoItem
          img="https://jornaltribuna.com.br/wp-content/uploads/2021/11/homem-aranha-4-1170x720-1.jpg"
          title="Projeto 2"
          type="Website"
          slug="teste"
        />
        <ProjetoItem
          img="https://jornaltribuna.com.br/wp-content/uploads/2021/11/homem-aranha-4-1170x720-1.jpg"
          title="Projeto 1"
          type="website"
          slug="teste"
        />
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
