import React, { Suspense } from "react";
import JobList from "./JobList";
import useAuth from "../../hooks/useAuth";
import { jobsCreatedByPromise } from "../../api/JobsApi";

const MyPostedJobs = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <p className="text-center text-gray-500 mt-10">
        Please log in to see your posted jobs.
      </p>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">My Posted Jobs</h1>
      <Suspense fallback={<p>Loading your jobs...</p>}>
        <JobList jobsCreatedByPromise={jobsCreatedByPromise(user.email)} />
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;