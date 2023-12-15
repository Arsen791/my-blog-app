import React, { Component } from 'react';
import AddPostForm from '../addpostform';

class ParentComponent extends Component {
  // Функция для добавления статьи
  onAddPost = (newPost) => {
    // Реализация логики добавления статьи
    console.log('Добавлена новая статья:', newPost);
  };

  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        {/* Передача функции onAddPost через props */}
        <AddPostForm onAddPost={this.onAddPost} />
      </div>
    );
  }
}


export default ParentComponent;