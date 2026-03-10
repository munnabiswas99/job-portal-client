import React, { Suspense } from 'react';
import ApplicationStat from './ApplicationStat';
import ApplicationList from './ApplicationList';
import useAuth from '../../hooks/useAuth';
import { myApplicationPromise } from '../../api/MyApplicationPromise';

const MyApplication = () => {
    const {user} = useAuth()
    return (
        <div>
            <h1>My Applications</h1>
            <ApplicationStat></ApplicationStat>
            <Suspense fallback={'Loading applications'}>
                <ApplicationList myApplicationPromise={myApplicationPromise(user.email)}></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplication;