// import React from 'React';
import { useState } from 'react';
import {Card} from 'react-bootstrap';
import './ldiv.css';

function Ldiv(){
   let [qdisp,updateq]=useState("hello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehehello \n \t\thehe");
    return(
    <Card className='ldiv bg-t'>
        <Card className='quesq bg-t b-1 c-w'>
            <div className='qno'><h5>1</h5></div>
            <div className='qno'><h5>2</h5></div>
            <div className='qno '><h5>3</h5></div>
            <div className='qno'><h5>4</h5></div>
            <div className='qno'><h5>5</h5></div>
            <div className='qno'><h5>6</h5></div>
        </Card>
        <Card className='qdisp bg-t b-2'>
            <textarea name="" className='qdispt bg-t c-w 'id="qdispt" readOnly>{qdisp}</textarea>
        </Card>
        <Card className='ipop bg-t'>
            <Card className="inp bg-t b-2">
                <div className='bg-b c-w'><h5>Custom Input</h5></div>
                <textarea name="" id="" className='inpt bg-t c-w br-2'></textarea>
            </Card>
            <Card className='out bg-t b-2 '>
                <div className='bg-b c-w'><h5>Custom Output</h5></div>
                <textarea name="" id="" className='outt bg-t c-w br-2' readOnly></textarea>
            </Card>
        </Card>
    </Card>
    )
}

export default Ldiv;