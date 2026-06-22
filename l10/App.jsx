import React, { Component } from "react";

class App extends Component {
  state = {
    users: [],
    search: "",
    error: ""
  };

  componentDidMount() {
    this.getUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.getUsers();
    }
  }

  getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        const result = data.filter((u) =>
          u.name.toLowerCase().includes(this.state.search.toLowerCase())
        );

        if (result.length === 0) {
          this.setState({
            users: [],
            error: "No data found"
          });
        } else {
          this.setState({
            users: result,
            error: ""
          });
        }
      })
      .catch(() =>
        this.setState({ error: "Failed to load data" })
      );
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h2>User List</h2>

        <input
          type="text"
          placeholder="Search user"
          value={this.state.search}
          onChange={(e) =>
            this.setState({ search: e.target.value })
          }
        />

        <button onClick={this.getUsers}>
          Refresh
        </button>

        <p>{this.state.error}</p>

        <ul>
          {this.state.users.map((u) => (
            <li key={u.id}>
              {u.name} - {u.email}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
