import { useState } from 'react';
import axios from 'axios';

interface IMessage {
  to: string;
  subject: string;
  body: string;
  name: string
}

export function App() {
  const [message, setMessage] = useState<IMessage>({
    to: '',
    subject: '',
    body: '',
    name:''
    
  });

  async function handleSendEmail() {
    try {
      await axios.post('http://localhost:3333/send-email', message);

      setMessage({
        to: '',
        subject: '',
        body: '',
        name:''
      });

      alert('E-mail enviado com sucesso!');
      console.log(message)
    } catch (error) {
      alert('Erro ao enviar o e-mail.');
    }
  }

  return (
    <div>
       <input
        type="text"
        placeholder="Seu nome"
        value={message.name}
        onChange={(event) =>
          setMessage({ ...message, name: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Destinatário"
        value={message.to}
        onChange={(event) =>
          setMessage({ ...message, to: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Assunto"
        value={message.subject}
        onChange={(event) =>
          setMessage({ ...message, subject: event.target.value })
        }
      />
      <textarea
        placeholder="Mensagem"
        value={message.body}
        onChange={(event) =>
          setMessage({ ...message, body: event.target.value })
        }
      />

      <button onClick={handleSendEmail}>Enviar</button>
    </div>
  );
}