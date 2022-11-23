import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";

import Settings from "./components/settings/Settings";
import Animate from "./components/animate/Animate";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Settings />
      <Animate />
    </div>
  );
}

export default App;
