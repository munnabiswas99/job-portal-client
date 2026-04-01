export const jobsCreatedByPromise = (email) => {
  return fetch(`https://job-portal-server-three-sepia.vercel.app/jobs?email=${email}`).then((res) =>
    res.json(),
  );
};
