import React, { Component, useState } from "react";
import Job from "./Job";
import JobsListHeaderBar from "./JobsListHeaderBar";
import { IJob } from "../model/IJob";

const JobsList = (props: any) => {
  const [uniqueId, setUniqueId] = useState(1);
  const [jobs, setJobs] = useState([]);

  function nextId(): number {
    setUniqueId(uniqueId + 1);
    return uniqueId;
  }

  function nextJobNumber() {
    return jobs.length + 1;
  }

  function add() {
    const newJobs = [
      ...jobs,
      {
        id: nextId(),
        job_number: nextJobNumber(),
        client: "Client name here",
        date: "1/1/2016"
      }
    ];
    setJobs(newJobs);
  }

  function update(newClientName: string, newDateCreated: string, id: any) {
    const newJobs = jobs.map((job: IJob) =>
      job.id !== id
        ? job
        : {
            ...job,
            client: newClientName,
            date: newDateCreated
          }
    );

    setJobs(newJobs);
  }

  function remove(id: string) {
    const newJobs = jobs.filter((job: IJob) => job.id !== +id);
    setJobs(newJobs);
  }

  function renderJob(job: IJob) {
    return (
      <Job
        key={job.id}
        id={job.id}
        onChange={update}
        onRemove={remove}
        client={job.client}
        date={job.date}
        jobNumber={job.job_number}
      >
        {job}
      </Job>
    );
  }

  return (
    <div className="row">
      <JobsListHeaderBar />
      {jobs.map(renderJob)}
      <button onClick={() => add()} className="button">
        Add job
      </button>
    </div>
  );
};

export default JobsList;
