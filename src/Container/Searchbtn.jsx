import React ,{useState} from 'react';
import MockData from '../MOCK_DATA.json'; 

const Searchbtn = () => {
const [state,setState]=useState("")
  return (
    <div>
        <input type="text"
        placeholder='Type_here...' 
        className="Search_btn"
        onChange={(e) =>{
            setState(e.target.value)
        }}
        />
       
        {MockData.filter((val) =>{
            if(state === ""){
                return val;
            }
            else if (
                 val.first_name.toLowerCase().includes(state.toLowerCase()) ||
                 val.last_name.toLowerCase().includes(state.toLowerCase()) ||
                 val.email.toLowerCase().includes(state.toLowerCase()) ||
                 val.gender.toLowerCase().includes(state.toLowerCase()) 
                 ){
                    return val ;}
                
        }).map((m) =>{
         return(<div className='show'>
         <span>{m.first_name}</span><span>{" "}</span>
         <span>{m.last_name}</span><span>{" "}</span>
         <span>{m.email}</span><span>{" "}</span>
         <span>{m.gender}</span><span>{" "}</span>
         <br/>
         <br/>
         </div>)

        })}
        
    </div>
  )
}

export default Searchbtn