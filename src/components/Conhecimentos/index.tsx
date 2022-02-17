import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaSwift, FaJava } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';

import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ConhecimentoItem';

import { Container } from './styles';

function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title=" Conhecimentos" />
      <section>
        <ConhecimentoItem title="HTML" icon={<AiFillHtml5 />} />
        <ConhecimentoItem title="CSS" icon={<FaCss3Alt />} />
        <ConhecimentoItem title="JavaScript" icon={<IoLogoJavascript />} />
        <ConhecimentoItem title="React" icon={<FaReact />} />
        <ConhecimentoItem title="Swift" icon={<FaSwift />} />
        <ConhecimentoItem title="Java" icon={<FaJava />} />
      </section>
    </Container>
  );
}

export default Conhecimentos;
