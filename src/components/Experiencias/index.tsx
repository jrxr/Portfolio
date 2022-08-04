import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title=" Experiência" />

      <section>
        <ExperienciaItem
          year="2022"
          title="Dev Mobile"
          description="Responsável pelo desenvolvimento mobile utilizando React-Native."
        />
        <ExperienciaItem
          year="2021"
          title="Dev Mobile"
          description="Responsável pelo desenvolvimento mobile utilizando React-Native, converter arquivos javascript para typescript e desenvolvimento de novas funcionalidades para o aplicativo."
        />
        <ExperienciaItem
          year="2021"
          title="Dev Mobile"
          description="Responsável pelo desenvolvimento de telas utilizando do framework React Native,
          criação de componentes, utilização de Jest para testes e gerenciamento de repositórios através do GitLab."
        />
        <ExperienciaItem
          year="2020"
          title="Dev Full-Stack"
          description="Responsável por ajustes no Front-End, criação de API Restful, desenvolvimento de aplicativos mobile. "
        />
        <ExperienciaItem
          year="2018"
          title="Dev Full-Stack"
          description="Estagiário, responsável pelo desenvolvimento de aplicações Web com Javascript, Php, Ajax, Jquery, Bootstrap e Mysql. "
        />
      </section>
    </Container>
  );
}

export default Experiencias;
