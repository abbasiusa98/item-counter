import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onResetAll}
          className="btn btn-primary btn-sm m-2"
        >
          Reset All
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onDecrement={this.props.onDecrement}
            onIncrement={this.props.onIncrement}
            onReset={this.props.onReset}
            counter={counter}
          />
        ))}
        ;
      </div>
    );
  }
}

export default Counters;
