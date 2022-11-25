export default function SJF(jobs) {
  let jobs_ = [...jobs];

  jobs_.sort((jobA, jobB) => jobA["arrivalTime"] - jobB["arrivalTime"]);

  // temp_array for jobs that arrived while a job was running
  let final = [];
  let temp = [];

  let curr = jobs_.shift();
  let prevEndTime = curr["arrivalTime"] + curr["runTime"];

  while (curr) {
    // push current running job to the final list
    final.push(curr);

    // get all jobs that arrived while current job was running
    // add if statement; jobs may be empty at this point, perhaps
    if (jobs_.length != 0) {
      for (let j = 0; j < jobs_.length; j++) {
        if (jobs_[j]["arrivalTime"] <= prevEndTime) {
          temp.push(jobs_[j]);
        }
      }
    }

    // remove the jobs that that arrive while current from was running (Transer was done in previous code)
    for (item of temp) jobs_.shift();

    // sort those that arrived while current job was running, by runTime (getting the SJF)
    if (temp.length != 0) {
      temp.sort((jobA, jobB) => jobA["runTime"] - jobB["runTime"]);
    }

    // get the job that is supposed to run next : the Shortest Job
    curr = temp.shift();

    // update prevEndTime of the job to be scheduled (curr) from temp if any
    // else pick from the jobs_ array
    if (curr) {
      prevEndTime += curr["runTime"];
    } else {
      if (jobs_.length) {
        curr = jobs_.shift();
        prevEndTime = curr["arrivalTime"] + curr["runTime"];
      }
    }
  }
  return final;
}
