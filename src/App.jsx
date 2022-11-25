import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import SJF from "./algorithms/sjf";

import Settings from "./components/settings/Settings";
import Animate from "./components/animate/Animate";

function App() {
  const [jobs, setJobs] = useState([]);

  // console.log(
  //   SJF([
  //     { arrivalTime: 4, runTime: 1 },
  //     { arrivalTime: 7, runTime: 2 },
  //     { arrivalTime: 1, runTime: 2 },
  //     { arrivalTime: 12, runTime: 2 },
  //   ])
  // );

  SJF([
    { arrivalTime: 4, runTime: 1 },
    { arrivalTime: 7, runTime: 2 },
    { arrivalTime: 1, runTime: 2 },
    { arrivalTime: 12, runTime: 2 },
  ]);

  return (
    <div className="App">
      <Settings jobs={jobs} setJobs={setJobs} />
      <Animate jobs={jobs} />
    </div>
  );
}

export default App;
