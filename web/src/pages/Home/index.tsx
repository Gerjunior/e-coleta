import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Content, Main } from './styles';
import Button from '../../components/Button';

import logo from '../../assets/logo.svg';

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <header>
          <img src={logo} alt="Ecoleta" />
        </header>

        <Main>
          <h1>Seu marketplace de coleta de resíduos</h1>
          <p>
            Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
          </p>

          <Link to="/create-point" style={{ textDecoration: 'none' }}>
            <Button icon={FiLogIn} message="Cadastre um ponto de coleta" />
          </Link>
        </Main>
      </Content>
    </Container>
  );
};

export default Home;
