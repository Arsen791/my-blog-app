import React, { Component } from 'react';


export default class AddPostForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  title: '',
		  content: '',
		  tags: '',
		};
	  }
	
	  handleTitleChange = (event) => {
		this.setState({ title: event.target.value });
	  };
	
	  handleContentChange = (event) => {
		this.setState({ content: event.target.value });
	  };
	
	  handleTagsChange = (event) => {
		this.setState({ tags: event.target.value });
	  };
	
	  handleSubmit = (event) => {
		event.preventDefault();
		const { title, content, tags } = this.state;
		const newPost = {
		  title,
		  content,
		  tags: tags.split(',').map(tag => tag.trim()),
		};
		this.props.onAddPost(newPost);
	
		// Сохранение данных в localStorage
		const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
		const updatedPosts = [...savedPosts, newPost];
		localStorage.setItem('posts', JSON.stringify(updatedPosts));
	
		// Очистка формы после добавления статьи
		this.setState({
		  title: '',
		  content: '',
		  tags: '',
		});
	  };

  render() {
    const { title, content, tags } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Add New Post</h2>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleTitleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={this.handleContentChange}
            required
          />
        </div>
        <div>
          <label htmlFor="tags">Tags (separated by commas):</label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={this.handleTagsChange}
          />
        </div>
        <button type="submit">Add Post</button>
      </form>
    );
  }
}

