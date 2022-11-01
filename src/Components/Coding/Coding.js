import './Coding.css';
import AceEditor from "react-ace";
import { useParams } from 'react-router';
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

import Ldiv from './ldiv/Ldiv';
import Rdiv from './rdiv/Rdiv';
import { useState } from 'react';
import { Navigate ,useNavigate} from "react-router";

function Coding(props) {
    // console.log(this.props.match.params.id);
    const { id } = useParams();
    let a=localStorage.getItem("isloggedin");
    const navigate=useNavigate();
    if(a==false)navigate("/");
    let lprops = {
        i: id,
        // custominp: custominp,
        // changecustominp: Changecustominp,
        // customout: customout,
    }
    let rprops={
        id:id,
        // custominp:custominp,
        // customout:customout,
        // changecustomout:Changecustomout,
    }

    return (
        <div className='mdiv'>
            {/* <AceEditor
        mode="c_cpp"
        theme="monokai"
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        /> */}
            <Ldiv  {...lprops} />
            <Rdiv {...rprops} />
        </div>
    )
}

export default Coding;