import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';

import {currentUser} from '../queries/CurrentUser';
import {logout} from '../mutations/logout';

class Header extends React.Component {
  handleLogout (e) {
    e.preventDefault();
    this.props.mutate({
      refetchQueries: [{ query: currentUser }]
    });

  }

  renderButtons () {
    const {loading, currentUser} = this.props.data;

    if (loading) { return <div />};

    if (currentUser) {
      return (
        <div>
          <li>
            <a onClick={this.handleLogout.bind(this)}>Log Out</a>
          </li>
        </div>)
    } else {
      return (
        <div>
          <li><Link to="/login">Sign In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </div>)
    }

  }

  render () {
    console.log(this.props);
    return(
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            <h4>
              GraphQL Sample Login
            </h4>
          </Link>
          <ul className="right">
            {this.renderButtons()}
          </ul>
        </div>
      </nav>
    )
  }
}

export default graphql(logout)(
  graphql(currentUser)(Header)
);
