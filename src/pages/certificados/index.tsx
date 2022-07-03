import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Header from '../../components/Header';
import { getPrismicClient } from '../../services/prismic';
import { CertificadosContainer } from '../../styles/CertificadosStyles';

import CertificadoItem from '../../components/CertificadoItem';

interface ICertificados {
  slug: string;
  title: string;
  type: string;
  thumbnail: string | any;
}

interface CertificadosProps {
  certificados: ICertificados[];
}

export default function Certificados({ certificados }: CertificadosProps) {
  return (
    <CertificadosContainer>
      <Head>
        <title>Certificados | Meu portfólio</title>
        <meta
          name="description"
          content="Aqui você encontra os meus certificados."
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Aqui você encontra os meus certificados."
        />
      </Head>

      <Header />
      <main className="container">
        {certificados.map(certificado => (
          <CertificadoItem
            key={certificado.slug}
            title={certificado.title}
            type={certificado.type}
            imgUrl={certificado.thumbnail}
          />
        ))}
      </main>
    </CertificadosContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query<ICertificados>(
    [Prismic.Predicates.at('document.type', 'certificados')],
    { orderings: '[document.first_publication_date]' }
  );

  const certificados = projectResponse.results.map(certificado => ({
    slug: certificado.uid,
    title: certificado.data.title,
    type: certificado.data.type,
    thumbnail: certificado.data.thumbnail.url
  }));

  return {
    props: {
      certificados
    },
    revalidate: 86400
  };
};
