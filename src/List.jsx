const List = (props) => {
  return (
    <div className="main-div">
      <ul className="child-div">
      <div className="showItems" style={{ position: "relative" }}>
        {props.listarr.map((item, index) => {
          return (
            <li className="eachItem">
              <h3 style={{ "backgroundColor" : "rgb(220, 41, 202)"}} className={item.completeadded ? "strike" : ""}>{item.name}</h3>
                
              <div className="eachkander">
              <div
                  className={
                    item.completeadded ? " pure-button pure-button-disabled" : "todo-btn "
                  }
                  onClick={() => {
                    props.onEdit(item, index);
                  }}
                >
                <i class=" fa fa-regular  fa-edit "></i>
                </div>
                <div
                  className={
                    item.completeadded ? " pure-button pure-button-disabled" : "todo-btn"
                  }
                  onClick={() => {
                    props.onDelete(index);
                  }}
                >
                 <i
                    className="fa fa-regular fa-circle-xmark"
                  ></i>
                </div>
                <div
                  className={
                    item.completeadded ? " pure-button pure-button-disabled" : "todo-btn"
                  }
                  onClick={() => {
                    props.onComplete(index);
                  }}
                >
                  {" "}
                  {item.completeadded ? "DONE"
                   : <i class="fa fa-regular fa-circle-check"></i>}
                </div>
                </div>
              
              
              
            </li>
          );
        })}
         <div className="showItems">
          <button className="btn" onClick={props.clearall}>
            Clear All
          </button>
        </div>

      </div>
      
      </ul>
      <br />
     
    </div>
    
  );
};
export default List;
