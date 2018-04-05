import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlayArea extends Component {
    renderAnswerBtns() {
        const { currentQuestion } = this.props;
        let answers = currentQuestion.incorrect_answers;
        answers.push(currentQuestion.correct_answer);

        answers = shuffle(answers);

        return answers.map(i => (
            <div key={i} className='row justify-content-center pt-3'>
                <input type='button' className='btn btn-lg btn-default' value={i} />
            </div>
        ));        
    }

    render() {
        const { currentQuestion } = this.props;
        console.log(this.props);

        return (
            <div className='container mt-5'>
                <div className='row justify-content-center'>
                    <h2>{currentQuestion.question}</h2>
                </div>
                {this.renderAnswerBtns()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    questionsArray: state.redux.questionsArray,
    currentQuestion: state.redux.currentQuestion
});

export default connect(mapStateToProps)(PlayArea);

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
