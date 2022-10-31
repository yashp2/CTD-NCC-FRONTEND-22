import './Instructions.css';
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import '../../App.css';
import { useState } from 'react';
import {  useNavigate } from "react-router-dom";

function Instructions(){
    const [inst_checked, setChecked] = useState(false);
    const navigate=useNavigate();

    function chk_inst_st(e){
        if(e.target.checked===true){
            setChecked(true);
            document.getElementById("inst_s_btn").disabled=false;
        }
        else {
            setChecked(false);
            document.getElementById("inst_s_btn").disabled=true;
        }
    }
    // function changeac(){
    //     let element=document.getElementById("#nav-ins");
    //     // console.log(element);
        
    // }
    function Redirect(){
        if(inst_checked)navigate("/questionhub");
        else document.getElementById("inst_s_btn").checked=true;
        
        
    }
    return(
        <div className="inst_page d-flex justify-content-center align-items-center text-white text-center">
            {
                // changeac()
            }
            <Card className='inst_page_mdiv br2 p-2 m-3'>
            <h1 className='text-white fs1 m-3 font-weight-bold'>Instructions</h1>
            <ol className='text-left i1 p1'>
                <li>Will not communicate with other participants, share ideas of solutions and hacks</li>
                <li>Will not use third-party code, except stated in http://codeforces.com/blog/entry/8790</li>
                <li>Will not attempt to deliberately destabilize the testing process and try to hack the contest system in any form</li>
                <li>Will not use multiple accounts and will take part in the contest using your personal and the single account.</li>
            </ol>
            <p><input type="checkbox" name="" required id="" onChange={chk_inst_st}
            className='m-2 cbx-i' />I have read and understood all the <span >instructions !</span></p>
            <div><Button variant="primary"  className="mb-2 s-bt1" id="inst_s_btn" onClick={Redirect} >
                  Submit
                </Button></div>
                
            </Card>
        </div>
    );


}

export default Instructions;