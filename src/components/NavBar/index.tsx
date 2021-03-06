import * as React from 'react';
// import { connect } from 'react-redux';
import { Button } from 'antd';

interface NavBarProps {
  isLoggedIn: boolean;
  User?: string;
}

interface NavBarState {}

export default class NavBar extends React.Component<NavBarProps, NavBarState> {
  public render(): JSX.Element {
    return (
      <header>
        <nav>
          <div className="logo">
            <img src="" alt="" className="s"/>
            <span className="name">Crawler Plus</span>
          </div>

          <div className="menu">
            <ul className="menu-wrapper">
              <li>Dashboard</li>
              <li>My Cases</li>
              <li>About Us</li>
            </ul>
          </div>

          <div className="actions">
            <Button type="primary">Add New Crawler</Button>
          </div>
        </nav>
      </header>
    );
  }
}

// export default connect(
//   (state) => ({
//     // Map state to props
//   }),
//   {
//     // Map dispatch to props
//   })(NavBar);
