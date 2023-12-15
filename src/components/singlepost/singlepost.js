import React from 'react';

const SinglePost = ({ title, content, comments }) => {
  return (
    <div className="single-post">
      <h2>{title}</h2>
      <p>{content}</p>
      <h3>Comments:</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      {/* Другая информация о статье */}
    </div>
  );
};

export default SinglePost;
