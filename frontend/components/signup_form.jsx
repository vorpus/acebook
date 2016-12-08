import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      secondemail: '',
      password: '',
      birthmonth: "-1",
      birthdate: "-1",
      birthyear: "-1",
      birthday: '',
      gender: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.setGender = this.setGender.bind(this);
  }

  redirect() {
    this.props.router.push('/');
  }

  handleSubmit(e) {
    e.preventDefault();



    const user = Object.assign({},
                                this.state,
                                {birthday: new Date(this.state.birthyear,
                                                    this.state.birthmonth,
                                                    this.state.birthdate)});

    if (this.state.birthyear === "-1" || this.state.birthmonth === "-1" || this.state.birthdate === "-1") {
      user.birthday = null;
      // return null;
    }

    if (this.state.email !== this.state.secondemail) {
      user.email = null;
    }

    console.log(user);
    this.props.processForm(user).then(() => this.redirect(), () => console.log('errors'));
  }

  handleInput(e) {
    const name = e.currentTarget.name;

    this.setState({
      [name]: e.currentTarget.value
    });
  }

  setGender(e) {
    this.setState({
      gender: e.target.value
    });
  }

  render() {
    const errorWarning = <i className="material-icons">warning</i>
    const firstnameErr = this.props.errors["firstname"] ? errorWarning : "";
    const lastnameErr = this.props.errors["lastname"] ? errorWarning : "";
    const genderErr = this.props.errors["gender"] ? errorWarning : "";
    const emailErr = this.props.errors["email"] ? errorWarning : "";
    const passwordErr = this.props.errors["password"] ? errorWarning : "";
    const birthdayErr = this.props.errors["birthday"] ? errorWarning : "";

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthPicker = months.map((mon, idx) => {
      return(
        <option key={idx} value={idx}>{mon}</option>
      );
    });

    const days = [];
    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }
    const dayPicker = days.map((day) => {
      return (
        <option key={day} value={day}>{day}</option>
      );
    });

    const years = [];
    for (let i = (new Date).getFullYear(); i >= 1905; i--) {
      years.push(i);
    }
    const yearPicker = years.map((year) => {
      return (
        <option key={year} value={year}>{year}</option>
      );
    });

    return (
      <section className="signup-form group">
        <h1>Sign Up</h1>
        <h3>It's free and always will be.</h3>
        <form className="signup-form" onSubmit={this.handleSubmit}>

        <div className="text-inputs group">
          <div className="input-container">
            <input type="text" name="firstname"
                value={this.state.firstname}
                onChange={this.handleInput}
                className="namehalf"
                placeholder="First name"
            />
            <div className="error-popup first-name-errors">{firstnameErr}</div>
          </div>

          <div className="input-container lastname-container">
          <input type="text" name="lastname"
              value={this.state.lastname}
              onChange={this.handleInput}
              className="namehalf"
              placeholder="Last name"
          />
          <div className="error-popup first-name-errors">{lastnameErr}</div>
          </div>

          <div className="input-container">
          <input type="text" name="email"
              value={this.state.email}
              onChange={this.handleInput}
              placeholder="Mobile number or email"
          />
          <div className="error-popup first-name-errors">{emailErr}</div>
          </div>

          <div className="input-container">
          <input type="text" name="secondemail"
              value={this.state.secondemail}
              onChange={this.handleInput}
              placeholder="Re-enter mobile number or email"
          />
          <div className="error-popup first-name-errors">{emailErr}</div>
          </div>

          <div className="input-container">
          <input type="password" name="password"
              value={this.state.password}
              onChange={this.handleInput}
              placeholder="New password"
          />
          <div className="error-popup first-name-errors">{passwordErr}</div>
          </div>
          </div>


          <h3>Birthday</h3>

          <div className="birthday group">
          <div className="input-container">
            <select name="birthmonth" onChange={this.handleInput}>
              <option value="-1">Month</option>
              {monthPicker}
            </select>
            <select name="birthdate" onChange={this.handleInput}>
              <option value="-1">Day</option>
              {dayPicker}
            </select>
            <select name="birthyear" onChange={this.handleInput}>
              <option value="-1">Year</option>
              {yearPicker}
            </select>
            <aside>
              <a href="#">Why do I need to provide my birthday?</a>
            </aside>
          </div>
          <div className="error-popup birthday-errors">{birthdayErr}</div>
          </div>


          <div name="gender" className="genderselect group" onChange={this.setGender}>
          <div className="input-container">
            <label>
            <input type="radio" name="gender" value="female"/> Female</label>
            <label>
            <input type="radio" name="gender" value="male"/> Male</label>
            </div>
            <div className="error-popup gender-errors">{genderErr}</div>
          </div>

          <div className="confirm">
            <aside>By clicking Sign Up, you agree to our <a href="#">Terms</a> and that you have read our <a href="#">Data Policy</a>, including our <a href="#">Cookie Use</a>.</aside>
            <div className="signup-button-container">
            <a href="#">
            <input className="signup-button" type="submit" value="Sign up" />
            </a>
            </div>
          </div>

      </form>
      </section>
    );
  }
}

export default SignupForm;
