
import React from 'react';
import {graphql} from 'react-apollo';
import {hashHistory} from 'react-router';

import AuthForm from './AuthForm';
import {signup} from '../mutations/signup';
import {currentUser} from '../queries/CurrentUser';



class SignupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      errors: []
    }
  }

  componentWillUpdate(nextProps){
    if (!this.props.data.currentUser && nextProps.data.currentUser ) {
      hashHistory.push('/dashboard');
    }
  }

  handleSignup({email, password}){
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
        <h3>Sign Up</h3>
        <AuthForm onSubmit={this.handleSignup.bind(this)} errors={this.state.errors} />
      </div>
    )
  }
}

export default graphql(currentUser)(
  graphql(signup)(SignupForm)
);
