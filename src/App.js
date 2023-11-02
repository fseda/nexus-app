import React, { useState } from 'react';
import './App.css';
import PostComponent from './components/Post';
import styled from 'styled-components';


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
      title: 'Janela Bar',
      address: 'Rua das Ondas, 123, Ipanema',
      postalCode: '22020-010',
      description: `O Janela sempre foi um lugar especial em Ipanema, com uma história peculiar que permanece viva nos corações dos moradores do bairro. A história começa há décadas, quando o bar era apenas uma modesta lanchonete à beira-mar.
      A fama do Janela cresceu, e com o tempo, atraiu turistas de todas as partes do mundo. Os músicos locais começaram a tocar bossa nova e samba no pequeno palco improvisado, e o Janela ganhou uma reputação como local de encontro para apreciar boa música e comida.`,
      imgUrl: "../public/assets/janela-bar.png",
      likes: 100,
      comments: 32,
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
      </Main>
    </div>
  );
}

export default App;
