import Header from '../../components/Header';
import ProjetoItem from '../../components/ProjetoItem';

import { ProjetosContainer } from '../../styles/ProjetosStyles';

export default function Projetos() {
  return (
    <ProjetosContainer>
      <Header />
      <main className="container">
        <ProjetoItem
          title="Projeto 1"
          type="Projeto Teste"
          slug="teste"
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsHLGss3WqjScFBetHI_NoW8DZzYSwdOGveQ&usqp=CAU"
        />
        <ProjetoItem
          title="Projeto 1"
          type="Projeto Teste"
          slug="teste"
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsHLGss3WqjScFBetHI_NoW8DZzYSwdOGveQ&usqp=CAU"
        />
        <ProjetoItem
          title="Projeto 1"
          type="Projeto Teste"
          slug="teste"
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsHLGss3WqjScFBetHI_NoW8DZzYSwdOGveQ&usqp=CAU"
        />
        <ProjetoItem
          title="Projeto 1"
          type="Projeto Teste"
          slug="teste"
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsHLGss3WqjScFBetHI_NoW8DZzYSwdOGveQ&usqp=CAU"
        />
      </main>
    </ProjetosContainer>
  );
}
