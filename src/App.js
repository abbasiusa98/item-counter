import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      {
        id: 0,
        value: 1,
      },
      {
        id: 1,
        value: 2,
      },
      {
        id: 2,
        value: 4,
      },
      {
        id: 3,
        value: 4,
      },
      {
        id: 4,
        value: 4,
      },
    ],
  };

  handleDecrement = (counterId) => {
    let counters = this.state.counters;
    if (counters.find((c) => c.id === counterId).value !== 0) {
      counters.find((c) => c.id === counterId).value -= 1;
      this.setState({ counters });
    }
  };

  handleIncrement = (counterId) => {
    let counters = this.state.counters;
    counters.find((c) => c.id === counterId).value += 1;
    this.setState(counters);
  };
  handleReset = (counterId) => {
    let counters = this.state.counters;
    counters.find((c) => c.id === counterId).value = 0;
    this.setState({ counters });
  };

  handleResetAll = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    console.log(counterId);
    console.log(counters);
    this.setState({ counters: counters }); // same as >> this.setState({counter})
  };
  render() {
    return (
      <React.Fragment>
        <NavBar counters={this.state.counters} />
        <main className="container">
          <Counters
            onDelete={this.handleDelete}
            onResetAll={this.handleResetAll}
            onDecrement={this.handleDecrement}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
