import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import wolf from './wolf.gif';
import './App.css';
import { connect } from 'react-redux';
import { fetchData } from '../../actions';
import { dataFetch } from '../../helpers/helper';
import CardContainer from '../CardContainer/CardContainer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoaded: false
    }
  }

  async componentDidMount() {
    await this.props.fetchData(await dataFetch());    
  }

  render() {
    const display = this.state.isLoaded 
      ? <CardContainer /> 
      : <img src={wolf} id='wolf' alt='running wolf'/>

    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          {display}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  data: shape({ data: 'object' }),
  fetchData: func.isRequired
};

const mapStateToProps = ({ data }) => ({ data });
const mapDispatchToProps = dispatch => ({ 
  fetchData: (data) => dispatch(fetchData(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
