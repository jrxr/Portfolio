import { GetStaticPaths, GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { useRouter } from 'next/router';
import Head from 'next/head';
import BannerProjeto from '../../../components/BannerProjeto';
import Header from '../../../components/Header';
import { getPrismicClient } from '../../../services/prismic';
import { ProjetoContainer } from '../../../styles/ProjetoStyle';
import LoadingScreen from '../../../components/LoadingScreen';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: { url: string | undefined };
  github: { url: string };
  thumbnail: string | any;
}

interface ProjetoProps {
  projeto: IProjeto;
}

export default function Projeto({ projeto }: ProjetoProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <LoadingScreen />;
  }
  return (
    <ProjetoContainer>
      <Head>
        <title>{projeto.title} | Meu portfólio</title>
        <meta name="description" content={projeto.description} />
        <meta property="og:image" content={projeto.thumbnail} />
        <meta property="og:image:secure_url" content={projeto.thumbnail} />
        <meta name="twitter:image" content={projeto.thumbnail} />
        <meta name="twitter:image:src" content={projeto.thumbnail} />
        <meta property="og:description" content={projeto.description} />
      </Head>
      <Header />
      <BannerProjeto
        title={projeto.title}
        type={projeto.type}
        imgUrl={projeto.thumbnail}
      />
      <main>
        <p>{projeto.description}</p>

        {projeto.type === 'App' && projeto.link !== 'https://null' ? (
          <>
            <br />
            <p>
              Primeiramente antes de ver o aplicativo seu dispositivo precisa
              ter instalado o aplicativo chamado expo, segue abaixo os link das
              lojas pra download, assim que baixar o expo, acesse o aplicativo
              dessa página.
            </p>
            <br />
            <p>
              <a href="https://apps.apple.com/br/app/expo-go/id982107779">
                App Story
              </a>
              {'  '}|{'  '}
              <a href="https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR&gl=US">
                Play Store
              </a>
            </p>
          </>
        ) : (
          <></>
        )}
        {projeto.link !== 'https://null' ? (
          <button type="submit">
            <a href={`${projeto.link}`}>Ver projeto online</a>
          </button>
        ) : (
          <></>
        )}

        <button type="button">
          <a href={`${projeto.github}`}>Ver código projeto</a>
        </button>
      </main>
    </ProjetoContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const projetos = await prismic.query([
    Prismic.predicates.at('document.type', 'projeto')
  ]);

  const paths = projetos.results.map(projeto => ({
    params: {
      slug: projeto.uid
    }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params;

  const response = await prismic.getByUID<IProjeto>(
    'projeto',
    String(slug),
    {}
  );

  const projeto = {
    slug: response.uid,
    title: response.data.title,
    type: response.data.type,
    description: response.data.description,
    link: response.data.link.url,
    github: response.data.github.url,
    thumbnail: response.data.thumbnail.url
  };

  return {
    props: {
      projeto
    },
    revalidate: 86400
  };
};
