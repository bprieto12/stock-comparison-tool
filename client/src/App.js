import React, { Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header';
import PerformancePage from './components/PerformancePage/PerformancePage';
import LoadingPage from './containers/LoadingPage/LoadingPage';
import { connect } from 'react-redux';


const App = (props) => {
  return (
    <div className="App">
      {props.loading ? <LoadingPage /> : <Fragment><Header /><PerformancePage /></Fragment>}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    search_text: state.search_text,
    loading: state.loading
  }
}

export default connect(mapStateToProps)(App);
