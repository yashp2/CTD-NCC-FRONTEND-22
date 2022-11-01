import "./Leaderboard.css";
import { Form, Button,} from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Table_row from './table_row'
import PaginatedItems from "./Paginator";
import { useEffect, useState } from "react";

function Leaderboard(props) {

    const [items,uitems]=useState([{hello:"hello"}]);
    var axios = require('axios');
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem('token');

    useEffect(() => {
      const loadData = async () => {
          setLoading(true);
          // console.log(localStorage.getItem('token'));
          var config = {
              method: 'get',
              url: 'http://127.0.0.1:8000/NCC/allranks',
              headers: {
                  'Authorization': `${token}`
              }
          };
  
          const List = await axios(config)
          //   .catch(function (error) {
          //       console.log(error);
          //     });
          console.log('List', List.data)
          //   .then(function (response) {
          //     console.log(JSON.stringify(response.data));
          //   })
          // UpdateQdata(questionsList.data);
          let lis=Object.keys(List.data);
          let lis1=List.data;
          console.log("lis",typeof(lis));
          let tempdata=[];
          for(let i=0;i<lis.length;i++){
            tempdata.push({Rank:`${i+1}`,...lis1[lis[i]],Username:lis[i]});
            console.log(lis[i]);
          }
          console.log("temp",tempdata);
          console.log(items);
          // updtitems(tempdata);
        //   items=tempdata;
            uitems(tempdata);
          console.log(items);
  
          setLoading(false);
      }
      loadData();
  }, [token]);
  var propsd={
    items:items,
    itemsPerPage:10
}
if(loading){
    return(<>Loading...</>)
}
    return (
    <div className="leaderboard-pg d-flex justify-content-center align-items-center flex-column">
      <PaginatedItems {...propsd}/>
      {/* <PaginatedItems itemsPerPage={10}/> */}
    </div>
  );
}

export default Leaderboard;
