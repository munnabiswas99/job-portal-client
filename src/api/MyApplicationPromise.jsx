export const myApplicationPromise = email => {
    return fetch(`https://job-portal-server-three-sepia.vercel.app/applications?email=${email}`, {
        credentials: 'include'
    }).then(res => res.json())
}