import "./Test.css";

import React from "react";
import { Button } from "../Reusable/Button/Button";
import { Validator } from "./Validator/Validator";

export const Test = ({ test, title }) => {
  const [answers, setAnswers] = React.useState(test);
  const [progress, setProgress] = React.useState(0);

  var selectOption = (questionId, optionId) => {
    var copy = [...answers];

    let question = copy.find(q => q.id === questionId);
    question.options.map(opt => {
      if (opt.id === optionId) opt.checked = true;
      else opt.checked = false;
    });

    console.log(copy);
    setAnswers(copy);
  };

  var renderQuestions = answers.map(({ id, text, options }) => {
    return (
      <Question
        key={id}
        id={id}
        options={options}
        text={text}
        selectOption={selectOption}
      />
    );
  });

  return (
    <div className="test">
      <div className="header">
        <h1 className="test-name">{title}</h1>
        <div className="header-left">
          <Validator test={answers} setProgress={setProgress} />
          <Button
            style={`${progress < 1 ? "primary-outline" : "primary"}`}
            disabled={progress < 1 ? true : false}
            text="Turn In"
          />
        </div>
      </div>
      <div className="split">
        <div className="questions">{renderQuestions}</div>
      </div>
    </div>
  );
};

const Question = ({ id, text, options, selectOption }) => {
  var renderOptions = options.map(opt => {
    return (
      <Option
        key={opt.id}
        id={opt.id}
        questionId={id}
        checked={opt.checked}
        selectOption={selectOption}
        text={opt.text}
      />
    );
  });

  return (
    <div className="question">
      <h1>{id + 1 + ". " + text}</h1>
      <ul>{renderOptions}</ul>
    </div>
  );
};

const Option = ({ checked, id, questionId, text, selectOption }) => {
  return (
    <div className="option">
      <Checkbox
        checked={checked}
        optId={id}
        qId={questionId}
        text={text}
        selectOption={selectOption}
      />
      <p>{text}</p>
    </div>
  );
};

const Checkbox = ({ checked, selectOption, qId, optId }) => {
  return (
    <div
      onClick={() => selectOption(qId, optId)}
      className={`check ${checked ? "checked" : ""}`}
    >
      <div
        className="bullet"
        style={{
          transform: `scale(${checked ? 0.7 : 0})`
        }}
      ></div>
    </div>
  );
};
