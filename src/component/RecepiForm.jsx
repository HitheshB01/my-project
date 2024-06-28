import React, { useState } from "react";

const RecepiForm = ({getrecepi}) => {
    const [recepi,setRecepi]= useState([])
    console.log(recepi)
    const [newTitle,setNewTitle] = useState('')

    // const [ingr,setIngr]=useState([])
    const [newingr,setNewingr]=useState('')

    // const [inst,setInst]=useState([])
    const [newinst,setNewinst]=useState('')

    const fetchdata= ()=>{



      const newrecepi = {
        title:newTitle,
        ingredients:newingr,
        instruction:newinst
      }

      // setRecepi([...recepi,newrecepi])
      getrecepi(newrecepi)
        // setTitle([...title,newTitle])
        // setIngr([...ingr,newingr])
        // setInst([...inst,newinst]
    }
  return (
    <div className="flex flex-col gap-3">
      <div>enter the recepi details</div>
      <input className="w-24" type="text" placeholder="title"  onChange={(e)=>setNewTitle(e.target.value)}/>
      <textarea className="w-60" name="" id="" placeholder="Ingredients"  onChange={(e)=>setNewingr(e.target.value)}></textarea>
      <textarea className="w-80" name="" id="" placeholder="Instruction"  onChange={(e)=>setNewinst(e.target.value)}></textarea>
      <button className="p-1 w-20 bg-orange-800" onClick={fetchdata}>submit</button>
    </div>
  );
};

export default RecepiForm;
