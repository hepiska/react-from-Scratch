import React, { Component } from "react";
import ShowCard from "./showCard";
import preLoad from "../data.json";

class Search extends Component {
  state = {
    searchTerm: ""
  };
  handleSearch = event => {
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    return (
      <div className="search">
        <header>
          <h1>ome</h1>
          <input
            onChange={this.handleSearch}
            value={this.state.searchTerm}
            type="text"
            placeholder="search...."
          />
        </header>
        <div>
          {preLoad.shows
            .filter(
              show =>
                `${show.title}`
                  .toLowerCase()
                  .indexOf(this.state.searchTerm.toLowerCase()) >= 0
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
