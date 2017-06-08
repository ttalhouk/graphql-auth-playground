import React from 'react';
import {graphql} from 'react-apollo';
import {hashHistory} from 'react-router';


import AuthForm from './AuthForm';
import {login} from '../mutations/login';
import {currentUser} from '../queries/CurrentUser';


class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      errors: []
    }
  }

  componentWillUpdate(nextProps){
    // this.props is the old props prior to Update
    // nextProps is the new props that compoent will rerender with
    //console.log({old: this.props, update: nextProps});
    if (!this.props.data.currentUser && nextProps.data.currentUser ) {
      hashHistory.push('/dashboard');
    }
  }

  handleLogin({email, password}){
    this.props.mutate({
      variables:{
        email,
        password
      },
      refetchQueries: [{query: currentUser}]
    })
      .catch((err) => {
        const errors = err.graphQLErrors.map(error => error.message);
        this.setState({errors});
      })
  }
  render () {
    return(
      <div>
        <h3>Sign In</h3>
        <AuthForm onSubmit={this.handleLogin.bind(this)} errors={this.state.errors} />
      </div>
    )
  }
}

export default graphql(currentUser)(
  graphql(login)(LoginForm)
);
