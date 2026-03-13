import axios from "axios";
import React from "react";

const AddJob = () => {

  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;

    const newJob = {
      title: form.title.value,
      company: form.company.value,
      location: form.location.value,
      category: form.category.value,
      jobType: form.jobType.value,
      applicationDeadline: form.applicationDeadline.value,
      salaryRange: {
        min: parseInt(form.minSalary.value),
        max: parseInt(form.maxSalary.value),
        currency: form.currency.value
      },
      description: form.description.value,
      requirements: form.requirements.value.split(",").map(req => req.trim()),
      responsibilities: form.responsibilities.value.split(",").map(res => res.trim()),
      status: form.status.value,
      hr_email: form.hr_email.value,
      hr_name: form.hr_name.value,
      company_logo: form.company_logo.value
    };

    console.log(newJob);
    axios.post('http://localhost:3000/jobs', newJob)
    .then(res => {
        console.log(res)
    })
    .catch(error => {
        console.log(error)
    })
  };

  return (
    <div className="max-w-5xl mx-auto p-6 shadow-xl rounded-xl">

      <h1 className="text-3xl font-bold text-center mb-8">
        Add New Job
      </h1>

      <form onSubmit={handleAddJob} className="space-y-8">

        {/* Basic Info */}
        <fieldset className="border p-6 rounded-lg">
          <legend className="text-lg font-semibold px-2">Basic Info</legend>

          <div className="grid md:grid-cols-2 gap-5">

            <input
              type="text"
              name="title"
              placeholder="Job Title"
              className="input input-bordered w-full"
              required
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className="input input-bordered w-full"
              required
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              className="input input-bordered w-full"
              required
            />

            <input
              type="text"
              name="category"
              placeholder="Category (Engineering, Design...)"
              className="input input-bordered w-full"
            />

            <select
              name="jobType"
              className="select select-bordered w-full"
            >
              <option value="Onsite">Onsite</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
            </select>

            <input
              type="date"
              name="applicationDeadline"
              className="input input-bordered w-full"
            />

          </div>
        </fieldset>


        {/* Salary */}
        <fieldset className="border p-6 rounded-lg">
          <legend className="text-lg font-semibold px-2">Salary Range</legend>

          <div className="grid md:grid-cols-3 gap-5">

            <input
              type="number"
              name="minSalary"
              placeholder="Minimum Salary"
              className="input input-bordered w-full"
            />

            <input
              type="number"
              name="maxSalary"
              placeholder="Maximum Salary"
              className="input input-bordered w-full"
            />

            <input
              type="text"
              name="currency"
              placeholder="Currency (BDT)"
              defaultValue="BDT"
              className="input input-bordered w-full"
            />

          </div>
        </fieldset>


        {/* Job Details */}
        <fieldset className="border p-6 rounded-lg">
          <legend className="text-lg font-semibold px-2">Job Details</legend>

          <div className="space-y-4">

            <textarea
              name="description"
              placeholder="Job Description"
              className="textarea textarea-bordered w-full h-32"
            ></textarea>

            <input
              type="text"
              name="requirements"
              placeholder="Requirements (comma separated)"
              className="input input-bordered w-full"
            />

            <input
              type="text"
              name="responsibilities"
              placeholder="Responsibilities (comma separated)"
              className="input input-bordered w-full"
            />

          </div>
        </fieldset>


        {/* HR Info */}
        <fieldset className="border p-6 rounded-lg">
          <legend className="text-lg font-semibold px-2">HR Information</legend>

          <div className="grid md:grid-cols-2 gap-5">

            <input
              type="text"
              name="hr_name"
              placeholder="HR Name"
              className="input input-bordered w-full"
            />

            <input
              type="email"
              name="hr_email"
              placeholder="HR Email"
              className="input input-bordered w-full"
            />

          </div>
        </fieldset>


        {/* Company */}
        <fieldset className="border p-6 rounded-lg">
          <legend className="text-lg font-semibold px-2">Company Info</legend>

          <div className="grid md:grid-cols-2 gap-5">

            <input
              type="text"
              name="company_logo"
              placeholder="Company Logo URL"
              className="input input-bordered w-full"
            />

            <select
              name="status"
              className="select select-bordered w-full"
              defaultValue="active"
            >
              <option value="active">Active</option>
              <option value="closed">Closed</option>
            </select>

          </div>
        </fieldset>


        <button className="btn btn-primary w-full text-lg">
          Post Job
        </button>

      </form>
    </div>
  );
};

export default AddJob;