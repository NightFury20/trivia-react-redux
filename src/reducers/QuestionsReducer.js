import {
    FETCH_QUESTIONS_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    questionsArray: [],
    currentQuestion: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_QUESTIONS_SUCCESS:
            return { ...state, questionsArray: action.payload, currentQuestion: action.payload[0] };
        default:
            return state;
    }
};
