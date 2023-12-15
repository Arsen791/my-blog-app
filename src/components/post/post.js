import React, { useState } from 'react';
import SinglePost from '../singlepost';
import './post.css';

const PostList = () => {
    const [selectedPost, setSelectedPost] = useState(null);
  
    const togglePost = (postId) => {
        setSelectedPost(prevSelectedPost => 
          prevSelectedPost === postId ? null : postId
        );
      };
  
    // Пример данных для списка статей
    const posts = [
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
    ];
  
    return (
<table className="post-list">
      <thead>
        <tr>
          <th>Title</th>
          <th>Content</th>
          <th>Comments</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <React.Fragment key={post.id}>
            <tr className="post" onClick={() => togglePost(post.id)}>
              <td>{post.title}</td>
              <td>{post.content}</td>
              <td>{post.comments.join(', ')}</td>
            </tr>
            {/* Отображение отдельной статьи внутри элемента поста */}
            {selectedPost === post.id && (
              <tr className="selected-post">
                <td colSpan="3">
                  <SinglePost
                    title={post.title}
                    content={post.content}
                    comments={post.comments}
                  />
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
    );
  };
  
  export default PostList;