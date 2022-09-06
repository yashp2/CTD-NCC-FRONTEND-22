import notf from "./404.jpg";
import "./Notfound.css";
function Notfound(){
    return(
        <div  className=' nf d-flex justify-content-center align-items-center'>
        <img src={notf} alt="" srcset="" className="nfimg"/>

        </div>
    )
}

export default Notfound ;