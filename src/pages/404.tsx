import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container } from '../styles/404Page';
import PageError from '../assets/404page.png';

export default function Page404() {
  const router = useRouter();

  return (
    <Container>
      <img src={PageError} alt="Erro 404" />
      <p>Parece que essa página não existe</p>
      <button onClick={() => router.push('/')}>Voltar ao início</button>
    </Container>
  );
}
