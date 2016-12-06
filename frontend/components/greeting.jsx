import React from 'react';
import { Link } from 'react-router';

const Greeting = (props) => {

  const logged_in = () => {
    if (props.currentUser) {
      return (
        <div>
          Welcome {props.currentUser.username}
          <input type="button" value="sign out" onClick={props.logout}/>
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
  // debugger

  return(
    <div>
      {logged_in()}
    </div>
  );
};

export default Greeting;
