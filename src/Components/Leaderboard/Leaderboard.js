import "./Leaderboard.css";
import { Form, Button,} from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Table_row from './table_row'
import PaginatedItems from "./Paginator";

function Leaderboard(props) {
    let si=props.s;
    let ei=props.e;
    const l_data=[{
        sr:1,
        s_time:"10.45",
        s_score:45,
        
        s_view:"abc"
    },
    {
        sr:2,
        s_time:"11:15",
        s_score:100,
        s_view:"abc"
    },
    {
        sr:1,
        s_time:"10.45",
        s_score:45,
        s_view:"abc"
    },
    {
        sr:1,
        s_time:"10.45",
        s_score:45,
        s_view:"abc"
    }]
    
    
    return (
    <div className="leaderboard-pg d-flex justify-content-center align-items-center flex-column">
      <PaginatedItems itemsPerPage={10} />
    </div>
  );
}

export default Leaderboard;
