import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';

import theme from '../../styles/theme';
import { FormContainer, Input, TextArea } from './styles';

export default function Form() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!nome || !email || !mensagem) {
      toast('Preencha todos os campos para enviar sua mensagem!', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
      return;
    }
    const url = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK;

    const messageData = {
      embeds: [
        {
          title: 'Nova mensagem',
          color: 3447003,
          fields: [
            {
              name: 'Nome',
              value: nome,
              inline: true
            },
            {
              name: 'E-mail',
              value: email,
              inline: true
            },
            {
              name: 'Mensagem',
              value: mensagem
            }
          ]
        }
      ]
    };

    try {
      setLoading(true);
      await axios.post(url, messageData);
      setNome('');
      setEmail('');
      setMensagem('');

      toast('Mensagem enviada com sucesso!', {
        style: {
          background: theme.success,
          color: '#fff'
        }
      });
    } catch (error) {
      toast('Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <FormContainer data-aos="fade-up" onSubmit={handleSubmit}>
      <Input
        placeholder="Nome"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <Input
        placeholder="E-mail"
        type="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <TextArea
        placeholder="Mensagem"
        value={mensagem}
        onChange={({ target }) => setMensagem(target.value)}
      />
      <button type="submit" disabled={loading}>
        ENVIAR
      </button>
    </FormContainer>
  );
}
