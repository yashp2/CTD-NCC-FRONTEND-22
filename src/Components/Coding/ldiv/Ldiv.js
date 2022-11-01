// import React from 'React';
import { useEffect, useState } from 'react';
import {Card} from 'react-bootstrap';
import './ldiv.css';

function Ldiv(props){
   let [qdisp,updateq]=useState("hello \n hellllo");
    let [ci,uci]=useState("");
    let [co,uco]=useState("");
   let token = localStorage.getItem('token');
   var axios = require('axios');
   const [loading, setLoading] = useState(false);
   let qid=props.i;
   console.log("qid",qid);
   useEffect(() => {
    const loadData = async () => {
        setLoading(true);
        // console.log(localStorage.getItem('token'));
        var config = {
            method: 'get',
            url: `http://127.0.0.1:8000/NCC/question/${qid}`,
            headers: {
                'Authorization': `${token}`
            }
        };

        const question = await axios(config)
        //   .catch(function (error) {
        //       console.log(error);
        //     });
        console.log('questions', question.data)
        //   .then(function (response) {
        //     console.log(JSON.stringify(response.data));

        //   })
        updateq(question.data);
        console.log(qdisp)
        // props.changecustominp(question.data.sample_input);
        
        uci(question.data.sample_input);
        localStorage.setItem(`ci${qid}`,`${ci}`);
        setLoading(false);
        // updateq("");
    }
    loadData();
}, [token]);

if (loading) {
    return (
        <>Loadingg....</>
    )
}

function cc(e){
    console.log(e);
    uci(e.target.value);
    localStorage.setItem(`ci${qid}`,`${e.target.value}`);
}
   return(
    <Card className='ldiv bg-t'>
        <Card className='quesq bg-t b-1 c-w'>
            <div className='qno' ><h5>1</h5></div>
            <div className='qno'><h5>2</h5></div>
            <div className='qno '><h5>3</h5></div>
            <div className='qno'><h5>4</h5></div>
            <div className='qno'><h5>5</h5></div>
            <div className='qno'><h5>6</h5></div>
        </Card>
        <div className='qdisp bg-t b-2'>
            {/* <textarea name="" className='qdispt bg-t c-w 'id="qdispt" readOnly>{qdisp}</textarea> */}
            <Card className='qdispt bg-t c-w ' id="qdispt">
                <h4>{qdisp.id}  {qdisp.title} </h4>
                <h5>{qdisp.description}</h5>
                <h4>Constraints:</h4>
                <h5>{qdisp.constraints}</h5>
                <h4>Input Format:</h4>
                <h5>{qdisp.constraints}</h5>
                <h4>Output Format:</h4>
                <h5>{qdisp.constraints}</h5>
                </Card>
        </div>
        <Card className='ipop bg-t'>
            <Card className="inp bg-t b-2">
                <div className='bg-b c-w'><h5>Custom Input</h5></div>
                <textarea name="" id="cinpp" className='inpt bg-t c-w br-2' onChange={cc}>{ci}</textarea>
            </Card>
            <Card className='out bg-t b-2 '>
                <div className='bg-b c-w'><h5>Custom Output</h5></div>
                <textarea name="" id="coutt" className='outt bg-t c-w br-2' readOnly>{co}</textarea>
            </Card>
        </Card>
    </Card>
    )
}

export default Ldiv;