import * as React from 'react'
import { Job } from './Job';

export interface IJob {
    id: number;
    job_number: number;
    client: string;
    date: string;
}

export class JobsListHeaderBar extends React.Component<any, any> {

    render() {
        return (
            <div className="row job-row">
                <span className="small-2 medium-2 large-2 columns table-header-label">Job num</span>
                <span className="small-4 medium-4 large-4 columns table-header-label">Client</span>
                <span className="small-6 medium-6 large-6 columns table-header-label">Date created</span>
            </div>
        )
    }
}

export class JobsList extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { 
            jobs: [
                {
                    id: 0,
                    job_number: 1,
                    client: "FoodWorks",
                    date: "1/1/2019"
                }
            ]
        };
        this.eachJob = this.eachJob.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
    }

    private uniqueId = 0;

    nextId(): number {
        this.uniqueId = this.uniqueId || 0
        return this.uniqueId++
    };

    nextJobNumber() {
        return this.state.jobs.length+1
    };

    add() {
        var jobs = [ 
            ...this.state.jobs, 
            {
                id: this.nextId(),
                job_number: this.nextJobNumber(),
                client: "Client name here",
                date: "1/1/2016"
            }
        ]
        this.setState({jobs})
    };

    update(newClientName: string, newDateCreated: string, id: any) {
        var jobs = this.state.jobs.map(
            (job: IJob) => (job.id !== id) ?
                   job : 
                {
                    ...job, 
                    client: newClientName,
                    date: newDateCreated
                }
            )
        this.setState({jobs})
    };

    remove(id: string) {
        const jobs = this.state.jobs.filter((job: IJob) => job.id !== +id);
        this.setState({ jobs });
    };

    eachJob(job: IJob) {
        return (<Job key={job.id} 
                        id={job.id}
                        onChange={this.update}
                        onRemove={this.remove}
                        client={job.client}
                        date={job.date}
                        jobNumber={job.job_number}
                        >{job}</Job>)
    };

    render() {
        return (
                <div className="row">
                    <JobsListHeaderBar />
                    {this.state.jobs.map(this.eachJob)}
                    <button onClick={ () => this.add() } className="button">Add job</button>
                </div>
            )
    };
}

