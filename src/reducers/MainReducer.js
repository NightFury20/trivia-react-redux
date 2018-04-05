import {
    START_GAME,
    READY_GAME,
    FETCH_QUESTIONS_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    gameMode: undefined,
    questionsArray: [],
    currentQuestion: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case START_GAME:
            return { ...state, gameMode: 'playing' };
        case FETCH_QUESTIONS_SUCCESS:
            return { 
                ...state,
                questionsArray: action.payload,
                currentQuestion: action.payload[0],
                gameMode: 'ready'
            };
        default:
            return state;
    }
};
