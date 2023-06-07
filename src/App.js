import './App.css';
import './imagelab-block'
import React, { useState } from "react";
import { BlocklyWorkspace } from "react-blockly";
import { MY_TOOLBOX } from './toolboxConfiguration';
import { Navbar, Alignment, Button, Card, Elevation } from '@blueprintjs/core';
import './CustomBlockly.css';

function App() {
  const [xml, setXml] = useState("");

  const workspaceConfiguration = {
    scrollbars: true,
    trashcan: true,
    sounds: true,
    oneBasedIndex: true,
    zoom: {
      controls: true,
      wheel: false,
      startScale: 0.6,
      maxScale: 2,
      minScale: 0.4,
      scaleSpeed: 1.2,
    },
    renderer: "zelos",
}

  return (
    <>
      <Navbar>
          <Navbar.Group align={Alignment.LEFT}>
              <Navbar.Heading>ImageLab</Navbar.Heading>
              <Navbar.Divider />
              <Button className="bp4-minimal" icon="home" text="Home" />
              <Button className="bp4-minimal" icon="document" text="Files" />
          </Navbar.Group>
      </Navbar>
      <div className='row'>
        <BlocklyWorkspace
          className="fill-height"
          toolboxConfiguration={MY_TOOLBOX} // this must be a JSON toolbox definition
          initialXml={xml}
          onXmlChange={setXml}
          workspaceConfiguration={workspaceConfiguration}
        />
        <div className='panel'>
          <h1>Preview</h1>
          <Card interactive={true} elevation={Elevation.TWO}>
            <h5><a href="#">Card heading</a></h5>
            <p>Card content</p>
            <Button>Submit</Button>
          </Card>
          <Card interactive={true} elevation={Elevation.TWO}>
            <h5><a href="#">Card heading</a></h5>
            <p>Card content</p>
            <Button>Submit</Button>
          </Card>
        </div>
      </div>
  </>
  )
}

export default App;