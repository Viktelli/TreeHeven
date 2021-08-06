import Button from '../../components/Button';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Home() {
  const lista = ['a', 'b', 'c'];

  return (
    <Container>
      <h1>
        Home
      </h1>
      <ul>
        {lista.map(listItem => (
          <li>listItem</li>
        ))}
      </ul>
      <Button>Ola botao</Button>
      <Link to='dashboard'>Para outra pagina</Link>
    </Container>
  )
}