export function auth(credentials){
    return fetch('http://127.0.0.1:8000/api/authenticate/', {
        method: 'POST',
        headers: {
            'content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(res => res.json())
    .catch(e => console.log(e));
}

export function register(userData){
    return fetch('http://127.0.0.1:8000/api/users/', {
        method: 'POST',
        headers: {
            'content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .catch(e => console.log(e));
}
