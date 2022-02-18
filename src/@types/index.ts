export interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

export interface HomeProps {
  projetos: IProjeto[];
}
