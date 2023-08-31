import React from "react";
import "../App.css";

const Root = ({ tree }) => {
  console.log(tree);
  const [visible, setVisible] = React.useState(false);

  const handleAddChild = () => {};

  return (
    <>
      <div className="nodeContainer">
        <div className="node">
          <button
            onClick={() => setVisible(!visible)}
            style={{ padding: "5px" }}
          >
            {visible ? "-" : "+"}
          </button>
          <h3>{tree.name}</h3>
        </div>
        <button onClick={handleAddChild}>Add Child</button>
      </div>
      {/* <div style={{visibility:{visible ? "visible" : "hidden"}}}>
      </div> */}
      {visible && <div className="childBlock">
          {tree.children && tree.children.map((el, i)=>{
            return <div style={{marginLeft: "20px"}}>
              <Root key={i} tree={el}/>
            </div>
          })}
        </div>}
    </>
  );
};

export default Root;
