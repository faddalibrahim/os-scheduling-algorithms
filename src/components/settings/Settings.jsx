import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { indexToLetter } from "../../utils/functions";

export default function Settings({ jobs, setJobs }) {
  const ARRIVAL_TIME = "arrivalTime";
  const RUN_TIME = "runTime";
  const ANIMATION_DELAY = "animationDelay";
  const LABEL = "label";
  const COLOR_INDEX = "colorIndex";

  // const COLORS = [
  //   ["rgba(255, 99, 132,0.2)", "rgba(255, 99, 132,1)"],
  //   ["rgba(54, 162, 235,0.2)", "rgba(54, 162, 235,1)"],
  //   ["rgba(75, 192, 192,0.2)", "rgba(75, 192, 192,1)"],
  //   ["rgb(242 232 109 / 30%)", "rgb(242 232 109 / 100%)"],
  //   ["rgba(160,99,255,0.2)", "rgba(160,99,255,1)"],
  //   ["rgba(218,191,255,0.2)", "rgba(218,191,255,1)"],
  //   ["rgb(127 222 255 / 30%)", "rgb(127 222 255 / 100%)"],
  //   ["rgb(198 236 174 / 30%)", "rgb(198 236 174 / 100%)"],
  //   ["rgb(245 26 164 / 30%)", "rgb(245 26 164 / 100%)"],
  //   ["rgb(39 193 75 / 30%)", "rgb(39 193 75 / 100%)"],
  // ];

  const handleJobCountChange = (e) => {
    let currCount = jobs.length;
    let newJobCount = e.target.value;
    let newJobs = [];

    for (let j = 0; j < newJobCount; j++) {
      if (j < currCount) newJobs.push(jobs[j]);
      else
        newJobs.push({
          [ARRIVAL_TIME]: "",
          [RUN_TIME]: "",
          [ANIMATION_DELAY]: "",
          [LABEL]: indexToLetter(j),
          [COLOR_INDEX]: jobs.length,
        });
    }

    setJobs(newJobs);

    console.log(jobs);
  };

  const handleScheduleChange = (e) => {
    console.log(e.target.value);
  };

  const handleJobDetailsChange = (e, jobIndex, jobDetail) => {
    let newJobs = [...jobs];
    newJobs[jobIndex][jobDetail] = Number(e.target.value);

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
        width: "23vw",
        padding: "1rem",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        padding: "1rem 1.8rem",
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
            label={
              <small
                style={{
                  fontFamily: "Product Sans",
                  fontSize: "100%",
                }}
              >
                FIFO
              </small>
            }
          />
          <FormControlLabel
            value="SJF"
            control={<Radio size="small" />}
            label={
              <small
                style={{
                  fontFamily: "Product Sans",
                  fontSize: "100%",
                }}
              >
                SJF
              </small>
            }
          />
          <FormControlLabel
            value="STC"
            control={<Radio size="small" />}
            label={
              <small
                style={{
                  fontFamily: "Product Sans",
                  fontSize: "100%",
                }}
              >
                STC
              </small>
            }
          />
          <FormControlLabel
            value="RR"
            control={<Radio size="small" />}
            label={
              <small
                style={{
                  fontFamily: "Product Sans",
                  fontSize: "100%",
                }}
              >
                RR
              </small>
            }
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
        {jobs.map((job, jobIndex) => (
          <div style={{ display: "flex" }}>
            <TextField
              id="outlined-number"
              label="Arrival Time"
              type="number"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) =>
                handleJobDetailsChange(e, jobIndex, ARRIVAL_TIME)
              }
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
              onChange={(e) => handleJobDetailsChange(e, jobIndex, RUN_TIME)}
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
