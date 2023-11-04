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
  display: flex;
  flex-direction: column;
  align-items: center;
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
    },
    {
      title: 'Edifício Atlântica Boavista',
      address: 'Rua Prudente de Morais, 630 - Ipanema',
      postalCode: '22420-040',
      imgUrl: "edificioipanema.png",
      likes: 420,
      comments: 99,
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum in quia facere numquam delectus dolorum, rem inventore molestias velit cum beatae non debitis, quisquam, et facilis deleniti nemo ad officia. Cum sociis natoque penatibus et justo consequ  atur magnis dis parturient montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio. Morbi nunc odio, gravida at, cursus nec, luctus a, lorem. Maecenas tristique orci ac sem. Duis ultricies pharetra magna. Donec accumsan malesuada orci. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit.`,
    },
    {
      title: 'Lorem Ipsum',
      address: 'Lorem Ipsum, 123, Lorem Ipsum',
      postalCode: '12345-678',
      likes: 420,
      comments: 69,
      imgUrl: 'janelar-bar.png',
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Lorem Ipsum',
      address: 'Lorem Ipsum, 123, Lorem Ipsum',
      postalCode: '12345-678',
      likes: 420,
      comments: 69,
      imgUrl: 'janelar-bar.png',
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Lorem Ipsum',
      address: 'Lorem Ipsum, 123, Lorem Ipsum',
      postalCode: '12345-678',
      likes: 420,
      comments: 69,
      imgUrl: 'janelar-bar.png',
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Lorem Ipsum',
      address: 'Lorem Ipsum, 123, Lorem Ipsum',
      postalCode: '12345-678',
      likes: 420,
      comments: 69,
      imgUrl: 'janelar-bar.png',
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Lorem Ipsum',
      address: 'Lorem Ipsum, 123, Lorem Ipsum',
      postalCode: '12345-678',
      likes: 420,
      comments: 69,
      imgUrl: 'janelar-bar.png',
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Lorem Ipsum',
      address: 'Lorem Ipsum, 123, Lorem Ipsum',
      postalCode: '12345-678',
      likes: 420,
      comments: 69,
      imgUrl: 'janelar-bar.png',
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Lorem Ipsum',
      address: 'Lorem Ipsum, 123, Lorem Ipsum',
      postalCode: '12345-678',
      likes: 420,
      comments: 69,
      imgUrl: 'janelar-bar.png',
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Lorem Ipsum',
      address: 'Lorem Ipsum, 123, Lorem Ipsum',
      postalCode: '12345-678',
      likes: 420,
      comments: 69,
      imgUrl: 'janelar-bar.png',
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Lorem Ipsum',
      address: 'Lorem Ipsum, 123, Lorem Ipsum',
      postalCode: '12345-678',
      likes: 420,
      comments: 69,
      imgUrl: 'janelar-bar.png',
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Lorem Ipsum',
      address: 'Lorem Ipsum, 123, Lorem Ipsum',
      postalCode: '12345-678',
      likes: 420,
      comments: 69,
      imgUrl: 'janelar-bar.png',
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Lorem Ipsum',
      address: 'Lorem Ipsum, 123, Lorem Ipsum',
      postalCode: '12345-678',
      likes: 420,
      comments: 69,
      imgUrl: 'janelar-bar.png',
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
      <Main>
        <Header>
          <MenuComponent/>
          <SearchBar
            type="text"
            placeholder="Pesquise aqui"
            value={search}
            onChange={handleSearch}
          />
        </Header>
        <TransitionGroup component={null}>
          {filteredPosts.length > 0 ? 
            filteredPosts : 
            <FadeTransition as={CSSTransition} timeout={300} classNames="fade">
              <NotFound message="Não há histórias encontradas."/>
           </FadeTransition>
          }
        </TransitionGroup>
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
      </Main>
    </div>
  );
}

export default App;
