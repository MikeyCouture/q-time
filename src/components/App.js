import React from "react";
import Header from "./Header";
import Modal from "./Modal";
import Qlist from "./Qlist";

class App extends React.Component {
  state = { showModal: false, questionList: ["test"] };

  questionToggle = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  onTermSubmit = term => {
    this.setState(prevState => ({
      questionList: [...prevState.questionList, term]
    }));
    console.log(this.state.questionList);
  };

  render() {
    return (
      <div className="ui container">
        <Header questionToggle={this.questionToggle} />
        <Qlist questionList={this.state.questionList} />
        <Modal
          showModal={this.state.showModal}
          questionList={this.state.questionList}
          questionToggle={this.questionToggle}
          onFormSubmit={this.onTermSubmit}
        />
      </div>
    );
  }
}

export default App;
