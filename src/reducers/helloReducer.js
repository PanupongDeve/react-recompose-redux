import { say_Hello } from '../actions/actionType';

export default function (state = '', action) {
    switch (action.type) {
        case say_Hello:
            return action.payload;
        default:
            return state;
    }
}