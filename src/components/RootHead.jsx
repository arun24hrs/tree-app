import React from 'react'

const RootHead = ({setVisible, visible, tree, handleAddChild}) => {
  return (
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
  )
}

export default RootHead