import "./Questionhub.css";
import Card from "react-bootstrap/Card";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Form, Button } from "react-bootstrap";
function Questionhub() {
    const Qdata=[
        {
            qid :1,
            qhead :"Fibonacci Strings",
            qprogress:35,
            quattempts:3
        },
        {
            qid :2,
            qhead :"Burenka with Fractions",
            qprogress:26,
            quattempts:7
        },
        {
            qid :3,
            qhead :"Interesting Sum",
            qprogress:78,
            quattempts:5
        },
        {
            qid :4,
            qhead :"Corners",
            qprogress:98,
            quattempts:9
        },
        {
            qid :5,
            qhead :"Xor-Subsequence",
            qprogress:46,
            quattempts:5
        },
        {
            qid :6,
            qhead :"Misha and Paintings",
            qprogress:0,
            quattempts:0
        },
    ]
    return(
        <div className="q_hub d-flex flex-row justify-content-between align-items-between">
           {
            Qdata.map((ques)=>{
                return(
                <Card className=" p-3 text-white d-flex  m-2 mt-4 ques">
                    <div className=""><h4>{ques.qid}.  {ques.qhead}</h4></div>
                    <div>Attempts : {ques.quattempts}</div> 
                    <ProgressBar animated now={ques.qprogress} variant="success" className="divpbar m-2" label={`${ques.qprogress}%`}/>
                    <Button variant="primary" type="submit" className="mb-2 qat-btn">
                    Attempt
                </Button>
                </Card>
                )
                
            })
           } 
        </div>
    );
  
}

export default Questionhub;
