import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaSwift, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';

import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ConhecimentoItem';

import { Container } from './styles';

function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title=" Conhecimentos" />
      <section>
        <ConhecimentoItem
          title="HTML"
          icon={<AiFillHtml5 className="htmlsvg" />}
        />
        <ConhecimentoItem title="CSS" icon={<FaCss3Alt className="csssvg" />} />
        <ConhecimentoItem
          title="JavaScript"
          icon={<IoLogoJavascript className="javascript" />}
        />
        <ConhecimentoItem title="React" icon={<FaReact className="react" />} />
        <ConhecimentoItem title="Swift" icon={<FaSwift className="swift" />} />
        <ConhecimentoItem title="NodeJS" icon={<FaNodeJs className="node" />} />
      </section>
    </Container>
  );
}

export default Conhecimentos;
