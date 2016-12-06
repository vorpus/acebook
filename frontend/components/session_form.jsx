import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  redirect() {
    this.props.router.push('/');
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.redirect(), () => console.log('errors'));
  }

  handleInput(e) {
    const name = e.currentTarget.name;

    this.setState({
      [name]: e.currentTarget.value
    });
  }

  render() {
    const errors = this.props.errors.map((err, idx) => {
        return (
          <li key={idx}>{err}</li>
        );
    });
    return (
      <form className="session-form" onSubmit={this.handleSubmit}>
        <ul className="error-messages">
          {errors}
        </ul>
        <label>Email
          <input type="text" name="email"
              value={this.state.email}
              onChange={this.handleInput}
          />
        </label>
        <br/>

        <label>Password
          <input type="password" name="password"
              value={this.state.password}
              onChange={this.handleInput}
          />
        </label>
        <br/>

        <input type="submit" value="Log In" />
      </form>
    );
  }
}

export default SessionForm;
