import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import {hashHistory} from 'react-router';

import {currentUser} from '../queries/CurrentUser';

export default (WrappedComponent) => {
  class RequireAuth extends Component {
    componentWillUpdate(nextProps) {
      if (!nextProps.data.loading && !nextProps.data.currentUser) {
        hashHistory.push('/login');
      }
    }
    render(){
      return <WrappedComponent { ...this.props } />;
    }
  }

  return graphql(currentUser)(RequireAuth);
}
