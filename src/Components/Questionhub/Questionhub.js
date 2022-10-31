import "./Questionhub.css";
import Card from "react-bootstrap/Card";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
function Questionhub() {
    var axios = require('axios');
    const [loading, setLoading] = useState(false);
    const [Qdata, UpdateQdata] = useState([]);
    const navigate = useNavigate();
    let token = localStorage.getItem('token');

    function Redirect(props) {
        console.log(props.target.id);
        navigate(`/coding/1`)
    }

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            // console.log(localStorage.getItem('token'));
            var config = {
                method: 'get',
                url: 'http://127.0.0.1:8000/NCC/question',
                headers: {
                    'Authorization': `${token}`
                }
            };

            const questionsList = await axios(config)
            //   .catch(function (error) {
            //       console.log(error);
            //     });
            console.log('questionsList', questionsList.data)
            //   .then(function (response) {
            //     console.log(JSON.stringify(response.data));
            //   })
            UpdateQdata(questionsList.data);
            setLoading(false);
        }
        loadData();
    }, [token]);

    if (loading) {
        return (
            <>Loadingg....</>
        )
    }
    return (
        <div className="q_hub d-flex flex-row justify-content-between align-items-between">
            {/* {loadData()} */}
            {

                Qdata.map((ques) => {
                    return (
                        <Card className=" p-3 text-white d-flex  m-2 mt-4 ques">
                            <div className=""><h4>{ques.id}.  {ques.title}</h4></div>
                            <div>Attempts : {ques.total_submissions}</div>
                            {/* <div>Score:</div> */}
                            <ProgressBar animated now={ques.accuracy} variant="success" className="divpbar m-2" label={`${ques.qprogress}%`} />
                            <Button variant="primary" type="submit" className="mb-2 qat-btn" onClick={Redirect} id={ques.id}>
                                Attempt
                            </Button>
                        </Card>
                    )

                })

            }
            {/* <Button onClick={loadData} /> */}
        </div>
    );

}

export default Questionhub;
