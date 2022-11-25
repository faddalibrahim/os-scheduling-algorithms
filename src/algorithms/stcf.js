export default function STCF(jobs) {
  let jobs_ = [...jobs];

  jobs_.sort((jobA, jobB) => jobA["arrivalTime"] - jobB["arrivalTime"]);

  let final = [];
  let temp = [];

  // take note of how many seconds is left for each process
  //

  left, (right = 0), 1;

  while (true) {
    // is the next in line process interrupting?
    // thus, startOfNext < endOfPrev
    if (jobs_[1]["arrivalTime"] < jobs_[0]["runTime"]) {
      let timeElapsed = jobs_[1]["arrivalTime"] - jobs_[0]["arrivalTime"];

      // new arrival and run times for the next phase of the current job
      let newArrivalTime = jobs_[0]["arrivalTime"] + timeElapsed;
      let newRunTime = jobs_[0]["runTime"] - timeElapsed;

      let nextPhaseDetails = [newArrivalTime, newRunTime];

      // add the part/slice that run to final
      final.append({
        arrivalTime: jobs_[0]["arrivalTime"],
        runTime: timeElapsed,
      });

      // remove the original job from it
      jobs_.shift();

      // add the new next phase of the current job to jobs
      jobs_.push(nextPhaseDetails);

      let currTimeStamp = jobs_[0]["arrivalTime"] + timeElapsed;

      // sort
      jobs_.sort((jobA, jobB) => jobA["arrivalTime"] - jobB["arrivalTime"]);

      // get all jobs within currentTimeStamp
      for (let i in jobs_) {
        if (jobs_[i]["arrivalTime"] <= currentTimeStamp) {
          temp.push(jobs_[i]);
        }
      }

      for (let job of temp) jobs_.shift();

      // sort Temp by runTime
      temp.sort((jobA, jobB) => jobA["runTime"] - jobB["runTime"]);

      // shortest to completion
      let stc = temp.shift();
    }
  }
}
