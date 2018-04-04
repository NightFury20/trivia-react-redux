import {
    FETCH_QUESTIONS_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    questions: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_QUESTIONS_SUCCESS:
            return { ...state, questions: action.payload };
        default:
            return state;
    }
};
