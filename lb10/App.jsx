import React, { Component } from "react";

class App extends Component {
  state = {
    users: [],
    search: "",
    error: ""
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.fetchData();
    }
  }

  fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        const users = data.filter((u) =>
          u.name.toLowerCase().includes(this.state.search.toLowerCase())
        );

        this.setState({
          users,
          error: users.length ? "" : "No Data Found"
        });
      })
      .catch(() => this.setState({ error: "Failed to Load Data" }));
  };

  render() {
    return (
      <div>
        <h2>User List</h2>

        <input
          type="text"
          placeholder="Search User"
          value={this.state.search}
          onChange={(e) => this.setState({ search: e.target.value })}
        />

        <button onClick={this.fetchData}>Refresh</button>

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
