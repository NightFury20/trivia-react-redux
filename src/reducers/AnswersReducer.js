import {
    ANSWER_QUESTION
} from '../actions/types';

const INITIAL_STATE = {
    answers: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ANSWER_QUESTION:
            return { ...state, answers: action.payload };
        default:
            return state;
    }
};
