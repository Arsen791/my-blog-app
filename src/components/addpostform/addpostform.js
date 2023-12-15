import React, { Component } from 'react';
import './addpostform.css';

export default class AddPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      comments: '',
    };
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  handleContentChange = (event) => {
    this.setState({ content: event.target.value });
  };

  handleCommentsChange = (event) => {
    this.setState({ comments: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, content, comments } = this.state;
    const newPost = {
      title,
      content,
      comments: comments.split(',').map(comment => comment.trim()),
    };
    this.props.onAddPost(newPost);

    // Очистка формы после добавления статьи
    this.setState({
      title: '',
      content: '',
      comments: '',
    });
  };

  render() {
    const { title, content, comments } = this.state;

    return (
		
			<form className="item-add-form" onSubmit={this.handleSubmit}>
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
				<label htmlFor="comments">Comments:</label>
				<input
				  type="text"
				  id="comments"
				  value={comments}
				  onChange={this.handleCommentsChange}
				/>
			  </div>
			  <button type="submit">Add Post</button>
			</form>
    );
  }
}
