import React, { Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header';
import PerformancePage from './components/PerformancePage/PerformancePage';
import LoadingPage from './containers/LoadingPage/LoadingPage';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import {
        Switch,
        Route  } from 'react-router-dom';
import Home from './pages/Home';

const App = (props) => {
  return (
      <div className="App">
        <Switch>
          <Route path="/stock">
            {props.loading ? <LoadingPage /> : <Fragment><Header /><PerformancePage /></Fragment>}
          </Route>
          <Route path="/">
            {props.loading ? <LoadingPage /> : <Home />}
          </Route>
        </Switch>
      </div>
  );
}

const mapStateToProps = (state) => {
  return {
    search_text: state.search_text,
    loading: state.loading
  }
}

export default withRouter(connect(mapStateToProps)(App));
