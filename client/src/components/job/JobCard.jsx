import { useState } from "react";

function JobCard({ job }) {
    const [status, setStatus] = useState(job.status);

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };

    return (
        <section className="job-card" key={job.id}>
            <select
                name="job-status"
                className="job-status"
                value={status}
                onChange={handleStatusChange}
            >
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
            <div className="job-details">
                <h2>{job.jobType}</h2>
                <ul className="job-details">
                    <li className="detail-list">
                        <b>Assigned to: </b>
                        {job.workers.map((worker) => {
                            return <>{worker.name} </>;
                        })}
                    </li>
                    <li className="detail-list">
                        <b>Materials: </b>
                        {job.materials.map((mat) => {
                            return <>{mat} </>;
                        })}
                    </li>
                    <li className="detail-list">
                        <b>Location: </b>
                        {job.location}
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default JobCard;
