import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withState, withHandlers, compose, lifecycle } from "recompose";
import Title from "./Title";
import Presentation from "./Presentation";
import { sayHi, sayHiLifecycle } from "./actions";

const hocHello = Composecomponent => {
  return props => {
    return (
      <div>
        <Title>Welcome To HOC</Title>
        <Composecomponent {...props} />
      </div>
    );
  };
};

const numberState = withState("numberState", "setNumberState", 0);
const numberDidMout = lifecycle({
  componentDidMount() {
    this.props.sayHiLifecycle();
    console.log("props in life", this.props);
  }
});

const handleEvent = withHandlers({
  handleAddEvent: props => event => {
    const { numberState, setNumberState } = props;
    setNumberState(numberState + 1);
  },
  handleSubEvent: props => event => {
    const { numberState, setNumberState } = props;
    setNumberState(numberState - 1);
  },
  handleShowReduxMessage: props => event => {
    props.sayHi();
    console.log("props in Event", props);
  }
});

const mapStateToProps = ({ hello, lifecycle }) => {
  return {
    hello,
    lifecycle
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ sayHi, sayHiLifecycle }, dispatch);
};

const composeHOC = compose(
  connect(mapStateToProps, mapDispatchToProps),
  numberDidMout,
  numberState,
  handleEvent,
  hocHello
);

const App = composeHOC(Presentation);

export default App;
