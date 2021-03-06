import React, { Component } from 'react';
import { APP_NAME } from '../constants';
import NavBarItem from './NavBarItem';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { name: 'consultas', href: '/appointments', active: false },
        { name: 'médicos', href: '/doctors', active: false },
        { name: 'clientes', href: '/list-customers', active: false },
        { name: '+ Consulta', href: '/form-appointment', active: false },

        { name: '+ Médico', href: '/doctor-form', active: false },
        { name: '+ Cliente', href: '/form-client', active: false },
        { name: '+ Usuário', href: '/user-form', active: false },
        { name: 'Login', href: '/', active: false },
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
