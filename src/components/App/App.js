import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchData } from '../../actions';
class App extends Component {
  componentDidMount() {
    // this.props.fetchData();
    // alert(this.props.fake);
    
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          <button onClick={() => {
            this.props.fetchData('data');
          }}> Fetch </button>
        </div>
        <div className='Display-info'>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  data: shape({ data: string }),
  fetchData: func.isRequired
};

const mapStateToProps = ({ data }) => ({ data });
const mapDispatchToProps = dispatch => ({ 
  fetchData: (data) => dispatch(fetchData(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
