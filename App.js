import { useState } from 'react';
import './App.css';

function App() {
  
  const [inputData, updateData] = useState('');
  const [todo , updateTodo]=useState([])

  
  const addTodo =()=>{
    if(!inputData){
      
    }
    else{
      updateTodo([...todo, inputData])
      updateData('')
      
    }
  }
  
  const deletetodo=(id)=>{
    console.log(id);
  const uptodo = todo.filter((elements ,index) => {
return index !== id;
});
updateTodo(uptodo);
}

const  delAll=()=>{
updateTodo([])
}
  return (
  <div className="todo">
   <div className="class1"> <h1>Todo-App</h1>
    <input type="text" placeholder="Enter todo"
    value={inputData}
    onChange={(e)=>updateData(e.target.value)}
    
    />
    <button className="add" onClick={addTodo}>Add</button>
    </div>
   <div> 
     
       {
todo.map((elements ,index)=>{
  return(
<div className="class2" Key={index}>
      <h3 className="heading">{elements}</h3>
   <button className="delete" onClick={()=> deletetodo(index)}>Delete</button>
    </div>
  )
})
 }
    </div>
   
   
    <div>
      <button className="deleteall" onClick={delAll}>Delete All</button>
    </div>
    </div>
  );
}

export default App;
