import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title=" Experiência" />
      <section>
        <ExperienciaItem
          company="Projetas"
          year="05/2022 - 07/2023"
          title="Analista de Desenvolvimento Front-End"
          description="Responsável pelo desenvolvimento mobile utilizando do framework React-Native, criando telas e integrações com Api, gerenciamento de repositórios através do GitLab e do AWS CodeCommit e utilizando do Figma é Adobe XD para auxílio visual do desenvolvimento da telas. Desenvolvimento de páginas web utilizando do framework ReactJS, criação de telas responsivas é integrações com Api é o uso de metodologias ágeis como Scrum."
        />
        <ExperienciaItem
          company="Startup"
          year="11/2021 - 02/2022"
          title="Dev Front-End Júnior"
          description="Responsável pelo desenvolvimento mobile utilizando do framework React-Native junto com a ferramenta Expo, construção de e-commerce, criação de componentes para páginas Web com Next.js e gerenciamento de repositórios através do Github."
        />
        <ExperienciaItem
          company="ClickCard"
          year="09/2021 - 11/2021"
          title="Dev Mobile Júnior"
          description="Responsável pelo desenvolvimento mobile utilizando React-Native, converter arquivos"
        />
        <ExperienciaItem
          company="G4F"
          year="05/2021 - 08/2021"
          title="Dev Mobile Júnior"
          description="Responsável pelo desenvolvimento de telas utilizando do framework React Native,
          criação de componentes, utilização de Jest para testes e gerenciamento de repositórios através do GitLab."
        />
        <ExperienciaItem
          company="Porta Verde"
          year="03/2020 - 03/2021"
          title="Dev Full-Stack"
          description="Freelancer, responsável por ajustes no Front-End, criação de API Restful, desenvolvimento de aplicativos mobile utilizando React-Native. "
        />
        <ExperienciaItem
          company="Banco do Brasil"
          year="10/2018 - 12/2019"
          title="Dev Full-Stack"
          description="Estagiário, responsável pelo desenvolvimento de aplicações Web com Javascript, Php, Ajax, Jquery, Bootstrap e Mysql, realização de elaboração e manipulação de planilhas, elaboração de apresentações, criar documentação das aplicações e armazenar o código usando o GitLab."
        />
      </section>
    </Container>
  );
}

export default Experiencias;
