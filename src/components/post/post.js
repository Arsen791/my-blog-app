import React from 'react';
import './post.css';

const PostList = ({ postsData }) => {
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
        {postsData.map((post) => (
          <tr key={post.id} className="post">
            <td>{post.title}</td>
            <td>{post.content}</td>
            <td>{post.comments.join(', ')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PostList;
