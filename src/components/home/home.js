import React, { useState } from 'react';
import PostList from '../post';
import AddPostForm from '../addpostform';

const Home = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Post 1',
      content: 'Content of Post 1...',
      comments: ['Comment 1', 'Comment 2']
    },
    {
      id: 2,
      title: 'Post 2',
      content: 'Content of Post 2...',
      comments: ['Comment 1', 'Comment 2', 'Comment 3']
    },
    // Другие посты...
  ]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <h1>Домашняя страница блога</h1>
      <PostList postsData={posts} />

      {/* Форма для добавления новой статьи */}
      <AddPostForm onAddPost={addPost} />
    </div>
  );
};

export default Home;
