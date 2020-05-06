import "./Validator.css";
import { ProgressBar } from "../../Reusable/ProgressBar/ProgressBar";
import React from "react";

export const Validator = ({ test, setProgress }) => {
  var total = test.length;
  var answered = test.reduce((responded, question) => {
    var x = question.options.find(opt => opt.checked == true);
    if (x) return responded + 1;
    else return responded;
  }, 0);

  React.useEffect(() => {
    setProgress((answered / total).toFixed(2));
  });

  return (
    <div className="validator">
      <ProgressBar
        width={300}
        percent={(answered / total).toFixed(1)}
      ></ProgressBar>
    </div>
  );
};

// const QuestionPreview = ({ id, options }) => {
//   var answered = options.find(opt => opt.checked == true);
//   return (
//     <div className="question-preview">
//       <div className="preview">
//         <p>Question #{id + 1}</p>
//       </div>
//       <div className="stats">
//         <ProgressBar percent={0.2} width={200} />
//       </div>
//     </div>
//   );
// };
