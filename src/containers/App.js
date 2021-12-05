import React, { useState } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import ErrorBoundary from "./ErrorBoundary";
import "./App.css";

function App() {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     searchField: "",
  //   };
  // }

  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => this.setState({ robots: users }));
  // }

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  console.log(robots, searchField);

  return !robots.length ? (
    <div className="tc">
      <h1 className="f1">Loading</h1>
    </div>
  ) : (
    <div className="tc">
      <h1 className="f1">Robo Friends</h1>
      <SearchBox searchChange={onSearchChange} />
      <ErrorBoundary>
        <CardList robots={filteredRobots} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
