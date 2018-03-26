import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { withState, withHandlers ,compose } from  'recompose';
import Title from './Title';
import Presentation from './Presentation';
import {sayHi, sayHi2} from './actions';

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
    handleShowReduxMessage: props => event => {
        props.sayHi();
    }
});

const mapStateToProps = ({ hello }) => {
    return {
        hello
    };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ sayHi }, dispatch);
}


const composeHOC = compose(
    connect(mapStateToProps, mapDispatchToProps),
    numberState,
    handleEvent,
    hocHello,
);

const App = composeHOC(Presentation);

export default App;