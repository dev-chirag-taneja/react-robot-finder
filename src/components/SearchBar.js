import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default class SearchBar extends React.Component {
  render() {
    const { text, onInputChange } = this.props;

    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto mt-3">
              <h2 className="text-white">Robots Finder</h2>
              <br />
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Search"
                value={text}
                onChange={onInputChange}
              />
            </div>
          </div>
          <br />
        </div>
      </div>
    );
  }
}
