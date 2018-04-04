import { ANSWER_QUESTION } from './types';

export const answerQuestion = (answers, answer) => {
    answers.push(answer);

    return {
        type: ANSWER_QUESTION,
        payload: answers
    };
};
