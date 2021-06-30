import React, { Component } from 'react';
import { APP_NAME } from '../constants';
import NavBarItem from './NavBarItem';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { name: 'Listar consulta', href: '/', active: true },
        { name: 'Listar médicos', href: '/doctors', active: true },
        { name: 'Nova consulta', href: '/form', active: false },
        { name: 'Novo Cliente', href: '/form-client', active: false },
      ],
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(itemClicked) {
    const items = [...this.state.items];
    items.forEach((item) => {
      if (item.name === itemClicked.name) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
    this.setState({ items });
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="#">
                {APP_NAME}
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <div className="navbar-nav mr-auto">
                  {this.state.items.map((i) => (
                    <NavBarItem
                      key={i.name}
                      item={i}
                      onClick={this.onClickHandler}
                    />
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
