// import { Button } from 'bootstrap';
import { useState, FileReader, React } from "react";
import { Card } from "react-bootstrap";
import "./rdiv.css";
// import Code_Editor from '../code_editor/Code_Editor';
import AceEditor from "react-ace";
import run from "./run.png";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";
function Rdiv() {
  let [lang, updatelang] = useState("c_cpp");
  let [theme, utheme] = useState("monokai");
  let cscore = 100;
  let [cdc,ucdc]=useState("black");
  const fileu = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      console.log(text);
      alert(text);
    };
  };
  function langc(e) {
    // console.log(lang);/
    updatelang(e.target.value);
    console.log(e.target.value);
  }
  function themec(e) {
    utheme(e.target.value);
    if(e.target.value=="monokai" || e.target.value=="twilight"){
        ucdc("black");}
    else{
        ucdc("");
    }
    console.log(e.target.value);
    // console.log(theme);
  }
  function editor_c(e){
    console.log(e);
    
  }
  return (
    <Card className="rdiv">
      {/* {lang}{theme} */}
      <Card className="rtopnav bg-t c-w">
        <div className="rtn rtn1">
          <select name="lang" id="lang" onChange={langc} className="bg-t c-w br-2 b-1">
            <option value="c_cpp" className="bg-bl c-w">C</option>
            <option value="c_cpp" className="bg-bl c-w">C++</option>
            <option value="java" className="bg-bl c-w">Java</option>
            <option value="python" className="bg-bl c-w">Python</option>
          </select>
        </div>
        <div className="rtn rtn2">
          <h5>Your Score :{cscore}</h5>
        </div>
        <div className="rtn rtn3">
          <select name="theme" id="theme" onChange={themec} className="bg-t c-w br-2 b-1">
            <option value="monokai" className="bg-bl c-w ">monokai</option>
            <option value="github" className="bg-bl c-w">github</option>
            <option value="tomorrow" className="bg-bl c-w">tomorrow</option>
            <option value="twilight" className="bg-bl c-w">twilight</option>
          </select>
        </div>
      </Card>
      <Card className="ediv">
        <AceEditor
          mode={lang}
          theme={theme}
          name="UNIQUE_ID_OF_DIV"
          style={{ height: "100%", width: "100%", backgroundColor:cdc }}
          resize="True"
          onChange={editor_c}
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 1,
            showPrintMargin: false, // boolean: true if show the vertical print margin
            showGutter: true, // boolean: true if show line gutter
            wrap: true,
            renderValidationDecorations: "on",
          }}
        />
      </Card>
      <Card className="rtopnav rbottomnav bg-t">
        <div >
          <button className="rbn rbn1 bg-t  b-1 c-w br-2 pd-lr-15"><img
                    src={run}
                    alt=""
                    srcset=""
                    className="mb-1"
                    style={{height:"15px"}}
                  />{`  Run`}</button>
        </div>
        <div >
          <button className="rbn rbn2 bg-t  b-1 c-w br-2 pd-lr-15">Load Buffer</button>
        </div>
        <div >
          <label htmlFor="inpfff" className="rbn rbn3 bg-t  b-1 c-w br-2 pd-lr-15">
            Choose File
          </label>
          <input type="file" name="inpf" id="inpfff" onChange={fileu} />
        </div>
        <div >
          <input type="submit" value="Submit" className="rbn rbn4 b-b pd-lr-15 bg-t  b-1 c-w br-2" />
        </div>
      </Card>
    </Card>
  );
}

export default Rdiv;
