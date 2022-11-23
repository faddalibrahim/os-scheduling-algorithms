import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Settings() {
  const [jobs, setJobs] = useState([]);
  const handleJobCountChange = (e) => {
    let currCount = jobs.length;
    let newJobCount = e.target.value;
    let newJobs = [];

    for (let j = 0; j < newJobCount; j++) {
      if (j < currCount) {
        newJobs.push(jobs[j]);
      } else {
        newJobs.push({ arrivalTime: "", runTime: "" });
      }
    }

    setJobs(newJobs);
  };

  const handleScheduleChange = (e) => {
    console.log(e.target.value);
  };

  const handleArrivalTimeChange = (e, index) => {
    let newJobs = [...jobs];
    newJobs[index].arrivalTime = e.target.value;

    setJobs(newJobs);

    console.log(jobs);
  };

  const handleRunTimeChange = (e, index) => {
    console.log(index, e.target.value);

    let newJobs = [...jobs];
    newJobs[index].runTime = e.target.value;

    setJobs(newJobs);

    console.log(jobs);
  };

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        alignItems: "start",
        height: "100vh",
        width: "20.5vw",
        padding: "1rem",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        padding: "1rem",
        overflowY: "auto",
      }}
    >
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">
          Scheduling Algorithm
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={(e) => handleScheduleChange(e)}
        >
          <FormControlLabel
            value="FIFO"
            control={<Radio size="small" />}
            label={<small>FIFO</small>}
          />
          <FormControlLabel
            value="SJF"
            control={<Radio size="small" />}
            label={<small>SJF</small>}
          />
          <FormControlLabel
            value="STC"
            control={<Radio size="small" />}
            label={<small>STC</small>}
          />
          <FormControlLabel
            value="RR"
            control={<Radio size="small" />}
            label={<small>RR</small>}
          />
        </RadioGroup>
      </FormControl>
      <br />
      <div style={{ width: "100%" }}>
        <TextField
          id="outlined-number"
          label="Number of Jobs"
          type="number"
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => handleJobCountChange(e)}
          fullWidth
        />
      </div>
      <br />
      <div>
        {jobs.map((job, index) => (
          <div style={{ display: "flex" }}>
            <TextField
              id="outlined-number"
              label="Arrival Time"
              type="number"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => handleArrivalTimeChange(e, index)}
            />
            <TextField
              id="outlined-number"
              label="Run Time"
              type="number"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              style={{ marginLeft: "0.5rem" }}
              onChange={(e) => handleRunTimeChange(e, index)}
            />
            <br />
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
