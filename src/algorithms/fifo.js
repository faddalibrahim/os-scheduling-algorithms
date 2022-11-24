/**
 * sort a list jobs according to Arrival Time
 *
 *  @param { Array <Array> } table - The list of jobs to be sorted
 *
 *  @return Array <Array>
 */
export default function FIFO(jobs) {
  const jobs_ = [...jobs];

  jobs_.sort((jobA, jobB) => jobA[0] - jobB[0]);

  let animationDelay = 0;

  for (let i in jobs_) {
    console.log(animationDelay);
    jobs_[i].push(animationDelay);
    animationDelay += jobs_[i][1];
  }

  return jobs_;
}

// export default function SJF(jobs) {
//   const jobs_ = [...jobs];

//   jobs_.sort((a, b) => {
//     if(a[0] == b[0]) return a[1] - b[1]
//   });

//   return jobs_;
// }
