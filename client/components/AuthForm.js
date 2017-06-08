import React, { PropTypes } from 'react'

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  renderErrors() {
    return this.props.errors.map((error, index) => {
      return (
        <li key={index}>
          {error}
        </li>
      )
    })
  }
  onSubmit(e){
    e.preventDefault();
    this.props.onSubmit(this.state);

  }
  render () {
    return (
      <div className="row">

        <form className="col s6" onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field col s12">
              <input
                placeholder="Email"
                type="email"
                onChange={(e) => this.setState({email: e.target.value})}
                value={ this.state.email }>
              </input>
          </div>
          <div className="input-field col s12">
              <input
                placeholder="Password"
                type="password"
                onChange={(e) => this.setState({password: e.target.value})}
                value={ this.state.password }>
              </input>
          </div>
          <div className="col s12">
            <ul className="errors">
              {this.renderErrors()}
            </ul>
          </div>
          <div className="input-field col s12">
            <button className="btn">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default AuthForm;
