import { Component } from "react";
import "./style.css";

class Form extends Component {
  render() {
    console.log(this.props);
    return (
      <form>
        <label>Name</label>
        <input type="text"></input>
      </form>
    );
  }
}

export default Form;
