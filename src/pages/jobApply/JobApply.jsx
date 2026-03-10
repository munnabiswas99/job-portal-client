import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const params = useParams();
  const jobId = params.id;
  const { user } = useAuth();
  console.log(jobId, user);

  const handleJobApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const portfolio = form.portfolio.value;
    const resume = form.resume.value;

    const application = {
      jobId,
      applicant: user.email,
      linkedIn,
      github,
      portfolio,
      resume,
    };

    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Application Recorded!",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(linkedIn, github, portfolio, resume);
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-4xl font-semibold">
          Apply for the:{" "}
          <Link to={`/jobs/${params.id}`} className="text-blue-600 underline">
            Job
          </Link>
        </h1>
        <form onSubmit={handleJobApply}>
          <fieldset className="fieldset">
            <label className="label">LinkedIn</label>
            <input
              type="url"
              className="input"
              placeholder="LinkedIn link"
              name="linkedIn"
            />
            <label className="label">Github</label>
            <input
              type="url"
              className="input"
              placeholder="github link"
              name="github"
            />
            <label className="label">Portfolio</label>
            <input
              type="url"
              className="input"
              placeholder="portfolio link"
              name="portfolio"
            />
            <label className="label">Resume</label>
            <input
              type="url"
              className="input"
              placeholder="resume link"
              name="resume"
            />
            <button className="btn btn-neutral mt-4">Apply</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
