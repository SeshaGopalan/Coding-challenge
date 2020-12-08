// JavaScript source code
import React from "react";
import Item from "./Item";

import axios from "axios";

import _ from "lodash";

export default class List extends React.Component {
  state = {
    items: [{}],
    sortValue: null
  };

  componentDidMount() {
    this.makeRequest();
  }

  makeRequest() {
    const that = this;
    axios
      .get("https://api.punkapi.com/v2/beers?page=1&per_page=10")
      .then(function(response) {
        console.log(response);
        const items = response.data;
        that.setState({ items });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const sortParam = this.state.sortValue;
    const sorted = _.sortBy(this.state.items, [
      function(o) {
        return o[sortParam];
      }
    ]);
    console.log(sorted);

    this.setState({ items: sorted });
  }

  handleChange(e) {
    this.setState({ sortValue: e.target.value });
  }

  render() {
    const currentItems = this.state.items;
    const items = currentItems.map(function(item, i) {
      //console.log(item);
      return <Item {...item} itemName={item.name} key={item.name + i} />;
    });

    const selectOptions = Object.keys(currentItems[0])
      .reduce(function(acc, next) {
        //console.log(_.isObjectLike(next), next[i]);

        if (!_.isObjectLike(currentItems[0][next])) {
          acc.push(next);
        }

        return acc;
      }, [])
      .map(function(option, i) {
        return (
          <option value={option} key={"option-" + i}>
            {option}
          </option>
        );
      });

    return (
      <div className="list">
        <form action="" onSubmit={this.handleSubmit.bind(this)}>
          <select id="sort_options" onChange={this.handleChange.bind(this)}>
            {selectOptions}
          </select>
          <br />
          <br />
          <button type="submit">Sort</button>
        </form>
        {items}
      </div>
    );
  }
}
