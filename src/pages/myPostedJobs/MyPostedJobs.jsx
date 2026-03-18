import React, { Suspense } from 'react';
import JobList from './JobList';
import useAuth from '../../hooks/useAuth';
import { jobsCreatedByPromise } from '../../api/JobsApi';

const MyPostedJobs = () => {
    const {user} = useAuth();
    return (
        <div>
            <h1>My posted jobs are:</h1>
            <Suspense>
                <JobList jobsCreatedByPromise={jobsCreatedByPromise(user.email)}></JobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;