import React from "react";
import NestedContext from "./NestedContext";
import CounterContext from "./CounterContext";


class Context extends React.Component {
  constructor() {
    super();
    this.state = {
      contextCount: 0
    };
  }

  contextIncrement = (e = null) => {
    if (e) {
      e.preventDefault();
    }
    let increased = this.state.contextCount + 1;
    this.setState({ contextCount: increased });
  };

  contextDecrement = e => {
    e.preventDefault();
    let decreased = this.state.contextCount - 1;
    this.setState({ contextCount: decreased });
  };

  oddIncrement = e => {
    e.preventDefault();
    if (this.state.contextCount % 2){
      this.contextIncrement()
    }
  };

  delayedIncrement = e => {
    e.preventDefault();
    setTimeout(()=> this.contextIncrement(), 1000)
  }

  render() {
    let counterObj = {
      ...this.state,
      increase: this.contextIncrement,
      decrease: this.contextDecrement,
      odd: this.oddIncrement,
      delayed: this.delayedIncrement
    };
    return (
      <div>
        <CounterContext.Provider value={counterObj}>
          <NestedContext />
        </CounterContext.Provider>
      </div>
    );
  }
}

export default Context;
