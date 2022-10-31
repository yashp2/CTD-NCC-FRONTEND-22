import './Coding.css';
import AceEditor from "react-ace";
import { useParams } from 'react-router';
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

import Ldiv from './ldiv/Ldiv';
import Rdiv from './rdiv/Rdiv';

function Coding(props){
    // console.log(this.props.match.params.id);
    const { id } = useParams();
    console.log(id);
    return(
    <div className='mdiv'>
        {/* <AceEditor
        mode="c_cpp"
        theme="monokai"
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        /> */}
        <Ldiv />
        <Rdiv/>
    </div>
    )
}

export default Coding;