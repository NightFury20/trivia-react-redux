import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchQuestions } from '../actions';

class PlayArea extends Component {
    componentWillMount() {
        this.props.fetchQuestions();
    }

    render() {
        const { questions } = this.props;
        console.log(questions);

        if (questions.length === 0) {
            return (
                <div className='container mt-5'>
                    <div className='row justify-content-center'>
                        <h2>Loading...</h2>
                    </div>
                </div>
            );
        }

        return (
            <div className='container mt-5'>
                <div className='row justify-content-center'>
                    <button
                        className='btn btn-lg btn-primary'
                    >
                        Start
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({ questions: state.questions.questions });

export default connect(mapStateToProps, { fetchQuestions })(PlayArea);
