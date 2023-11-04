import React, { useState } from 'react';
import './App.css';
import PostComponent from './components/Post';
import styled from 'styled-components';
import Map from './components/Map';


const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 0 1rem;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #333;
  text-align: center;
`;

function App() {
  // Estado para as postagens
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
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Lorem Ipsum',
      address: 'Lorem Ipsum, 123, Lorem Ipsum',
      postalCode: '12345-678',
      likes: 420,
      comments: 69,
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Lorem Ipsum',
      address: 'Lorem Ipsum, 123, Lorem Ipsum',
      postalCode: '12345-678',
      likes: 420,
      comments: 69,
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Lorem Ipsum',
      address: 'Lorem Ipsum, 123, Lorem Ipsum',
      postalCode: '12345-678',
      likes: 420,
      comments: 69,
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Lorem Ipsum',
      address: 'Lorem Ipsum, 123, Lorem Ipsum',
      postalCode: '12345-678',
      likes: 420,
      comments: 69,
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Lorem Ipsum',
      address: 'Lorem Ipsum, 123, Lorem Ipsum',
      postalCode: '12345-678',
      likes: 420,
      comments: 69,
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Lorem Ipsum',
      address: 'Lorem Ipsum, 123, Lorem Ipsum',
      postalCode: '12345-678',
      likes: 420,
      comments: 69,
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Lorem Ipsum',
      address: 'Lorem Ipsum, 123, Lorem Ipsum',
      postalCode: '12345-678',
      likes: 420,
      comments: 69,
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Lorem Ipsum',
      address: 'Lorem Ipsum, 123, Lorem Ipsum',
      postalCode: '12345-678',
      likes: 420,
      comments: 69,
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Lorem Ipsum',
      address: 'Lorem Ipsum, 123, Lorem Ipsum',
      postalCode: '12345-678',
      likes: 420,
      comments: 69,
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Lorem Ipsum',
      address: 'Lorem Ipsum, 123, Lorem Ipsum',
      postalCode: '12345-678',
      likes: 420,
      comments: 69,
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
    {
      title: 'Lorem Ipsum',
      address: 'Lorem Ipsum, 123, Lorem Ipsum',
      postalCode: '12345-678',
      likes: 420,
      comments: 69,
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, accusamus! Cumque iure maxime architecto optio nam cum excepturi velit dicta nisi dignissimos, voluptate ipsa consequatur odio sed vero eveniet animi? Lorem ipsum dolor sit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio repellat velit unde quos molestias harum debitis illo nam incidunt hic consectetur veniam, voluptate molestiae omnis doloribus eius, neque distinctio?`,
    },
  ]);

  return (
    <div className="App">
      <Main>
        {posts.map((post, index) => (
          <PostComponent
            key={index}
            post={post}
          />
        ))}
        <Map /> {/* Adicione o componente Map aqui */}
      </Main>
    </div>
  );
}


export default App;
