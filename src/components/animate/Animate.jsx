import { useState } from "react";
import Button from "@mui/material/Button";

function Animate() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button variant="contained">run</Button>
    </div>
  );
}

export default Animate;
