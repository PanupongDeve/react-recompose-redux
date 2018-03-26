import { say_Hello } from './actionType'

export const sayHi = (event) => {
    console.log('actions success');
    return {
        type: say_Hello,
        payload: 'Hi, I am reducers. I come from redux'
    };
}
