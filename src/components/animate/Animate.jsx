import { useState } from "react";
import Button from "@mui/material/Button";
import SCHEDULE_BY_FIFO from "../../algorithms/fifo";
import "../../css/animate.css";
import { indexToLetter } from "../../utils/functions";

function Animate({ jobs }) {
  const [scheduledJobs, setScheduledJobs] = useState([]);
  // const jobLabels = [...jobs];
  const COLORS = [
    ["rgba(255, 99, 132,0.2)", "rgba(255, 99, 132,1)"],
    ["rgba(54, 162, 235,0.2)", "rgba(54, 162, 235,1)"],
    ["rgba(75, 192, 192,0.2)", "rgba(75, 192, 192,1)"],
    ["rgb(242 232 109 / 30%)", "rgb(242 232 109 / 100%)"],
    ["rgba(160,99,255,0.2)", "rgba(160,99,255,1)"],
    ["rgba(218,191,255,0.2)", "rgba(218,191,255,1)"],
    ["rgb(127 222 255 / 30%)", "rgb(127 222 255 / 100%)"],
    ["rgb(198 236 174 / 30%)", "rgb(198 236 174 / 100%)"],
    ["rgb(245 26 164 / 30%)", "rgb(245 26 164 / 100%)"],
    ["rgb(39 193 75 / 30%)", "rgb(39 193 75 / 100%)"],
  ];

  const schedule = () => {
    setScheduledJobs([]);
    // setScheduledJobs(SCHEDULE_BY_FIFO(jobs));

    setTimeout(() => setScheduledJobs(SCHEDULE_BY_FIFO(jobs)), 0.5);
  };

  return (
    <div style={{ padding: "1rem", backgroundColor: "#222", flexGrow: "1" }}>
      <div style={{ display: "flex" }}>
        {jobs.map((job, index) => (
          <div
            key={index}
            style={{
              backgroundColor: `${COLORS[job.colorIndex][0]}`,
              color: `${COLORS[job.colorIndex][1]}`,
              fontSize: "150%",
              width: "5rem",
              padding: "0.5rem 1rem",
              textAlign: "center",
              marginRight: "0.5rem",
              borderRadius: "0.2rem",
              // outline: `0.1rem solid ${COLORS[index][1]}`,
              fontFamily: "Google Sans",
            }}
          >
            {job.label}
          </div>
        ))}
      </div>
      <br />
      <Button variant="outlined" onClick={() => schedule()}>
        run
      </Button>
      <br />
      <div style={{ display: "flex" }}>
        {scheduledJobs.map((job, index) => (
          <div
            key={index}
            style={{
              // backgroundColor: `${COLORS[index][0]}`,
              backgroundColor: `${COLORS[job.colorIndex][0]}`,
              // color: `${COLORS[index][1]}`,
              color: `${COLORS[job.colorIndex][1]}`,
              // color: "#111",
              fontSize: "150%",
              // padding: "0.5rem 1rem",
              height: "2rem",
              lineHeight: "2rem",
              textAlign: "center",
              marginRight: "0.5rem",
              borderRadius: "0.2rem",
              fontFamily: "Google Sans",
              opacity: 0,
              width: 0,
              // outline: `0.1rem solid ${COLORS[index][1]}`,
              cursor: "pointer",
              "--final-width": `${job["runTime"] * 1.5}rem`,
              animation: `run ${job["runTime"] * 0.1}s linear ${
                job["animationDelay"] * 0.1
              }s forwards`,
            }}
          >
            {job.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Animate;
