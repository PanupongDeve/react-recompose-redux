import { say_Hello, Hello_LifeCycle } from "./actionType";

export const sayHi = event => {
  console.log("actions success");
  return {
    type: say_Hello,
    payload: "Hi, I am reducers. I come from redux"
  };
};

export const sayHiLifecycle = () => {
  console.log("actions Lifecycle success");
  return {
    type: Hello_LifeCycle,
    payload: "Hi, I am LifeCycleDidMout Message. I come from redux"
  };
};
