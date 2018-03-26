import React from 'react';
import { withState, withHandlers ,compose } from  'recompose';
import Title from './Title';
import Presentation from './Presentation';

const hocHello = (Composecomponent) => {
    return (props) => {
        return (
            <div>
                <Title>Welcome To HOC</Title>
                <Composecomponent {...props} />
            </div>
        );
    }
} 

const numberState = withState('numberState', 'setNumberState', 0);

const handleEvent = withHandlers({
    handleAddEvent: props => event => {
        const {numberState, setNumberState } =  props;
        setNumberState(numberState + 1);
    },
    handleSubEvent: props => event => {
        const {numberState, setNumberState } =  props;
        setNumberState(numberState -1);
    },
    sayHello: props => event => {
        return 'Good Morning';
    }
});


const composeHOC = compose(
    numberState,
    handleEvent,
    hocHello,
);

export default composeHOC(Presentation);