import React from 'react';
import SinglePost from './SinglePost';

const Postddata = () => {
  // Пример данных для отдельной статьи
  const postData = {
    title: 'Заголовок статьи',
    content: 'Содержание статьи...',
    comments: ['Комментарий 1', 'Комментарий 2', 'Комментарий 3']
    // Другая информация о статье
  };

  return (
    <div>
      <h1>Отдельная статья</h1>
      <SinglePost
        title={postData.title}
        content={postData.content}
        comments={postData.comments}
      />
    </div>
  );
};

export default Postddata;
