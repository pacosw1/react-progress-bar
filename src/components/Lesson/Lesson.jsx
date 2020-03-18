import React from "react";

import "./Lesson.css";
import axios from "axios";

// import "ace-builds/src-noconflict/ext-error_marker";
import { Button } from "../Reusable/Button/Button";
import { runCode } from "../../code-runner/runner";
import "ace-builds";
import "ace-builds/webpack-resolver";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-javascript";

import "ace-builds/src-noconflict/theme-tomorrow";

class Lesson extends React.Component {
  state = {
    code: "",
    result: {
      type: "out",
      data: []
    }
  };

  updateCode = value => {
    this.setState({ code: value });
  };

  checkCode = errors => {
    errors = errors.filter(err => err.raw != "Missing semicolon.");
    if (errors.length === 0) {
      this.run();
    } else {
      let result = {
        type: "error",
        data: errors
      };
      this.setState({ result });
    }
  };

  run = () => {
    let { code } = this.state;
    var res = runCode(code);

    this.setState({ result: res });
  };

  render() {
    let { data, type } = this.state.result;

    var renderOutput = data.map((item, index) => {
      if (type === "error" && item.type != "warning")
        return (
          <p className="out error-p" key={index}>
            {item.text}
          </p>
        );
      else if (type === "output")
        return (
          <p className=" out output-p" key={index}>
            {item}
          </p>
        );
    });

    return (
      <div className="lesson">
        <div className="lecture split">
          <h1>Arrays</h1>
          Today we will learn about arrays. Arrays are the first data structures
          people usally learn.
          <br />
          <br />
          That's because they are the foundation to all the other data
          structures. Arrays can be used for a wide variety of things.
        </div>
        <div className="editor">
          <div className="btns">
            <div>
              <Button
                onClick={() => this.run()}
                text="Run Code"
                width={200}
                style="primary-outline"
              />
              <Button text="Stop Code" width={200} style="danger-outline" />
            </div>
            <div className="bug">
              <Button
                //   onClick={() => run(text)}
                text="Bug?"
                width={200}
                style="secondary-outline"
              />
            </div>
          </div>

          <AceEditor
            width={"500px"}
            height={"460px"}
            mode="javascript"
            theme="tomorrow"
            value={this.state.code}
            onChange={this.updateCode}
            onValidate={err => this.checkCode(err)}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              wrap: true,
              tabSize: 2
            }}
          />
          <div className="output">
            <p className="out-title">OUTPUT</p>
            <div className="output-res">{renderOutput}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lesson;
