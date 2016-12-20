import React from 'react';
import { Link, withRouter } from 'react-router';

class Greeting extends React.Component {

  constructor(props){
    super(props);
  }


  render () {
    if (this.props.currentUser) {
      return (
        <div>
          <h2>Welcome {this.props.currentUser.username}!</h2>
          <button onClick={this.props.logout}>Sign Out</button>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Not signed in</h2>
          <Link to='/login'>Sign In</Link>
          <br/>
          <Link to='/signup'>Sign Up</Link>
        </div>

      );
    }
  }
}

export default Greeting;
