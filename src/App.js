import React from "react";
import logo from "./logo.png";
import "./App.css";
import { SkillProvider, SkillTreeGroup, SkillTree } from 'beautiful-skill-tree';
import { motion, harmony, cataclysm } from "./data/data";

function App() {
  return (
    <div className="App">
      <div style={{ width: "500px", height: "150px", margin: "0 auto" }}>
        <React.Fragment>
          <SkillTree treeId="motion" title="Motion" data={motion} />
          <SkillTree treeId="harmony" title="Harmony" data={harmony} />
          <SkillTree treeId="cataclysm" title="Cataclysm" data={cataclysm} />
        </React.Fragment>
        <img
          style={{ width: "500px", height: "200px" }}
          src={logo}
          alt="borderlands logo."
        />
      </div>
    </div>
  );
}

export default App;
