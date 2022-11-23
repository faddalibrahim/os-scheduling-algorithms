import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";

import Settings from "./components/settings/Settings";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Settings />
      {/* <Button variant="contained">run schedule</Button> */}
    </div>
  );
}

export default App;
