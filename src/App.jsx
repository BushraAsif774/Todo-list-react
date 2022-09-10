import { useState } from "react";
import "./App.css";
import Form from "./Form";
import List from "./List";

function App() {
  const [input, setInput] = useState("");
  const [listarr, setListarr] = useState([]);
  const [editindex, setEditindex] = useState(null);
  // const [completed, setCompleted] = useState(true);

  const onAdd = (todo) => {
    const AllInputData = {
      name: todo,
      completeadded: false,
    };
    setListarr([...listarr, AllInputData]);
    setInput("");
  };
  const onDelete = (index) => {
    console.log("Delete executed having id=" + index);
    const listAfterDelete = listarr.filter((item, listarrId) => {
      return listarrId != index;
    });
    setListarr(listAfterDelete);
  };
  const onEdit = (item, index) => {
    console.log("Edit Excecuted with id: " + index);

    setInput(item.name);
    setEditindex(index);
  };
  const onDone = (todoedit, index) => {
    console.log("done executed eith id: " + index+ "and todo is "+ todoedit);
    const newarrAfterDone = [...listarr];
    newarrAfterDone[index].name = todoedit;
    setListarr(newarrAfterDone);
    setEditindex(null);
    setInput("");
  };
  const onComplete = (index) => {
    console.log("complete executed at index: "+index);
    //first method
    const newitemcomp = [...listarr];
    newitemcomp[index].completeadded = true;
    setListarr(newitemcomp);
    

//second method
  //   const newitemcomp= listarr.map((element , id)=>{
  //     if (id === index){
  //         return {...element, completeadded:true}
          
  //     }
  //     return element;
  // });
  // setListarr(newitemcomp);

//3rd (not correct)
    // console.log("Complete Executed at index :" + index);

    // const list_with_complete = listarr.map((element, id) => {
    //   console.log(id);
    //   if (id === index) {
    //     return [...listarr, element, { is_complete: "true" }];
    //   }
    //   return element.is_complete;
    // });
    // setListarr(list_with_complete);
    // console.log(listarr);
   
    // console.log("complete is " + completed + " at index: " + index);

    
  };

  const clearall = () => {
    setListarr([]);
  };

  return (
    <div className="App">
      <Form
        input={input}
        setInput={setInput}
        onAdd={onAdd}
        editindex={editindex}
        onDone={onDone}
        listarr={listarr}
      />
      <List
        listarr={listarr}
        onDelete={onDelete}
        onEdit={onEdit}
        editindex={editindex}
        setEditindex={setEditindex}
        onComplete={onComplete}
        clearall={clearall}
        
      />
    </div>
  );
}

export default App;
