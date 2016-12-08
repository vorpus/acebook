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
    this.props.processForm(user).then(
          () => this.redirect(), 
          () => console.log('errors')
    );
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
      <form className="login-form" onSubmit={this.handleSubmit}>

        <ul className="error-messages">
          {errors}
        </ul>

        <div className="login-input-group">
          <label htmlFor="email">Email</label>
          <input type="text" name="email"
              id="email"
              value={this.state.email}
              onChange={this.handleInput}
          />
        </div>

        <div className="login-input-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleInput}
          />
        </div>

        <div className="login-input-group submit">
          <div className="submitbtn">
            <button type="submit" name="submit">Log in</button>
          </div>
        </div>
      </form>
    );
  }
}

export default SessionForm;
