import fetch from 'isomorphic-fetch'

export default async function sessdata(store, req) {
    if (!!req) {
        const res = await fetch('http://localhost:4000/api/v1/users/profile', {
            headers: {cookie: req.headers.cookie}
        })
        const json = await res.json()
        store.dispatch({type: 'USER', payload: json});
    }
};

