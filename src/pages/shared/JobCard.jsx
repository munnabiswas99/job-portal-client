import { MdLocationPin } from "react-icons/md";
import { NavLink } from "react-router";

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    company_logo,
    company,
    location,
    description,
    salaryRange,
    requirements,
  } = job;
  return (
    <div className="card bg-base-100 w-96 shadow-sm border border-cyan-600">
      <div className="flex gap-2">
        <figure className="w-16">
          <img src={company_logo} alt="Shoes" />
        </figure>
        <div>
            <h1 className="text-4xl">{company}</h1>
            <p className="flex items-center gap-1"><MdLocationPin /> {location}</p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="font-semibold">Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
        <p>{description}</p>
        <div className="card-actions">
            {
                requirements.map((req, index) => <div key={index} className="badge badge-outline">{req}</div>)
            }
        </div>
        <div className="flex justify-end mt-2"><NavLink to={`jobs/${_id}`} className="btn btn-primary w-1/2">Details</NavLink></div>
      </div>
    </div>
  );
};

export default JobCard;
