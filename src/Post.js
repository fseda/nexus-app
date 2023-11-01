import React from 'react';

const Post = ({ username, caption, imageUrl }) => {
  return (
    <div className="post">
      <h3 className="post__username">{username}</h3>
      <img className="post__image" src={imageUrl} alt="Post" />
      <p className="post__caption">{caption}</p>
      {/* Adicione botões para curtir, comentar, etc. aqui */}
    </div>
  );
};

export default Post;
