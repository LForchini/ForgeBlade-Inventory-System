import JobCard from "./JobCard";
import { DummyJobsData } from "../../mock/DummyData";

function Jobs() {
    const jobs = DummyJobsData;
    return (
        <div>
            {jobs.map((job) => <JobCard job={job}/>)}
        </div>
    );
}

export default Jobs;