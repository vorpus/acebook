import React from 'react';
import { Link } from 'react-router';

const Greeting = (props) => {

  const logged_in = () => {
    if (props.currentUser) {
      return (
        <div>
          Welcome {props.currentUser.username}
          <input type="button" value="sign out" onClick={log_out}/>
        </div>
      );
    } else {
      return (
        <div>
          Please <Link to='/login'>log in</Link>
        </div>
      );
    }
  };

  const log_out = () => {
    props.logout()
    props.router.push('/login')
  }
  // debugger

  return(
    <div>
      {logged_in()}
    </div>
  );
};

export default Greeting;
