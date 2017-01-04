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
    this.guestLogin = this.guestLogin.bind(this);
  }

  redirect() {
    this.props.router.push('/');
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(
          () => this.redirect()
    );
  }

  handleInput(e) {
    const name = e.currentTarget.name;

    this.setState({
      [name]: e.currentTarget.value
    });
  }

  guestLogin() {
    const user = {email: 'jcarver@poker.com', password: 'jason1'};
    this.props.processForm(user).then(
          () => this.redirect()
    );
  }

  render() {
    // const loginErrors = this.props.errors[0] ?
    //   "Your login wasn't quite right... try again?" :
    //   null

    const loginErrors = () => {
      if (this.props.errors) {
        this.props.errors[0]
      }
    }

    return (
      <form className="login-form" onSubmit={this.handleSubmit}>

        <div className="login-input-group">
          <label htmlFor="email">Email</label>
          <input type="text" name="email"
              id="email"
              value={this.state.email}
              onChange={this.handleInput}
          />
          <div className="login-errors">
            {loginErrors}
          </div>
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

        <div className="login-input-group">
          <div className="guestlogin-btn" onClick={this.guestLogin}>
            Guest Acct
          </div>
        </div>
      </form>
    );
  }
}

export default SessionForm;
