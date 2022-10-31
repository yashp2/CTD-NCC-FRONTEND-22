import "./Result.css";
import Card from "react-bootstrap/Card";
import C3 from "./crown_bronze.png";
import C1 from "./crown_gold.png";
import C2 from "./crown_silver.png";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useEffect, useState } from "react";

function Result() {
  const token=localStorage.getItem('token');
  const [loading, setLoading] = useState(0);
  var axios = require('axios');
  const [Userdata,Updateuser] = useState({
    UserName: "Yash Patil",
    Qat: 3,
    Score: 250,
    Rank: 125,
  });
  const fl = Userdata.UserName.charAt(0);
  fl.toUpperCase();

  const [toppers,Updatetopper] = useState([{
    UserName: "Yash Patil",
    Scorep: 96,
  },
  {
    UserName: "Kushal Bhattad",
    Scorep: 40,
  },
  {
    UserName: "Shubham Shelar",
    Scorep: 80,
  }
  ]);
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      // console.log(localStorage.getItem('token'));
      var config = {
        method: 'get',
        url: 'http://127.0.0.1:8000/NCC/rank',
        headers: {
          'Authorization': `${token}`
        }
      };

      const subs = await axios(config)

      // console.log('rank', JSON.stringify(subs.data))
      Userdata.Rank=subs.data[0];
      // console.log(Userdata);

      config.url='http://127.0.0.1:8000/NCC/user';
      const usd = await axios(config);
      console.log(usd.data);
      Userdata.UserName=usd.data.username;
      Userdata.Score=usd.data.total_score;


      config.url='http://127.0.0.1:8000/NCC/allranks';
      const allusd = await axios(config);
      console.log(allusd.data);
      // let topper1=allusd.data[0];
      // console.log(topper1);
      toppers[0].UserName = allusd.data[0][0];
      toppers[1].UserName=allusd.data[1][0];
      toppers[2].UserName=allusd.data[2][0];
      toppers[0].Scorep=allusd.data[0][2];
      toppers[1].Scorep=allusd.data[1][2];
      toppers[2].Scorep=allusd.data[2][2];

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
    <div className="result_pg">
      <h1 className="text-white p-3 text-center
      ">
        Thank-you
        <span className="text-success">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="null"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.2426 16.3137L6 12.071L7.41421 10.6568L10.2426 13.4853L15.8995 7.8284L17.3137 9.24262L10.2426 16.3137Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </h1>
      <div className="res_pg_mdiv d-flex justify-content-center align-items-center">
        <Card className="yresult bg-transparent text-white p-4 d-flex justify-content-center align-items-center m-3">
          <div className="yrresult_t m-2 mb-3 align-items-center justify-content-center d-flex">
            <h1 className="yrresult_t_txt">{fl}</h1>
          </div>
          {/* <div className=""></div> */}
          <p>
            <h5 className="m-1 ">
              Username : <span className="text-b1">{Userdata.UserName}</span>
            </h5>
          </p>
          <p>
            <h5 className="m-1 ">
              Questions Attempted :{" "}
              <span className="text-b1">{Userdata.Qat}</span>
            </h5>
          </p>
          <p>
            <h5 className="m-1 ">
              Score : <span className="text-b1">{Userdata.Score}</span>
            </h5>
          </p>
          <p>
            <h5 className="m-1 ">
              Rank :<span className="text-b1">{Userdata.Rank}</span>{" "}
            </h5>
          </p>
          {/* <p><h5>Username : {Userdata.UserName}</h5></p> */}
        </Card>
        <Card className="cresults bg-transparent text-white p-4 d-flex  m-3 text-left">
          <h4 className="text-left">
            <p className="tp">
              <img src={C1} alt="" srcset="" className="crown-1" /> {toppers[0].UserName} | {toppers[0].Scorep}
            </p>
            <ProgressBar striped variant="warning" now={toppers[0].Scorep} className='cresults_p' />
          </h4>
          <h4>
            <p className="tp">
              <img src={C2} alt="" srcset="" className="crown-2" /> {toppers[1].UserName} | {toppers[1].Scorep}
            </p>
            <p>
              <ProgressBar striped variant="secondary" now={toppers[1].Scorep} className='cresults_p' />
            </p>
          </h4>
          <h4>
            <p className="tp">
              <img src={C3} alt="" srcset="" className="crown-3" /> {toppers[2].UserName} | {toppers[2].Scorep} <span className="m-5"></span>
            </p>
            <p>
              <ProgressBar striped variant="success" now={toppers[2].Scorep} className='cresults_p' />
            </p>
          </h4>
        </Card>
      </div>
    </div>
  );
}

export default Result;
{/* <div> Icons made by <a href="https://www.freepik.com" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div> */ }
