/**Membuat Form */
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gaji: 0,
      male: "",
      female: "",
      skills: "",
      alamat: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onPick = this.onPick.bind(this);
  }

  onSubmit(event) {
    alert(`Namaku adalah ${this.state.name}`);
    event.preventDefault();
  }

  onChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onPick(event) {}

  render() {
    const { name, gaji, male, female, skills1, skills2, alamat } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          {" "}
          Name:
          <input type="text" value={name} onChange={this.onChange} />{" "}
        </label>{" "}
        <br />
        <label>
          Gaji:
          <input type="number" value={gaji} onChange={this.onChange} />{" "}
        </label>{" "}
        <br />
        <label>
          Male:
          <input
            type="radio"
            name="gender"
            value={male}
            onChange={this.onChange}
          />{" "}
        </label>{" "}
        <br />
        <label>
          Female:
          <input
            type="radio"
            name="gender"
            value={female}
            onChange={this.onChange}
          />{" "}
        </label>{" "}
        <br />
        <label>
          Skills:
          <select multiple value={[skills1, skills2]} onChange={this.onPick}>
            <option value="Coding"> Coding </option>{" "}
            <option value="Manajemen"> Manajemen </option>{" "}
            <option value="Leadership"> Leadership </option>{" "}
          </select>{" "}
        </label>{" "}
        <br />
        <label>
          Alamat:
          <textarea value={alamat} onChange={this.onChange} />{" "}
        </label>{" "}
      </form>
    );
  }
}
export default App;
