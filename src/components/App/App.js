import React, { Component } from 'react';
import { func, array } from 'prop-types';
import logo from './logo.svg';
import wolf from './wolf.gif';
import './App.css';
import { connect } from 'react-redux';
import { setData } from '../../actions';
import { dataFetch } from '../../helpers/helper';
import CardContainer from '../CardContainer/CardContainer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoaded: false
    };
  }

  async componentDidMount() {
    await this.props.setData(await dataFetch());
    const isLoaded = !this.state.isLoaded;
    await this.setState({ isLoaded });
  }

  render() {
    const display = this.state.isLoaded 
      ? <CardContainer /> 
      : <img src={wolf} id='wolf' alt='running wolf'/>;

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
  houseData: array.isRequired,
  setData: func.isRequired
};

const mapStateToProps = ({ houseData }) => ({ houseData });
const mapDispatchToProps = dispatch => ({ 
  setData: (data) => dispatch(setData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
