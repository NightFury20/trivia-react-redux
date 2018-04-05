import { READY_GAME, START_GAME } from './types';

export const readyGame = () => {
    console.log('running readyGame');
    return {
        type: READY_GAME,
        payload: null
    };
};

export const startGame = () => ({
    type: START_GAME
});
