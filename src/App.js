import './App.css';
import { mdiCog } from '@mdi/js';
import './imagelab-block'
import React, { useState } from "react";
import { BlocklyWorkspace } from "react-blockly";
import { MY_TOOLBOX } from './toolboxConfiguration';

function App() {
  const [xml, setXml] = useState();

  const initialXml =
    ``;
  return (
    <BlocklyWorkspace
    className="fill-height"
    toolboxConfiguration={MY_TOOLBOX} // this must be a JSON toolbox definition
    initialXml={initialXml}
    onXmlChange={setXml}
    workspaceConfiguration={{
      grid: {
        spacing: 20,
        length: 3,
        colour: "#ccc",
        snap: true,
      },
    }}
  />
  )
}

export default App;