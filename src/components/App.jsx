import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems]= React.useState([]);
  const [state, setState]= React.useState({title:"", content:"" });

  function handleChange(evt)
  { const {name, value} = evt.target;
    setState((preVal) => ({...preVal, [name]: value}));}


  function handleClick(state)
  { //A condition to check for empty notes. Boolean for empty string returns false.
    if(Boolean(state.title) && Boolean(state.content))
    {setItems((preVal) => [...preVal, {title: state.title, content: state.content}]);
     setState({title: "", content: ""})}}

  function deleteOne(id)
  {setItems((preVal) => preVal.filter((item, key) => key!==id))
  }
  //This function recives the element to be edited from the edit button and triggers 
  // the state to be equal to that element in the textarea and then deleteing that element
  //from the array so it could be recreated.
  function editOne(id, content, title)
  {setState({title, content});
   deleteOne(id);}
 
  return (
    <div>
      <Header />
      <CreateArea onClick={handleClick} handleChange={handleChange} state={state}/>
      {items.map((item, key) => <Note key={key} id={key} title={item.title} content={item.content} onDelete={deleteOne} onEdit={editOne}/> )}
      <Footer />
    </div>
  );
}

export default App;
