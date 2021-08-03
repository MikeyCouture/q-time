import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="ui secondary pointing menu">
        <button
          className="ui primary button"
          onClick={this.props.questionToggle}
        >
          Add a question!
        </button>
      </div>
    );
  }
}

export default Header;
