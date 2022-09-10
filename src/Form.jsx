function Form(props) {
  return (
    <div className="main-div">
      
      <div className="addItems" style={{"position": "relative"}}>
      <input
        type="text"
        value={props.input}
        onChange={(e) => {
          props.setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          props.editindex ? props.onDone(props.input, props.editindex) : props.onAdd(props.input)
          

        }}
      >
        {props.editindex ? <i className="fa fa-edit todo-btn" style={{position: "absolute", top: "29px", right: "10px"}}></i>
        : <i className="fa fa-circle-plus todo-btn" style={{position: "absolute", top: "29px", right: "10px"}} ></i>}
      </button>
      </div>
    
    </div>
  );
}
export default Form;
