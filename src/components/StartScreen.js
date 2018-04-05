import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startGame } from '../actions';

class StartScreen extends Component {
    render() {
        return (
            <div className='container mt-5'>
                <div className='row justify-content-center'>
                    <button
                        className='btn btn-lg btn-primary'
                        onClick={() => this.props.startGame()}
                    >
                        Start
                    </button>
                </div>
            </div>
        );
    }
}

export default connect(null, { startGame })(StartScreen);
