import {
    ANSWER_QUESTION
} from '../actions/types';

const INITIAL_STATE = {
    answersArray: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ANSWER_QUESTION:
            return { ...state, answersArray: action.payload };
        default:
            return state;
    }
};
