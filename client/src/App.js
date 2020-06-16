import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import PerformancePage from './components/PerformancePage/PerformancePage';
import { connect } from 'react-redux';

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <PerformancePage />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    search_text: state.search_text
  }
}

export default connect(mapStateToProps, )(App);
