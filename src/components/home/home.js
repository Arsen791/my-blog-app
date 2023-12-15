import React, { useState } from 'react';
import PostList from '../post';
import AddPostForm from '../addpostform';
import ErrorBoundary from '../errorboundry';

const Home = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Post 1',
      content: 'Content of Post 1...',
      comments: ['Comment 1']
    },
    {
      id: 2,
      title: 'Post 2',
      content: 'Content of Post 2...',
      comments: ['Comment 1']
    },
    // Другие посты...
  ]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (postId) => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
  };

  return (
    <div>
      <h1>Домашняя страница блога</h1>
      <PostList postsData={posts}  onDeletePost={deletePost} />

      {/* Форма для добавления новой статьи */}
      <ErrorBoundary>
      <AddPostForm onAddPost={addPost} />
</ErrorBoundary>

      
    </div>
  );
};

export default Home;
