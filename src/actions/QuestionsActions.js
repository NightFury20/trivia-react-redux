import axios from 'axios';

import { FETCH_QUESTIONS_SUCCESS } from './types';

export const fetchQuestions = () => ((dispatch) => {
    const QuestionsURL = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple';
    axios.get(QuestionsURL)
        .then(responce => (
            dispatch({ type: FETCH_QUESTIONS_SUCCESS, payload: responce.data.results }))
        );
});

