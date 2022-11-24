import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";

import Settings from "./components/settings/Settings";
import Animate from "./components/animate/Animate";

function App() {
  const [jobs, setJobs] = useState([]);

  return (
    <div className="App">
      <Settings jobs={jobs} setJobs={setJobs} />
      <Animate jobs={jobs} />
    </div>
  );
}

export default App;
