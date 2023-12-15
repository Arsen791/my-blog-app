import React, { Component } from 'react';
import './header.css';
import Home from '../home';
import ParentComponent from '../parentcomponent';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home' // Изначально устанавливаем домашнюю страницу
    };
  }

  // Функция для перехода на определенную страницу
  navigateTo = (page) => {
    this.setState({ currentPage: page }); // Обновляем состояние текущей страницы
  };

  // Функция для отображения содержимого страницы в зависимости от состояния
  renderPage = () => {
    const { currentPage } = this.state;
    if (currentPage === 'home') {
      return <Home />;
    } else if (currentPage === 'add') {
      return <ParentComponent />;
    }
    // Другие условия для отображения других компонентов в зависимости от страницы
    return null; // Здесь можно вернуть другие компоненты для других страниц
  };

  render() {
    return (
      <div>
        <header>
          <div className="logo">
            <button onClick={() => this.navigateTo('/')}>My Blog</button>
          </div>
          <nav>
            <ul className="nav-links">
              <li>
                <button onClick={() => this.navigateTo('home')}>Home</button>
              </li>
              <li>
                <button onClick={() => this.navigateTo('add')}>Add Post</button>
              </li>
              {/* Добавьте другие кнопки по мере необходимости */}
            </ul>
          </nav>
        </header>
        {this.renderPage()} {/* Отображение содержимого страницы */}
      </div>
    );
  }
}

