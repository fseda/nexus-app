import React, { useState } from 'react';
import './App.css';
import Map from './Map';
import Post from './Post';

function App() {
  // Estado para as postagens
  const [posts, setPosts] = useState([
    {
      username: 'user1',
      caption: 'Legenda da postagem 1',
      imageUrl: 'URL_da_imagem_1',
    },
    {
      username: 'user2',
      caption: 'Legenda da postagem 2',
      imageUrl: 'URL_da_imagem_2',
    },
    // Adicione mais postagens conforme necessário
  ]);

  return (
    <div className="App">
      <Map />
      <div className="app__posts">
      {posts.map((post, index) => (
  <Post
    key={index}
    username={post.username}
    caption={post.caption}
    imageUrl={post.imageUrl}
  />
))}

      </div>
    </div>
  );
}

export default App;
