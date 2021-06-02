import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <h4>{"Counter # " + this.props.counter.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onDecrement(this.props.counter.id)}
          className="btn btn-secondary btn-sm m-1"
        >
          -
        </button>
        <button
          onClick={() => this.props.onIncrement(this.props.counter.id)}
          className="btn btn-secondary btn-sm m-1"
        >
          +
        </button>
        <button
          onClick={() => this.props.onReset(this.props.counter.id)}
          className="btn btn-primary btn-sm m-1"
        >
          Reset
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "m-2 badge badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // const { count } = this.state.count;
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
}
export default Counter;
