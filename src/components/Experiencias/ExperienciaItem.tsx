import { ItemContainer } from './styles';

interface ExperienciaProps {
  company: string;
  year: string;
  title: string;
  description: string;
}

export default function ExperienciaItem({
  company,
  year,
  title,
  description
}: ExperienciaProps) {
  return (
    <ItemContainer data-aos="fade-up">
      <div>
        <h1>
          {company}
          <br />
          <p>{year}</p>
        </h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </ItemContainer>
  );
}
