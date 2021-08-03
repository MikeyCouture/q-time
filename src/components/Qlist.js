import React from "react";

const Qlist = ({ questionList }) => {
  const renderList = questionList.map((item, i) => {
    return (
      <div className="ui segments" key={i}>
        <div className="ui segment">
          <p>{item}</p>
        </div>
      </div>
      // <div class="ui cards">
      //   <div class="card" key={i}>
      //     <div class="content">
      //       <div class="description">
      //         <b>{item}</b>
      //       </div>
      //     </div>
      //     <div class="extra content">
      //       <div class="ui two buttons">
      //         <div class="ui basic green button">👍</div>
      //         <div class="ui basic red button">👎</div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  });

  return <div className="list-item">{renderList}</div>;
};

export default Qlist;
