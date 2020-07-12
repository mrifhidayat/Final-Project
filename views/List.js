/**Membuat List */
import React from "react";

class App extends React.Component {
  render() {
    const numbers = [1, 2, 3, 4];
    const listArray = numbers.map((numbers) => <li> {numbers} </li>);
    return (
      <div className="App">
        <header className="App-header">{listArray}</header>
      </div>
    );
  }
}

export default App;
