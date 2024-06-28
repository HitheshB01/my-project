import React, { useState } from 'react'

const Todo = () => {

  // const [ count, setCount] = useState(0)
  // const incr=()=> {
  //   setCount(count +1)
  // }

  // const decr=()=>{
  //   setCount(count-1)
  // }
const [todos, setTodos] = useState([])
const [newTodo, setNewtodo]= useState('')
 const addTodo =()=>{

  if (newTodo.trim() !== '') {
    setTodos([...todos, newTodo]);
    setNewtodo('');
  }
}
   
  return (
    <div className='p-1 bg-slate-500'>
      {/* <div className='p-1 ml-4 size-5'>{count}</div>
      <button className='p-1 border-zinc-700 border-2 m-3' onClick={incr}>incre</button>
      <button className='p-1 border-zinc-700 border-2'onClick={decr}>decre</button> */}

<div>todo application</div>

<div  className='p-1 border-zinc-700 border-2 m-3 w inline'><input value={newTodo} onChange={(e)=>setNewtodo(e.target.value)} type="text" className='p-1 w-20' placeholder='hello
' /></div>
<button  className='p-1 border-zinc-700 border-2 m-3' onClick={addTodo}>add</button>
<ul>
  {todos.map((todo,index)=>(
    <li key={index} className='p-1 border-zinc-700 border-2 m-3 w-28'>{todo}</li>
  ))}
</ul>
    </div>
  )
}

export default Todo



// import React, { useState } from 'react';

// const Todo = () => {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState('');

//   const addTodo = () => {
    
//     if (newTodo.trim() !== '') {
//       setTodos([...todos, newTodo]);
//       setNewTodo('');
//     }     
//   };

//   const removeTodo = (index) => {
//     const updatedTodos = todos.filter((_, i) => i !== index);
//     setTodos(updatedTodos);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
//         <h1 className="text-2xl mb-4">Todo List</h1>
//         <div className="flex mb-4">
//           <input
//             type="text"
//             value={newTodo}
//             onChange={(e) => setNewTodo(e.target.value)}
//             className="border p-2 rounded-l w-full"
//             placeholder="Add a new task"
//           />
//           <button onClick={addTodo} className="bg-blue-500 text-white p-2 rounded-r">
//             Add
//           </button>
//         </div>
//         <ul>
//           {todos.map((todo, index) => (
//             <li key={index} className="flex justify-between items-center mb-2">
//               <span>{todo}</span>
//               <button onClick={() => removeTodo(index)} className="bg-red-500 text-white p-1 rounded">
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Todo;
