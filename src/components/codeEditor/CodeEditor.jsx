import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

const CodeEditor = () => {
  function onChange(newValue) {
    console.log("change", newValue);
  }

  return (
    <div>
      <AceEditor
        mode="java"
        theme="github"
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
      />
      ,
    </div>
  );
};

export default CodeEditor;