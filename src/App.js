import { useState } from "react";
import "./App.css";
import { data } from "./Data/data";

function App() {
//  const data = ["doing yoga","drinking tea","bathing","eating breakfast","start learning","doing type writing practice"];
 const [arr,setArr]=useState(data);
 const [msg,setMsg]=useState();

 const handleNewData = (e)=>{
//  e.preventDefault();
//  data.push(newdata);
const add = {
 msg:msg
}
//  setArr(data,newdata);
  setArr([...arr,add])
 }

 const handleRemove = (dataId)=>{
 const remaingData = arr.filter((d,idx)=>idx !==dataId)
 setArr(remaingData)
 }
  return (
    <div className="App">
      <div className="container">
        <h1 id="head">Todo's</h1>
        <div className="input-box">
          <input type="text" value={msg} onChange={(e)=>setMsg(e.target.value)}/>
          <i class='bx bx-add-to-queue' onClick={handleNewData}></i>
        </div>
        {
          arr.length!==0 ? <div className="data-box">
        
          {
             arr.map((d,idx)=>(
            <div className="content-box" key={idx}>
            
              <p>{d.msg}</p>
              
              <i class='bx bx-trash-alt' onClick={()=>handleRemove(idx)}></i>

            </div>
          
            ))
            
          }
        
          
          </div>
          :<></>
        }
        
        </div>
    </div>
  );
}

export default App;
