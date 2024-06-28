// import React from 'react'
// import Todo from './component/Todo'
// import Profile from './component/Profile'
// import Recepi from './component/Recepi'

// const App = () => {
 


//   return (
//     <div >
// {/* <Todo/> */}
// {/* <Profile/> */}
// <Recepi/>
//     </div>
//   )
// }

// export default App



// src/App.js
import React, { useState } from 'react';
import Money from './component/Money';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const handleAddTransaction = () => {
    if (text !== '' && amount !== 0) {
      setTransactions([...transactions, { text, amount: parseFloat(amount) }]);
      setText('');
      setAmount(0);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Money Tracker</h2>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Add New Transaction</h3>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 mb-2 border rounded"
          />
          <button
            onClick={handleAddTransaction}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Add Transaction
          </button>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Transactions</h3>
          <ul>
            {transactions.map((transaction, index) => (
              <li key={index} className="flex justify-between p-2 border-b">
                <span>{transaction.text}</span>
                <span
                  className={`${
                    transaction.amount < 0 ? 'text-red-500' : 'text-green-500'
                  }`}
                >
                  {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Money/>
    </div>
  );
}

export default App;





























// import React, { useState } from 'react';

// function App() {
//   const [input, setInput] = useState("");
//   const [result, setResult] = useState("");

//   const handleClick = (value) => {
//     setInput(input + value);
//   };

//   const handleClear = () => {
//     setInput("");
//     setResult("");
//   };

//   const handleCalculate = () => {
//     try {
//       setResult(eval(input).toString());
//     } catch (error) {
//       setResult("Error");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
//         <h1 className="text-2xl font-bold mb-4 text-center">Calculator</h1>
//         <div className="mb-4 p-2 bg-gray-200 text-right text-2xl rounded">
//           {input || "0"}
//         </div>
//         <div className="mb-4 p-2 bg-gray-200 text-right text-2xl rounded">
//           {result || "0"}
//         </div>
//         <div className="grid grid-cols-4 gap-2">
//           {["7", "8", "9", "/"].map((item) => (
//             <button
//               key={item}
//               className="bg-gray-300 p-4 rounded-lg"
//               onClick={() => handleClick(item)}
//             >
//               {item}
//             </button>
//           ))}
//           {["4", "5", "6", "*"].map((item) => (
//             <button
//               key={item}
//               className="bg-gray-300 p-4 rounded-lg"
//               onClick={() => handleClick(item)}
//             >
//               {item}
//             </button>
//           ))}
//           {["1", "2", "3", "-"].map((item) => (
//             <button
//               key={item}
//               className="bg-gray-300 p-4 rounded-lg"
//               onClick={() => handleClick(item)}
//             >
//               {item}
//             </button>
//           ))}
//           {["0", ".", "=", "+"].map((item) => (
//             <button
//               key={item}
//               className={`bg-gray-300 p-4 rounded-lg ${item === "=" && "col-span-2"}`}
//               onClick={item === "=" ? handleCalculate : () => handleClick(item)}
//             >
//               {item}
//             </button>
//           ))}
//           <button
//             className="bg-red-500 p-4 rounded-lg col-span-4 text-white"
//             onClick={handleClear}
//           >
//             Clear
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
