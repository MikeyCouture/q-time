import React from "react";
import ReactDOM from "react-dom";

class Modal extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
    // console.log(this.state.term);
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.questionToggle();
    this.props.onFormSubmit(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return ReactDOM.createPortal(
      <div
        onClick={this.props.questionToggle}
        className={
          this.props.showModal
            ? "ui dimmer modals visible active"
            : "ui dimmer modals"
        }
      >
        <div
          onClick={e => e.stopPropagation()}
          className="ui standard modal visible active"
        >
          <div className="header">Header test</div>
          <div className="content field">
            <div className="ui input" style={{ width: "100%" }}>
              <form
                onSubmit={this.onFormSubmit}
                className="ui form fluid"
                style={{ width: "100%" }}
              >
                <input
                  className="questionInput "
                  type="text"
                  placeholder="Enter you question here"
                  value={this.state.term}
                  onChange={this.onInputChange}
                ></input>
              </form>
            </div>
          </div>
          <div className="actions">
            <button onClick={this.onFormSubmit} className="ui primary button">
              Post
            </button>
            <button className="ui button" onClick={this.props.questionToggle}>
              Cancel
            </button>
          </div>
        </div>
      </div>,
      document.querySelector("#modal")
    );
  }
}

export default Modal;

// ui dimmer modals

// className = "ui dimmer modals visible active"
