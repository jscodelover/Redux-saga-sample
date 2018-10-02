import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreator from './store/actions';

class App extends Component {
  componentDidMount(){
    this.props.request_hello();
  }
  render() {
    return (
      <ul>
        {
          this.props.msg ? 
            this.props.msg.map( print => {
              return <li key={print.id}>{print.title}</li>
            })
          :
            null  
        }
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return{
    msg : state.display
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    request_hello : () => dispatch(actionCreator.req_hello())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
