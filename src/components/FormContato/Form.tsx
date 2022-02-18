import { FormEvent, useState } from 'react';
import { FormContainer, Input, TextArea } from './styles';

export default function Form() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <FormContainer data-aos="fade-up" onSubmit={handleSubmit}>
      <Input
        placeholder="Nome"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
        required
      />
      <Input
        placeholder="E-mail"
        type="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        required
      />
      <TextArea
        placeholder="Mensagem"
        value={mensagem}
        onChange={({ target }) => setMensagem(target.value)}
        required
      />
      <button type="submit">Enviar</button>
    </FormContainer>
  );
}
