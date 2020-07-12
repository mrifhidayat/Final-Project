/**Convert Kg to G menggunakan Liftingstateup */
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kilogram: 0,
      gram: 0,
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    alert(`${this.state.kilogram} {kilogram} adalah ${this.state.gram} {gram}`);
  }

  onChangekilogram = (e) => {
    let kilogram = e.target.value;
    let gram = (parseFloat(kilogram) * 1000).toString();
    this.setState({
      kilogram,
      gram,
    });
  };

  onChangegram = (e) => {
    let gram = e.target.value;
    let kilogram = (parseFloat(gram) / 1000).toString();
    this.setState({
      kilogram,
      gram,
    });
  };

  render() {
    const { kilogram, gram } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Kilogram:
          <input
            type="number"
            value={kilogram}
            onChange={this.onChangekilogram}
          />{" "}
        </label>{" "}
        <br />
        <label>
          Gram:
          <input type="number" value={gram} onChange={this.onChangegram} />{" "}
        </label>{" "}
        <br />
        <button type="submit"> Convert </button>{" "}
      </form>
    );
  }
}

export default App;
