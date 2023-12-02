import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useAppContext } from './context/appContext';


function App() {
  const {time,todos, submitHandler, clickHandler} = useAppContext()
 

  return (
    <div className="App flex flex-col items-center p-6 gap-3 bg-secondary h-screen w-screen" data-theme="corporate">

       <form onSubmit={submitHandler}>
          <label className="label">
            <span className="label-text ">What is your to-do?</span>
          </label>
        <div className="form-control w-full max-w-xs flex flex-row gap-1">
          <div className="input_container flex"></div>
          <input
            name="todo"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <button type="submit" className="btn btn-primary flex flex-row">
            Submit
          </button>
        </div>
      </form>

      {todos.map((i,j) => 
        <div key={j}  className=" flex flex-row justify-between p-6 w-1/2 h-20 card bg-base-300 rounded-box place-items-center">
          <p>{i.time}</p>
          <p>{i.todoInput}</p>
        
        <button onClick={() => clickHandler(i)} className="btn w-12 h-3 btn-outline btn-circle hover:bg-error">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </div>
      )}
    </div>
  );
}

export default App;
