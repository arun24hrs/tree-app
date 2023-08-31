import './App.css';
import React from 'react'
import Root from './components/Root';

const initTreeView = {
  name: "root",
  children: [
    {
      name: "child1",
      children: [
        { name: "child1-child1", data: "c1-c1 Hello" },
        { name: "child1-child2", data: "c1-c2 JS" },
      ],
    },
    { name: "child2", data: "c2 World" },
  ],
};
function App() {
  const [treeView, setTreeView] = React.useState(initTreeView);
  const [output, setOutput] = React.useState("");

  const children = (onAddChild) => {
    setTreeView(onAddChild);
  };

  const handleClick = () => {
    console.log(treeView);
  }

  return (
    <div className='container'>
      <Root tree={treeView}/>
      <button onClick={handleClick}>Export</button>
      <p></p>
    </div>
  );
}

export default App;
