import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Header from '../../components/Header';
import ProjetoItem from '../../components/ProjetoItem';
import { getPrismicClient } from '../../services/prismic';
import { ProjetosContainer } from '../../styles/ProjetosStyles';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjetoProps {
  projetos: IProjeto[];
}

export default function Projetos({ projetos }: ProjetoProps) {
  return (
    <ProjetosContainer>
      <Head>
        <title>Projetos | Meu portfólio</title>
        <meta name="description" content="Projetos desenvolvidos por mim!" />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Projetos desenvolvidos por mim!"
        />
      </Head>

      <Header />
      <main className="container">
        {projetos.map(projeto => (
          <ProjetoItem
            key={projeto.slug}
            title={projeto.title}
            type={projeto.type}
            slug={projeto.slug}
            imgUrl={projeto.thumbnail}
          />
        ))}
      </main>
    </ProjetosContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'pro')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const projetos = projectResponse.results.map(projeto => ({
    slug: projeto.uid,
    title: projeto.data.title || null,
    type: projeto.data.type || null,
    description: projeto.data.description || null,
    link: projeto.data.link.url || null,
    thumbnail: projeto.data.thumbnail.url || null
  }));

  return {
    props: {
      projetos
    },
    revalidate: 86400
  };
};
