import React from "react";
import "../App.css";
import RootHead from "./RootHead";

const Root = ({ tree }) => {
  console.log(tree);
  const [visible, setVisible] = React.useState(false);

  const handleAddChild = () => {};

  return (
    <>
      <RootHead setVisible={setVisible} visible={visible} tree={tree} handleAddChild={handleAddChild}/>
      {/* <div style={{visibility:{visible ? "visible" : "hidden"}}}>
      </div> */}
      {visible && <div className="childBlock">
          <RootHead setVisible={setVisible} visible={visible} tree={tree.children[0]} handleAddChild={handleAddChild}/>
        </div>}
    </>
  );
};

export default Root;
