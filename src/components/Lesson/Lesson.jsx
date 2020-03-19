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
import "ace-builds/src-noconflict/ext-searchbox";
import "ace-builds/src-noconflict/theme-tomorrow";
import ReactHtmlParser from "react-html-parser";

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
    var component =
      "<h1><strong>Data Structures</strong></h1><p>Today we will be learning about array.&nbsp;<strong>The fundamental&nbsp;data structure&nbsp;</strong>in computer science.</p><p>&nbsp;</p><p>&nbsp;</p> <p>&nbsp;</p><p>&nbsp;</p><p>Arrays are used to hold data in a consecutive order. A spot is reserved for each value in an array. Let&#39;s say you are going to a movie theater. Only one person can fit in each sit. And they must be in order. Each row in the theater represent an array.&nbsp;</p><p>&nbsp;</p>";
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
        <div className="lecture split">{ReactHtmlParser(component)}</div>
        <div className="editor">
          <div className="btns">
            <div>
              <Button text="Live" width={200} style="danger-outline" />
              <Button
                onClick={() => this.run()}
                text="Run Code"
                width={200}
                style="primary-outline"
              />
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
            height={"425px"}
            mode="javascript"
            theme="tomorrow"
            value={this.state.code}
            onChange={this.updateCode}
            onValidate={err => this.checkCode(err)}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: false,
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
