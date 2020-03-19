import React from "react";
import "./Editor.css";
import CKEditor from "ckeditor4-react";

export class TextEditor extends React.Component {
  state = {
    data: ""
  };

  onChange = data => {
    this.setState({ data });
  };

  render() {
    return (
      <div className="editor">
        <CKEditor
          data={""}
          onChange={data => this.onChange(data.editor.getData())}
        />
      </div>
    );
  }
}
