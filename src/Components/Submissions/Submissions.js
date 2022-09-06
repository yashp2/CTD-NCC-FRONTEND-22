import "./Submissions.css";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AceEditor from "react-ace";
import { useState } from "react";

function Submissions() {
  const [showmodal , Switchmodal]=useState(false);
  const [modal_body , change_content]=useState("");
  let ind=0;
    const s_data=[{
        sr:1,
        s_time:"10:45",
        s_score:100,
        s_view:'#include <bits/stdc++.h>\n#define ll long long \nusing namespace std;\n\nll int gcd(ll int x, ll int y) {\n    if (y == 0)\n      return x;\n      return gcd(y, x%y);\n  }\n  ll int lcm(ll int x,ll int y){\n      return (x*y)/gcd(x,y);\n  }\n  \nmain() { \n  // your code goes here  \n   ll int n;  \n     cin>>n;  \n     ll int arr[66]={0};  \n     ll int mf=0;  \n     ll int mod=1000000007;  \n     for (int i = 1; i <=n; i++)  \n     {  \n        ll int ci=i;  \n        while(ci){  \n            if(ci%2)arr[mf]++;  \n            ci/=2;  \n            mf++;  \n        }  \n        mf=0;  \n     }  \n   //  for (auto &&i : arr)  \n   //  {    \n  //     cout<<i<<" ";    \n  //  }    \n     ll int ans=0;    \n     mf=1;    \n     for (int i = 0; i < 66; i++)    \n       {      \n          arr[i]%=mod;      \n          mf%=mod;      \n            ans+=(arr[i]*mf)%mod;      \n            ans%=mod;      \n            mf*=10;      \n         }      \n         cout<<ans<<endl;      \n      return 0;      \n    }',
        s_lang:"c"
    },{
        sr:2,
        s_time:"01:45",
        s_score:80,
        s_view:"abc2",
        s_lang:"c"
    },{
        sr:3,
        s_time:"06:30",
        s_score:50,
        s_view:"abc3",
        s_lang:"c"
    },{
        sr:4,
        s_time:"09:45",
        s_score:0,
        s_view:"abc4",
        s_lang:"c"
    },{
        sr:5,
        s_time:"05:15",
        s_score:60,
        s_view:"abc",
        s_lang:"c"
    },{
        sr:6,
        s_time:"08:45",
        s_score:10,
        s_view:"abc",
        s_lang:"c"
    },{
        sr:6,
        s_time:"08:45",
        s_score:10,
        s_view:"abc",
        s_lang:"c"
    },{
        sr:6,
        s_time:"08:45",
        s_score:10,
        s_view:"abc",
        s_lang:"c"
    },{
        sr:6,
        s_time:"08:45",
        s_score:10,
        s_view:"abc",
        s_lang:"c"
    }];

    function handleclick(x){
      x-=1;
      let z=s_data[x].s_view;
      console.log(z);
      
      Switchmodal(true);
      change_content(z);
      
    }
  return (
    <div className="submissions_pg d-flex flex-column justify-content-start align-items-center">
      <Card className="submission_top_c text-white m-3 mt-4">
        <p className="d-flex flex-row justify-content-around align-items-center submission_top m-1 p-1 text-white">
          <div className="p-0 m-0" >
            <h5 className="p-0 m-0" >
              <a href="http://youtube.com" className="text-white">1</a>
            </h5>
          </div>
          <div className="p-0 m-0">
            <h5 className="p-0 m-0">
              <a href="http://youtube.com" className="text-white">2</a>
            </h5>
          </div >
          <div className="p-0 m-0">
            <h5 className="p-0 m-0">
              <a href="http://youtube.com" className="text-white">3</a>
            </h5>
          </div >
          <div className="p-0 m-0">
            <h5 className="p-0 m-0">
              <a href="http://youtube.com" className="text-white">4</a>
            </h5>
          </div>
          <div className="p-0 m-0">
            <h5 className="p-0 m-0">
              <a href="http://youtube.com" className="text-white">5</a>
            </h5>
          </div>
          <div className="p-0 m-0">
            <h5 className="p-0 m-0">
              <a href="http://youtube.com" className="text-white">6</a>
            </h5>
          </div>
        </p>
      </Card>
      {/* <Button onClick={()=>{Switchmodal(true)}}>hello</Button> */}
      <Card className="submissions-m-div m-3 bg-transparent text-white">
        <Card className="d-flex flex-row justify-content-around align-items-center bg-transparent br-2 m-2 p-1">
            <div><h4>Sr No.</h4></div>
            <div><h4>Time</h4></div>
            <div><h4>Score</h4></div>
            <div><h4>View</h4></div>
        </Card>
        <Card className="bg-transparent submissions-m-div-bottom">
            {s_data.map((obj)=>{
              var sr_no=obj.sr;
              // console.log(sr_no);
              
                return(
                    <Card className="d-flex flex-row justify-content-around align-items-center bg-transparent br-1 m-1 p-1">
                <div id={`sr_${obj.sr}`}><h4>{obj.sr}</h4></div>
                <div><h4>{obj.s_time}</h4></div>
                <div><h4>{obj.s_score}</h4></div>
                <div><h4><Button onClick={()=>{
                handleclick(obj.sr);
                }}>View</Button></h4></div>
                
                </Card>
                )
            })}
        </Card>
      </Card>
      <Modal
        size="lg"
        show={showmodal}
        onHide={() => Switchmodal(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        
      >
        <Modal.Header closeButton className="bg-custom text-white ">
          <Modal.Title id="example-modal-sizes-title-lg" className="text-center">
            View Submission
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id="modal_body" className="bg-custom">
          {/* <h5 id="modal_body_h">{modal_body}</h5> */}
          <div className="s_pg_ace_e ">
            <AceEditor
            mode="c_cpp"
            theme="monokai"
            name="UNIQUE_ID_OF_DIV"
            style={{ height: "100%", width: "100%"}}
            value={modal_body}
            editorProps={{ $blockScrolling: true }}
            setOptions={{
              tabSize: 1,
              showPrintMargin: false, // boolean: true if show the vertical print margin
              showGutter: true, // boolean: true if show line gutter
              wrap: true,
              readOnly:true
            }}
            />
            </div> 
        </Modal.Body>
        <Modal.Footer className="bg-custom">
          <Button variant="secondary" onClick={()=>{navigator.clipboard.writeText(modal_body);}}>
            Copy Code
          </Button>
          <Button variant="primary" onClick={()=>Switchmodal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      
    </div>
  );
}

export default Submissions;
