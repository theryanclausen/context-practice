import React from "react";
import CounterContext from "./CounterContext";

const InnerNest = () => {
  return (
    <CounterContext.Consumer>
      {context => (
        <div>
          <p>{context.contextCount}</p>
          <button onClick={context.increase}>+</button>
          <button onClick={context.decrease}>-</button>
          <button onClick={context.odd}>odd +</button>
          <button onClick={context.delayed}>delay +</button>
        </div>
      )}
    </CounterContext.Consumer>
  );
};

const NestedContext = () => {
  return (
    <div>
      <h3>Counter</h3>
      <InnerNest />
    </div>
  );
};

export default NestedContext;
