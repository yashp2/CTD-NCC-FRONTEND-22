// import { Button } from 'bootstrap';
import { useState, React } from "react";
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
import { Navigate ,useNavigate} from "react-router";
import { Redirect } from 'react-router';
function Rdiv(props) {
  let [lang, updatelang] = useState("c_cpp");
  let [langs,updatelangs] =useState("c");
  let [theme, utheme] = useState("monokai");
  let [code, ucode] = useState("");
  // let cscore = 100;
  let [cdc, ucdc] = useState("black");
  const id = props.id;
  let token = localStorage.getItem('token');
  var axios = require('axios');
  let inputdiv = document.getElementById("cinpp");
  let outputdiv = document.getElementById("coutt");
  const navigate=useNavigate();
  function langc(e) {
    // console.log(lang);/
    updatelang(e.target.value);
    if(e.target.value=="c++"){updatelang("c_cpp");}
    else if(e.target.value=="c"){updatelang("c_cpp");}
    else {updatelang(e.target.value)}
    console.log(e.target.value);
    updatelangs(e.target.value);
    // console.log("hell",localStorage.getItem(`${lang}${id}`));
    ucode(localStorage.getItem(`${e.target.value}${id}`));
  }
  function themec(e) {
    utheme(e.target.value);
    if (e.target.value == "monokai" || e.target.value == "twilight") {
      ucdc("black");
    }
    else {
      ucdc("");
    }
    console.log(e.target.value);
    // console.log(theme);
  }

  function editor_c(e) {
    console.log(e);
    localStorage.setItem(`${langs}${id}`, e);
  }

  function handlerun() {
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();
    let codecc=localStorage.getItem(`${langs}${id}`);
    data.append('language', langs);
    data.append('code', `${codecc}`);
    data.append('input', JSON.stringify(inputdiv.textContent));
    console.log(langs);
    console.log(codecc);
    console.log(inputdiv.textContent);
    var config = {
      method: 'post',
      url: 'http://127.0.0.1:8000/NCC/custom',
      headers: {
        'Authorization': token,

      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log(response.data);
        if(response.data["error"]==""){console.log("error not found");outputdiv.textContent=response.data["output"];}
        else outputdiv.textContent=response.data["error"];
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  function handlesubmit(){
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();
    let codecc=localStorage.getItem(`${langs}${id}`);
    data.append('language', langs);
    data.append('code', `${codecc}`);
    // data.append('input', JSON.stringify(inputdiv.textContent));
    console.log(langs);
    console.log(codecc);
    // console.log(inputdiv.textContent);
    var config = {
      method: 'post',
      url: `http://127.0.0.1:8000/NCC/submit/${id}`,
      headers: {
        'Authorization': token,

      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log(response.data);
        let a=response.data;
        navigate("/testcases",{a});
        // <Redirect
        //     to={{
        //     pathname: "/testcases",
        //     state: response.data
        //   }}
        // />
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <Card className="rdiv">
      {/* {lang}{theme} */}
      <Card className="rtopnav bg-t c-w">
        <div className="rtn rtn1">
          <select name="lang" id="lang" onChange={langc} className="bg-t c-w br-2 b-1">
            <option value="c" className="bg-bl c-w">C</option>
            <option value="c++" className="bg-bl c-w">C++</option>
            <option value="java" className="bg-bl c-w">Java</option>
            <option value="python" className="bg-bl c-w">Python</option>
          </select>
        </div>
        {/* <div className="rtn rtn2">
          <h5>Your Score :{cscore}</h5>
        </div> */}
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
          value={code}
          name="UNIQUE_ID_OF_DIV"
          style={{ height: "100%", width: "100%", backgroundColor: cdc }}
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
          <button className="rbn rbn1 bg-t  b-1 c-w br-2 pd-lr-15" onClick={handlerun}><img
            src={run}
            alt=""
            srcset=""
            className="mb-1"
            style={{ height: "15px" }}
          />{`  Run`}</button>
        </div>
        {/* <div >
          <button className="rbn rbn2 bg-t  b-1 c-w br-2 pd-lr-15">Load Buffer</button>
        </div> */}
        <div >
          <label htmlFor="inpfff" className="rbn rbn3 bg-t  b-1 c-w br-2 pd-lr-15">
            Choose File
          </label>
          <input type="file" name="inpf" id="inpfff" />
        </div>
        <div >
          <input type="submit" value="Submit" className="rbn rbn4 b-b pd-lr-15 bg-t  b-1 c-w br-2" onClick={handlesubmit}/>
        </div>
      </Card>
    </Card>
  );
}

export default Rdiv;
