import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchQuestions } from '../actions';

import Header from './Header';
import StartScreen from './StartScreen';
import PlayArea from './PlayArea';

class App extends Component {
  componentWillMount() {
    this.props.fetchQuestions();
  }

  gameScreenController() {
    const { gameMode } = this.props;

    if (gameMode === 'ready') {
      return (
        <StartScreen />
      );
    }

    if (gameMode === 'playing') {
      return (
        <PlayArea />
      );
    }

    if (!gameMode) {
      return (
        <div className='container mt-5'>
              <div className='row justify-content-center'>
                  Loading...
              </div>
          </div>
      );
    }
  }
  
  render() {
    return (
      <div>
        <Header />

        {this.gameScreenController()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gameMode: state.redux.gameMode
});

export default connect(mapStateToProps, { fetchQuestions })(App);
