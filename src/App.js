import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import { FooterButton } from './components/FooterButton';
import { Footer, Header } from './components/Layout';
import MenuComponent from './components/MenuComponent';
import PostComponent from './components/Post';
import SearchBar from './components/SearchBar';
import NotFound from './components/NotFound';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Main = styled.main`
  margin: 0 auto;

  display: grid;
  grid-gap: 20px; 
  padding: 20px;
  justify-items: center;
  
  background-color: #fff;
  padding: 4rem 1rem;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #333;
  text-align: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FadeTransition = styled.div`
  &.fade-enter, &.fade-exit {
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 300ms, transform 300ms;
  }

  &.fade-enter-active, &.fade-exit-done {
    opacity: 1;
    transform: translateY(0);
  }
`;

function App() {
  const [search, setSearch] = useState('');

  const [posts, setPosts] = useState([
    {
      title: 'Centro Cultural da Justiça Federal (CCJF)',
      address: 'Av. Rio Branco, 241 - Centro',
      postalCode: '20040-009',
      description: `Um dos destaques do Centro do Rio de Janeiro e do Tour Prédios Antigos da Cinelândia é o Centro Cultural da Justiça Federal (CCJF), que ocupa o prédio da antiga sede do Supremo Tribunal Federal.
      `,
      imgUrl: "centro.png",
      likes: 397,
      comments: 62,
      coordinates: [-22.9106518, -43.1754904,21],
      additionalPhotos: [
        'centro.png',
        'centro.png',
        'centro.png',
        'centro.png',
      ]
    },
    {
      title: 'Edifício Atlântica Boavista',
      address: 'Rua Prudente de Morais, 630 - Ipanema',
      postalCode: '22420-040',
      imgUrl: "edificioipanema.png",
      likes: 420,
      comments: 99,
      coordinates: [-22.985298, -43.202795],
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum in quia facere numquam delectus dolorum, rem inventore molestias velit cum beatae non debitis, quisquam, et facilis deleniti nemo ad officia. Cum sociis natoque penatibus et justo consequ  atur magnis dis parturient montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio. Morbi nunc odio, gravida at, cursus nec, luctus a, lorem. Maecenas tristique orci ac sem. Duis ultricies pharetra magna. Donec accumsan malesuada orci. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit.`,
    },
    {
      title: 'Casa Eva Klabin',
      address: 'Avenida Epitácio Pessoa, 2480, Lagoa',
      postalCode: '22471-000',
      imgUrl: 'janela-bar.png',
      likes: 420,
      comments: 69,
      coordinates: [-22.952075, -43.338358],
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Edifício Alagoas',
      address: 'Rua Ministro Viveiros de Castro, 122, Copacabana',
      postalCode: '22021-010',
      imgUrl: 'janela-bar.png',
      likes: 420,
      comments: 69,
      coordinates: [-22.952075, -43.338358],
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Igreja de Nossa Senhora da Lapa dos Mercadores',
      address: 'Rua do Ouvidor, 35, Centro',
      postalCode: '20010-150',
      imgUrl: 'janela-bar.png',
      likes: 420,
      comments: 69,
      coordinates: [-22.952075, -43.338358],
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Sobrado da Cidade',
      address: 'Rua do Rosário, 34, Centro',
      postalCode: '20041-000',
      imgUrl: 'janela-bar.png',
      likes: 420,
      comments: 69,
      coordinates: [-22.952075, -43.338358],
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Edifício Colonial',
      address: 'Rua Nascimento Silva, 378, Ipanema',
      postalCode: '22421-025',
      imgUrl: 'janela-bar.png',
      likes: 420,
      comments: 69,
      coordinates: [-22.952075, -43.338358],
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Churrascaria Palace',
      address: 'Rua Rodolfo Dantas, 16, Copacabana',
      postalCode: '22020-040',
      imgUrl: 'janela-bar.png',
      likes: 420,
      comments: 69,
      coordinates: [-22.952075, -43.338358],
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Edifício Manhattan',
      address: 'Avenida Atlântica, 632, Copacabana',
      postalCode: '22010-000',
      imgUrl: 'janela-bar.png',
      likes: 420,
      comments: 69,
      coordinates: [-22.952075, -43.338358],
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Edifício Estrela',
      address: 'Rua Visconde de Pirajá, 336, Ipanema',
      postalCode: '22410-003',
      imgUrl: 'janela-bar.png',
      likes: 420,
      comments: 69,
      coordinates: [-22.952075, -43.338358],
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Museu Carmen Miranda',
      address: 'Avenida Rui Barbosa, em frente ao número 560, Flamengo',
      postalCode: ' 22250-020',
      imgUrl: 'janela-bar.png',
      likes: 420,
      comments: 69,
      coordinates: [-22.952075, -43.338358],
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Instituto Brando Barbosa',
      address: 'Rua Lopes Quintas, 497, Jardim Botânico',
      postalCode: ' 22250-020',
      imgUrl: 'janela-bar.png',
      likes: 420,
      comments: 69,
      coordinates: [-22.952075, -43.338358],
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Edifício Fonseca e Silva',
      address: 'Rua Alberto de Campos, 217, Ipanema',
      postalCode: '22411-030',
      imgUrl: 'janela-bar.png',
      likes: 420,
      comments: 69,
      coordinates: [-22.952075, -43.338358],
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
  ]);

  function handleSearch(event) {
    const value = event.target.value.toLowerCase();
    setSearch(value);
  }

  const filteredPosts = posts
    .filter(post => post.title.toLowerCase().includes(search))
    .map((post, index) => (
      <FadeTransition as={CSSTransition} key={index} timeout={300} classNames="fade">
        <PostComponent
          key={index}
          post={post}
        />
      </FadeTransition>
  ));
    
  return (
    <div className="App">
      <Header>
        <MenuComponent/>
        <SearchBar
          type="text"
          placeholder="Pesquise aqui"
          value={search}
          onChange={handleSearch}
        />
      </Header>
      <Main>
        <TransitionGroup component={null}>
          {filteredPosts.length > 0 ? 
            filteredPosts : 
            <FadeTransition as={CSSTransition} timeout={300} classNames="fade">
              <NotFound message="Não há histórias encontradas."/>
           </FadeTransition>
          }
        </TransitionGroup>
      </Main>
      <Footer>
          <FooterButton>
            <img src="/assets/favorites.png" alt="favorites" />
            <small>FAVORITOS</small>
          </FooterButton>
          <FooterButton>
            <img src="/assets/anuncios.png" alt="favorites" />
            <small>ANÚNCIOS</small>
          </FooterButton>
          <FooterButton>
            <img src="/assets/minha-conta.png" alt="favorites" />
            <small>MINHA CONTA</small>
          </FooterButton>
      </Footer>
    </div>
  );
}


export default App;
