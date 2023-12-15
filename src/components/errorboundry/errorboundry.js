import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // Обрабатываем ошибку здесь, например, логируем её
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    // Можем также обновить состояние, чтобы показать информацию об ошибке
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // Возвращаем заместительный UI, если произошла ошибка
      return <h1>Something went wrong...</h1>;
    }
    // Отображаем дочерние компоненты, если ошибок нет
    return this.props.children;
  }
}

export default ErrorBoundary;
